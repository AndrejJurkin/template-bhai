import Link from "next/link";

export default function Brand() {
  return (
    <>
      <div className="text-xl font-bold text-gray-100 hover:text-gray-300">
        <Link href="/">
          <a>Brand Name</a>
        </Link>
      </div>
    </>
  );
}
