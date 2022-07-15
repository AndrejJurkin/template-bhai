import Image from "next/image";
import Button from "./Button";
import { DotSmall } from "./Dot";

export default function Hero() {
  const headers = ["Lorem Ipsum", "Lorem Prosum"];
  const paragraph =
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aliquam, eligendi aliquid, similique officia odio perferendis maxime molestias nihil totam accusamus, reprehenderit harum esse eaque. Expedita soluta excepturi minus quaerat?";

  return (
    <section className="grid gap-2 px-2 mx-auto mt-16 md:px-8 md:mt-32 md:grid-cols-3 max-w-7xl">
      <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-8 md:items-start md:col-span-2">
        {headers.map((header, index) => {
          return (
            <>
              <h1
                key={index}
                className="text-4xl text-center text-white lg:text-5xl xl:text-6xl "
              >
                {header}

                <div className="hidden md:inline-block">
                  <DotSmall />
                </div>
              </h1>
            </>
          );
        })}

        <p className="text-lg text-center text-gray-400 md:text-left md:text-2xl">
          {paragraph}
        </p>
        <Button title="Button name" href="#" />
      </div>
      <div className="flex justify-center mt-8 md:mt-0 md:justify-end">
        <div className="w-1/2 md:w-full">
          <Image
            className="object-cover object-center rounded-xl"
            alt="hero"
            width="400px"
            height="600px"
            src="/profile.jpg"
          ></Image>
        </div>
      </div>
    </section>
  );
}
