import { TemplateInterface } from "../utils/getAllTemplates";

interface CardProps {
  template: TemplateInterface;
}

export default function Card({ template }: CardProps) {
  return (
    <a href={template.link} className="max-w-xs xl:max-w-none">
      <img
        className="rounded-lg"
        src="/previews/digital-agency.png"
        alt="Digital Agency Preview"
      />
      <h3 className="mt-4 font-medium">{template.name}</h3>
    </a>
  );
}
