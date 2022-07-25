import fs from "fs";
import Link from "next/link";
import path from "path";

export default function Templates({ paths }) {
  return (
    <div className="mt-20 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold">Templates Page</h1>
      <nav className="mt-8 flex flex-col space-y-1 text-blue-500">
        {paths.map((path) => (
          <Link href={`/templates/${path}`}>
            <a>{path}</a>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export async function getStaticProps() {
  const rawPaths = fs.readdirSync(
    path.join(__dirname, "../../../../../static")
  );

  const paths = rawPaths.filter((path) => {
    if (path.includes(".") || path.includes("_")) {
      return false;
    }
    return true;
  });

  return {
    props: {
      paths,
    },
  };
}
