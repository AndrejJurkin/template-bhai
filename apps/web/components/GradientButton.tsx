import Link from "next/link";

interface GradientButtonProps {
  text: string;
  url: string;
}

export default function GradientButton({ text, url }: GradientButtonProps) {
  return (
    <Link href={url}>
      <button className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-7 font-medium">
        {text}
      </button>
    </Link>
  );
}
