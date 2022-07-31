import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="h-[88px] bg-zinc-800">
      <div className="container py-4">
        <div
          className={`-mx-4 overflow-hidden rounded-lg bg-zinc-700/50 backdrop-blur-lg transition-[height] duration-300 md:flex md:items-center md:justify-between md:bg-transparent md:p-4 ${
            menuOpen ? "h-64" : "h-14"
          }`}
        >
          <div className="flex items-center justify-between p-4 md:p-0">
            <Link href="/">
              <a className="text-lg font-bold leading-none xl:text-xl">
                Template Bhai
              </a>
            </Link>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen((state) => !state)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${menuOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${!menuOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav
            className={`flex flex-col gap-y-6 px-8 py-2 transition-opacity duration-300 md:flex-row md:gap-x-5 md:p-0 md:opacity-100 xl:gap-x-10  ${
              menuOpen ? "opacity-1" : "opacity-0"
            }`}
          >
            <Link href="/templates">
              <a>Templates</a>
            </Link>
            <Link href="/templates">
              <a>Components</a>
            </Link>
            <Link href="/templates">
              <a>Documentation</a>
            </Link>
            <Link href="https://github.com/AndrejJurkin/template-bhai">
              <a>GitHub</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
