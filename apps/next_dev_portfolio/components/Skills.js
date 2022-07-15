import { DotSmall } from "./Dot";
import {
  ReactIcon,
  NextIcon,
  TailwindIcon,
  MUIIcon,
  DockerIcon,
  DjangoIcon,
} from "./Icons/Devicons";
import Link from "next/link";

export default function Skills() {
  const [width, height] = [100, 100];
  return (
    <section
      id="skills"
      className="max-w-4xl px-4 mx-auto pt-32 space-y-8 text-center lg:pt-52"
    >
      <h2 className="text-4xl text-white">
        I work with
        <DotSmall />
      </h2>

      <div className="grid grid-cols-2 gap-4 text-white lg:grid-cols-6 ">
        <p className="flex flex-col items-center justify-center">
          <Link href="https://reactjs.org/">
            <a className="mb-2 text-gray-400 link">React</a>
          </Link>
          <ReactIcon width={width} height={height} />
        </p>
        <p className="flex flex-col items-center justify-center">
          <Link href="https://nextjs.org">
            <a className="mb-2 text-gray-400 link">Next.js</a>
          </Link>
          <NextIcon width={width} height={height} />
        </p>
        <p className="flex flex-col items-center justify-center">
          <Link href="https://tailwindcss.com">
            <a className="mb-2 text-gray-400 link">TailwindCSS</a>
          </Link>
          <TailwindIcon width={width} height={height} />
        </p>
        <p className="flex flex-col items-center justify-center">
          <Link href="https://mui.com">
            <a className="mb-2 text-gray-400 link">Material UI</a>
          </Link>
          <MUIIcon width={width} height={height} />
        </p>
        <p className="flex flex-col items-center justify-center">
          <Link href="https://www.djangoproject.com">
            <a className="mb-2 text-gray-400 link">Django</a>
          </Link>
          <DjangoIcon width={width} height={height} />
        </p>
        <p className="flex flex-col items-center justify-center">
          <Link href="https://www.docker.com">
            <a className="mb-2 text-gray-400 link">Docker</a>
          </Link>
          <DockerIcon width={width} height={height} />
        </p>
      </div>
    </section>
  );
}
