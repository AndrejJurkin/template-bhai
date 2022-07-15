import { DotSmall } from "./Dot";

export default function About() {
  const link_style = "underline underline-offset-2 hover:text-blue-800";
  return (
    <section
      id="experience"
      className="flex flex-col max-w-4xl px-4 mx-auto pt-32 space-y-8 text-center lg:pt-52"
    >
      <h2 className="text-4xl text-white">
        I worked for
        <DotSmall />
      </h2>
      <p className="text-lg text-gray-400 2xl:text-2xl">
        <a href="#" className={link_style}>
          Company name
        </a>{" "}
        as Role
        <br></br>
      </p>
      <p className="text-lg text-gray-400 2xl:text-2xl">
        <a href="#" className={link_style}>
          Company name
        </a>{" "}
        as Role
        <br></br>
      </p>
      <p className="text-lg text-gray-400 2xl:text-2xl">
        <a href="#" className={link_style}>
          Company name
        </a>{" "}
        as Role
        <br></br>
      </p>
    </section>
  );
}
