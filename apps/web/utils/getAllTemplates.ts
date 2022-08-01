import templatesData from "./template-data.json";

export interface Template {
  name: string;
  link: string;
}

export default async function getAllTemplates() {
  return templatesData;
}
