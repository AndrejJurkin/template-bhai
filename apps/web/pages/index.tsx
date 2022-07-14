import Link from "next/link";
import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1 className="text-2xl">Hello World!</h1>
      <Link href="/templates">
        <span className="cursor-pointer text-7xl"> - Templates</span>
      </Link>
    </div>
  );
}
