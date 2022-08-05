import { Dot } from "./Dot";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-4xl px-4 mx-auto pt-32 space-y-8 text-center lg:lg:pt-52"
    >
      <h2 className="text-4xl text-white">
        Projects
        <Dot />
      </h2>
      <div className="gap-8 xl:grid xl:grid-cols-2">
        <div className="flex items-center h-full max-w-xl p-4 mx-auto my-2 overflow-hidden rounded shadow-lg bg-neutral-800">
          <div className="px-6 py-4">
            <h3 className="mb-2 text-xl font-bold">Project tittle</h3>
            <p className="mt-4 text-xl text-gray-400 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem harum, quisquam totam sunt cumque facilis vel laborum
              necessitatibus ab dolorum illo sed consectetur nulla modi officia
              iure, quis nam similique!
            </p>
          </div>
        </div>
        <div className="flex items-center h-full max-w-xl p-4 mx-auto my-2 overflow-hidden rounded shadow-lg bg-neutral-800">
          <div className="px-6 py-4">
            <h3 className="mb-2 text-xl font-bold">Project tittle</h3>
            <p className="mt-4 text-xl text-gray-400 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem harum, quisquam totam sunt cumque facilis vel laborum
              necessitatibus ab dolorum illo sed consectetur nulla modi officia
              iure, quis nam similique!
            </p>
          </div>
        </div>
        <div className="flex items-center h-full max-w-xl p-4 mx-auto my-2 overflow-hidden rounded shadow-lg bg-neutral-800">
          <div className="px-6 py-4">
            <h3 className="mb-2 text-xl font-bold">Project tittle</h3>
            <p className="mt-4 text-xl text-gray-400 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem harum, quisquam totam sunt cumque facilis vel laborum
              necessitatibus ab dolorum illo sed consectetur nulla modi officia
              iure, quis nam similique!
            </p>
          </div>
        </div>
        <div className="flex items-center h-full max-w-xl p-4 mx-auto my-2 overflow-hidden rounded shadow-lg bg-neutral-800">
          <div className="px-6 py-4">
            <h3 className="mb-2 text-xl font-bold">Project tittle</h3>
            <p className="mt-4 text-xl text-gray-400 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem harum, quisquam totam sunt cumque facilis vel laborum
              necessitatibus ab dolorum illo sed consectetur nulla modi officia
              iure, quis nam similique!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
