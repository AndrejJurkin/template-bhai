import { spawn } from "node:child_process";
import fs from "fs-extra";
import path from "path";

export async function deployScript() {
  // run `yarn build`
  const child = spawn(`yarn build`, { stdio: "inherit", shell: true });

  await new Promise((resolve, reject) => {
    child.on("error", reject);
    child.on("close", (code) => {
      resolve(code);
    });
  });

  const deployableTemplates = await fs.readdir(path.join("static"));

  // copy <template-name>/dist to next public
  deployableTemplates.forEach(async (template) => {
    fs.copy(
      path.join("static", template, "dist"),
      path.join(`apps/web/public/templates/${template.toLowerCase()}`)
    );
  });
}
