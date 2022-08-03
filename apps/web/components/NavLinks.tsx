import Link from "next/link";

export default function NavLinks() {
  return (
    <>
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
    </>
  );
}
