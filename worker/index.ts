export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  ADMIN_API_TOKEN: string;
}

interface EnquiryRow {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  requirement_type: string;
  message: string;
  created_at: string;
}

interface EnquiryPayload {
  name: string;
  company?: string;
  email: string;
  phone: string;
  requirementType: string;
  message: string;
}

interface AdminUserRow {
  id: string;
  username: string;
  password: string;
}

const JSON_HEADERS = { "Content-Type": "application/json" };

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

function unauthorized(): Response {
  return json({ error: "Unauthorized" }, 401);
}

function isAuthorized(request: Request, env: Env): boolean {
  const auth = request.headers.get("Authorization");
  return auth === `Bearer ${env.ADMIN_API_TOKEN}`;
}

function isValidUuid(id: string): boolean {
  return UUID_REGEX.test(id);
}

function mapRow(row: EnquiryRow) {
  return {
    id: row.id,
    name: row.name,
    company: row.company ?? "",
    email: row.email,
    phone: row.phone,
    requirementType: row.requirement_type,
    message: row.message,
    submittedAt: row.created_at,
  };
}

function validateEnquiry(body: EnquiryPayload): string | null {
  if (!body.name?.trim()) return "Name is required";
  if (!body.email?.trim()) return "Email is required";
  if (!body.phone?.trim()) return "Phone is required";
  if (!body.requirementType?.trim()) return "Requirement type is required";
  if (!body.message?.trim()) return "Message is required";
  return null;
}

async function validateAdminLogin(
  env: Env,
  username: string,
  password: string
): Promise<boolean> {
  const user = await env.DB.prepare(
    `SELECT id, username, password FROM admin_users WHERE username = ? LIMIT 1`
  )
    .bind(username)
    .first<AdminUserRow>();

  return !!user && user.password === password;
}

async function handleApi(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const { pathname } = url;
  const method = request.method;

  if (pathname === "/api/admin/login" && method === "POST") {
    const body = (await request.json()) as { username?: string; password?: string };
    const username = body.username?.trim() ?? "";
    const password = body.password ?? "";

    if (!username || !password) {
      return json({ error: "Username and password are required" }, 400);
    }

    const valid = await validateAdminLogin(env, username, password);
    if (valid) {
      return json({ ok: true, token: env.ADMIN_API_TOKEN });
    }
    return json({ error: "Invalid credentials" }, 401);
  }

  if (pathname === "/api/enquiries" && method === "POST") {
    const body = (await request.json()) as EnquiryPayload;
    const validationError = validateEnquiry(body);
    if (validationError) return json({ error: validationError }, 400);

    const id = crypto.randomUUID();

    await env.DB.prepare(
      `INSERT INTO enquiries (id, name, company, email, phone, requirement_type, message, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))`
    )
      .bind(
        id,
        body.name.trim(),
        body.company?.trim() || null,
        body.email.trim(),
        body.phone.trim(),
        body.requirementType.trim(),
        body.message.trim()
      )
      .run();

    const row = await env.DB.prepare(
      `SELECT id, name, company, email, phone, requirement_type, message, created_at
       FROM enquiries WHERE id = ?`
    )
      .bind(id)
      .first<EnquiryRow>();

    return json({ ok: true, enquiry: row ? mapRow(row) : null }, 201);
  }

  if (pathname === "/api/enquiries" && method === "GET") {
    if (!isAuthorized(request, env)) return unauthorized();

    const { results } = await env.DB.prepare(
      `SELECT id, name, company, email, phone, requirement_type, message, created_at
       FROM enquiries
       ORDER BY datetime(created_at) DESC`
    ).all<EnquiryRow>();

    return json({ enquiries: (results ?? []).map(mapRow) });
  }

  const deleteMatch = pathname.match(/^\/api\/enquiries\/([^/]+)$/);
  if (deleteMatch && method === "DELETE") {
    if (!isAuthorized(request, env)) return unauthorized();

    const id = deleteMatch[1];
    if (!isValidUuid(id)) {
      return json({ error: "Invalid enquiry id" }, 400);
    }

    await env.DB.prepare(`DELETE FROM enquiries WHERE id = ?`).bind(id).run();

    return json({ ok: true });
  }

  return json({ error: "Not found" }, 404);
}

const STATIC_PAGE_ROUTES: Record<string, string> = {
  "/GoogleOAuthLogin": "/GoogleOAuthLogin/index.html",
  "/GoogleOAuthLogin/": "/GoogleOAuthLogin/index.html",
  "/AlexaTestLogin": "/AlexaTestLogin/index.html",
  "/AlexaTestLogin/": "/AlexaTestLogin/index.html",
  "/AlexaTestLogin/privacy": "/AlexaTestLogin/privacy.html",
  "/AlexaTestLogin/privacy/": "/AlexaTestLogin/privacy.html",
};

function serveStaticPage(request: Request, env: Env): Promise<Response> | null {
  const { pathname } = new URL(request.url);
  const assetPath = STATIC_PAGE_ROUTES[pathname];
  if (!assetPath) return null;

  const assetUrl = new URL(assetPath, request.url);
  return env.ASSETS.fetch(new Request(assetUrl.toString(), request));
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      try {
        return await handleApi(request, env);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Internal server error";
        return json({ error: message }, 500);
      }
    }

    const staticPage = serveStaticPage(request, env);
    if (staticPage) return staticPage;

    return env.ASSETS.fetch(request);
  },
};
