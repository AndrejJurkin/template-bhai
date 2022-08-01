import Card from "./Card";
import GradientButton from "./GradientButton";
import { Template } from "../utils/getAllTemplates";

interface TemplatesSectionProps {
  templates: Template[];
}

export default function TemplatesSection({ templates }: TemplatesSectionProps) {
  return (
    <section className="pb-14">
      <div className="container">
        <div className="flex justify-center lg:justify-between">
          <h2 className="text-3xl font-bold lg:text-4xl">Templates</h2>
          <div className="hidden lg:block">
            <GradientButton text="View All Templates" url="/templates" />
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-y-12 sm:grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
          {templates.map((template, index) => (
            <Card key={index} template={template} />
          ))}
        </div>
        <div className="mt-10 flex justify-center lg:hidden">
          <GradientButton text="View All Templates" url="/templates" />
        </div>
      </div>
    </section>
  );
}
