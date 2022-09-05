import Link from "next/link";

export default function PageNavigation() {
  function switchPage() {
    // Coming soon...
  }

  return (
    <section className="w-full">
      <div className="flex h-5 justify-center md:h-8">
        <Link href="">
          <a className="flex w-5 items-center justify-center rounded bg-sky-500 p-3 text-xs font-medium transition-colors hover:bg-sky-400 md:w-8 md:text-base">
            1
          </a>
        </Link>
      </div>

      <div className="mt-8">
        <p className="relative text-xs text-zinc-300 before:absolute before:right-[55%] before:left-0 before:top-1/2 before:h-px before:bg-zinc-200/10 before:content-[''] after:absolute after:left-[55%] after:right-0 after:top-1/2 after:h-px after:bg-zinc-200/10 after:content-[''] md:text-base">
          OR
        </p>

        <form
          className="mt-8 flex flex-row justify-center"
          onSubmit={switchPage}
        >
          <input
            type="number"
            name="Page Number"
            className="mx-2 w-3/5 rounded-sm border-none bg-zinc-200 p-1 text-xs text-zinc-900 outline-none focus:bg-zinc-100 md:p-2  md:text-base"
            placeholder="Enter Page Number"
          />
          <button className="w-2/5 rounded-sm bg-sky-500 p-1 px-2 text-xs transition-colors hover:bg-sky-400 md:w-40 md:text-base">
            Go To Page
          </button>
        </form>
      </div>
    </section>
  );
}
