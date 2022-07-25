import fs from "fs";
import Link from "next/link";
import path from "path";
import getAllTemplates from "../../utils/getAllTemplates";

interface TemplatesProps {
  templatesData: {
    name: string;
    link: string;
  }[];
}

export default function Templates({ templatesData }: TemplatesProps) {
  return (
    <div className="mt-20 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold">Templates Page</h1>
      <nav className="mt-8 flex flex-col space-y-1 text-blue-500">
        {templatesData.map((templateData, index) => (
          <Link href={templateData.link} key={index}>
            <a>{templateData.name}</a>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export async function getStaticProps() {
  const templatesData = await getAllTemplates();

  return {
    props: {
      templatesData,
    },
  };
}
