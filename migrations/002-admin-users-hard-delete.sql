-- Admin credentials table
CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT OR IGNORE INTO admin_users (username, password) VALUES ('admin', 'Demo@123');

-- Permanently remove previously soft-deleted enquiries
DELETE FROM enquiries WHERE is_deleted = 1;
