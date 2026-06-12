import { cpSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const staticFolders = ["GoogleOAuthLogin", "AlexaTestLogin"];

for (const folder of staticFolders) {
  const source = path.join(root, folder);
  const destination = path.join(publicDir, folder);

  if (!existsSync(source)) {
    console.warn(`Skipping missing folder: ${folder}`);
    continue;
  }

  mkdirSync(destination, { recursive: true });
  cpSync(source, destination, { recursive: true, force: true });
  console.log(`Copied ${folder} -> public/${folder}`);
}
