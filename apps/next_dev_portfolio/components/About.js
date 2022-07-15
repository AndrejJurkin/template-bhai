import Button from "./Button";
import { DotSmall } from "./Dot";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl px-4 mx-auto pt-32 space-y-8 text-center lg:mt-52"
    >
      <h2 className="text-4xl text-white">
        About me
        <DotSmall />
      </h2>
      <p className="text-lg text-gray-400 2xl:text-2xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        aliquam, eligendi aliquid, similique officia odio perferendis maxime
        molestias nihil totam accusamus, reprehenderit harum esse eaque.
        Expedita soluta excepturi minus quaerat?
      </p>
      <div>
        <Button title="Get in touch" href="#contact" />
      </div>
    </section>
  );
}
