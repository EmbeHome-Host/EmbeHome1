-- Migrate enquiries to UUID primary keys
CREATE TABLE enquiries_uuid (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  requirement_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO enquiries_uuid (id, name, company, email, phone, requirement_type, message, created_at)
SELECT
  printf(
    '%08x-%04x-%04x-%04x-%012x',
    abs(random()) % 4294967296,
    abs(random()) % 65536,
    (abs(random()) % 4096) | 4096,
    (abs(random()) % 16384) | 32768,
    abs(random()) % 281474976710656
  ),
  name,
  company,
  email,
  phone,
  requirement_type,
  message,
  created_at
FROM enquiries;

DROP TABLE enquiries;
ALTER TABLE enquiries_uuid RENAME TO enquiries;

CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries (created_at DESC);

-- Migrate admin_users to UUID primary keys
CREATE TABLE admin_users_uuid (
  id TEXT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO admin_users_uuid (id, username, password, created_at)
SELECT
  printf(
    '%08x-%04x-%04x-%04x-%012x',
    abs(random()) % 4294967296,
    abs(random()) % 65536,
    (abs(random()) % 4096) | 4096,
    (abs(random()) % 16384) | 32768,
    abs(random()) % 281474976710656
  ),
  username,
  password,
  created_at
FROM admin_users;

DROP TABLE admin_users;
ALTER TABLE admin_users_uuid RENAME TO admin_users;
