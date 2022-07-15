import Link from "next/link";

const brand_name = "Brand Name";

export default function Brand() {
  return (
    <div className="text-xl font-bold text-gray-100 hover:text-gray-300">
      <Link href="/">
        <a>{brand_name}</a>
      </Link>
    </div>
  );
}
