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

  // figure out deployable templates
  const templatesData = await fs.readJSON(
    path.join("apps/web/utils/template-data.json")
  );

  const templatesPath = templatesData.map((data) => data.link.slice(11));

  const filesInStatic = await fs.readdir(path.join("static"));

  const deployableTemplates = filesInStatic.filter((filename) =>
    templatesPath.includes(filename.toLowerCase())
  );

  // copy <template-name>/dist to next public
  deployableTemplates.forEach(async (template) => {
    fs.copy(
      path.join("static", template, "dist"),
      path.join(`apps/web/public/templates/${template.toLowerCase()}`)
    );
  });
}
