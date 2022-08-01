import Image from "next/image";
import { Template } from "../utils/getAllTemplates";

interface Props {
  template: Template;
}

export default function Card({ template }: Props) {
  return (
    <a href={template.link} className="max-w-xs xl:max-w-none">
      <div className="overflow-hidden rounded-lg">
        <Image
          src="/previews/digital-agency.png"
          layout="responsive"
          width={1200}
          height={636}
        />
      </div>
      <h3 className="mt-4 font-medium">{template.name}</h3>
    </a>
  );
}
