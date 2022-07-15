import { Dot } from "./Dot";
import Link from "next/link";
import {
  ReactIcon,
  NextIcon,
  TailwindIcon,
  MUIIcon,
  DockerIcon,
  DjangoIcon,
} from "./Icons/Devicons";

const [width, height] = [100, 100];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-4xl px-4 mx-auto pt-32 space-y-8 text-center lg:pt-52"
    >
      <h2 className="text-4xl text-white">
        I work with
        <Dot />
      </h2>

      <ul className="grid grid-cols-2 gap-4 text-white lg:grid-cols-6 ">
        <li className="flex flex-col items-center justify-center">
          <Link href="https://reactjs.org/">
            <a className="mb-2 text-gray-400 link">React</a>
          </Link>
          <ReactIcon width={width} height={height} />
        </li>
        <li className="flex flex-col items-center justify-center">
          <Link href="https://nextjs.org">
            <a className="mb-2 text-gray-400 link">Next.js</a>
          </Link>
          <NextIcon width={width} height={height} />
        </li>
        <li className="flex flex-col items-center justify-center">
          <Link href="https://tailwindcss.com">
            <a className="mb-2 text-gray-400 link">TailwindCSS</a>
          </Link>
          <TailwindIcon width={width} height={height} />
        </li>
        <li className="flex flex-col items-center justify-center">
          <Link href="https://mui.com">
            <a className="mb-2 text-gray-400 link">Material UI</a>
          </Link>
          <MUIIcon width={width} height={height} />
        </li>
        <li className="flex flex-col items-center justify-center">
          <Link href="https://www.djangoproject.com">
            <a className="mb-2 text-gray-400 link">Django</a>
          </Link>
          <DjangoIcon width={width} height={height} />
        </li>
        <li className="flex flex-col items-center justify-center">
          <Link href="https://www.docker.com">
            <a className="mb-2 text-gray-400 link">Docker</a>
          </Link>
          <DockerIcon width={width} height={height} />
        </li>
      </ul>
    </section>
  );
}
