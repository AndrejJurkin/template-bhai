import { Dot } from "./Dot";

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col max-w-4xl px-4 mx-auto pt-32 space-y-8 text-center lg:pt-52"
    >
      <h2 className="text-4xl text-white">
        I worked for
        <Dot />
      </h2>
      <p className="text-lg text-gray-400 2xl:text-2xl">
        <a href="#" className="link">
          Company name
        </a>{" "}
        as Role
        <br></br>
      </p>
      <p className="text-lg text-gray-400 2xl:text-2xl">
        <a href="#" className="link">
          Company name
        </a>{" "}
        as Role
        <br></br>
      </p>
      <p className="text-lg text-gray-400 2xl:text-2xl">
        <a href="#" className="link">
          Company name
        </a>{" "}
        as Role
        <br></br>
      </p>
    </section>
  );
}
