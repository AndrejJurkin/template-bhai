import fs from "fs";
import Link from "next/link";
import path from "path";

interface TemplateProps {
  path: string;
}

export default function Template({ path }: TemplateProps) {
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="text-3xl font-bold">Individual Template Page</h1>
      <p className="mt-6 text-lg">
        You are visiting <b>{path}</b>
      </p>
      <Link href={`/templates/${path}/dist/`}>
        <a className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
          Preview Template
        </a>
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  const rawPaths = fs.readdirSync(
    path.join(__dirname, "../../../../../../static")
  );

  const filteredPaths = rawPaths.filter((path) => {
    if (path.includes(".") || path.includes("_")) {
      return false;
    }
    return true;
  });

  const paths = filteredPaths.map((path) => ({
    params: {
      template: path,
    },
  }));

  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ params: { template } }: any) {
  return {
    props: {
      path: template,
    },
  };
}
