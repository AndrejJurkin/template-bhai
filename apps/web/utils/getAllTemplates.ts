import templatesData from "./template-data.json";

export interface TemplateInterface {
  name: string;
  link: string;
}

export interface TemplatesInterface extends Array<TemplateInterface> {}

export default async function getAllTemplates() {
  return templatesData;
}
