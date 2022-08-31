import Link from "next/link";
import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "../../assets/icons";
import TemplatesNavLinks from "./TemplatesNavLinks";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="h-[88px] md:bg-zinc-800">
      <div className="container py-4">
        <div
          className={`relative z-10 -mx-4 overflow-hidden rounded-lg bg-zinc-700/50 backdrop-blur-lg transition-[height] duration-300 md:flex md:items-center md:justify-between md:bg-transparent md:p-4 lg:overflow-hidden ${
            menuOpen ? "h-auto max-h-96 overflow-y-auto" : "h-14"
          }`}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between bg-zinc-700 p-4 md:bg-transparent md:p-0">
            <Link href="/">
              <a className="text-lg font-bold leading-none xl:text-xl">
                Template Bhai
              </a>
            </Link>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen((state) => !state)}
            >
              <span className={`${menuOpen ? "hidden" : "block"}`}>
                {HamburgerIcon}
              </span>
              <span className={`${!menuOpen ? "hidden" : "block"}`}>
                {CloseIcon}
              </span>
            </button>
          </div>

          <nav
            className={`flex flex-col gap-y-6 px-8 py-2 transition-opacity duration-300 md:flex-row md:gap-x-5 md:p-0 md:opacity-100 xl:gap-x-10  ${
              menuOpen ? "opacity-1 pb-8" : "opacity-0"
            }`}
          >
            <TemplatesNavLinks />
          </nav>
        </div>
      </div>
    </header>
  );
}
