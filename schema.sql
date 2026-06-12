-- Cloudflare D1 schema for database: embehome_enquiries
-- Table name is: enquiries  (NOT embehome_enquiries)
--
-- Option A - Cloudflare Dashboard: D1 > embehome_enquiries > Console > paste & Execute
-- Option B - CLI (after wrangler login):
--   npm run db:schema          (remote)
--   npm run db:schema:local    (local dev only)

CREATE TABLE IF NOT EXISTS enquiries (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  requirement_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_enquiries_created
  ON enquiries (created_at DESC);

CREATE TABLE IF NOT EXISTS admin_users (
  id TEXT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Default admin (id generated on first migration; for fresh DB use worker seed or run INSERT with crypto.randomUUID())
INSERT OR IGNORE INTO admin_users (id, username, password)
SELECT
  printf(
    '%08x-%04x-%04x-%04x-%012x',
    abs(random()) % 4294967296,
    abs(random()) % 65536,
    (abs(random()) % 4096) | 4096,
    (abs(random()) % 16384) | 32768,
    abs(random()) % 281474976710656
  ),
  'admin',
  'Demo@123'
WHERE NOT EXISTS (SELECT 1 FROM admin_users WHERE username = 'admin');
