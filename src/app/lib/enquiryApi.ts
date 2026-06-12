import type { Enquiry } from "./EnquiryStore";

const API_BASE = "/api";

function getAdminToken(): string | null {
  return sessionStorage.getItem("embehome_admin_token");
}

async function parseJson<T>(response: Response): Promise<T> {
  const text = await response.text();
  try {
    const data = JSON.parse(text) as T & { error?: string };
    if (!response.ok) {
      throw new Error(data.error ?? `Request failed (${response.status})`);
    }
    return data;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(
        `API error (${response.status}). Is the API server running? Run: npm run dev:api`
      );
    }
    throw error;
  }
}

export async function loginAdmin(
  username: string,
  password: string
): Promise<string> {
  const response = await fetch(`${API_BASE}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await parseJson<{ ok: boolean; token: string }>(response);
  return data.token;
}

export async function submitEnquiry(
  data: Omit<Enquiry, "id" | "submittedAt">
): Promise<Enquiry> {
  const response = await fetch(`${API_BASE}/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await parseJson<{ ok: boolean; enquiry: Enquiry }>(response);
  return result.enquiry;
}

export async function fetchEnquiries(): Promise<Enquiry[]> {
  const token = getAdminToken();
  if (!token) throw new Error("Not authenticated");

  const response = await fetch(`${API_BASE}/enquiries`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await parseJson<{ enquiries: Enquiry[] }>(response);
  return data.enquiries;
}

export async function deleteEnquiryApi(id: string): Promise<void> {
  const token = getAdminToken();
  if (!token) throw new Error("Not authenticated");

  const response = await fetch(`${API_BASE}/enquiries/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  await parseJson<{ ok: boolean }>(response);
}
