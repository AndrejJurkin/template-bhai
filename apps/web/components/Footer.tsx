import Link from "next/link";
import { TwitterIcon, GithubIcon } from "../assets/icons";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 py-12 lg:py-16">
      <div className="container">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
          <a
            className="text-lg font-bold leading-none md:text-xl xl:text-2xl"
            href="/"
          >
            Template Bhai
          </a>
          <nav className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-2 lg:mt-0">
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
        <hr className="mt-5 border-zinc-500 lg:mt-8" />
        <div className="mt-5 flex items-center justify-between lg:mt-8">
          <p>©{new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex space-x-3 lg:space-x-5">
            <a href="https://twitter.com/reactive_dude">{TwitterIcon}</a>
            <a href="https://github.com/AndrejJurkin/template-bhai">
              {GithubIcon}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
