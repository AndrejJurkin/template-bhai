import Link from "next/link";
import { ExpandArrow } from "../../assets/icons";

interface Props {
  title: string;
  filter: { name: string; "filter-type": string }[];
}

export default function FilterList({ title, filter }: Props) {
  return (
    <section className="rounded bg-zinc-800/80 backdrop-blur-lg md:bg-transparent">
      <div className="flex items-center justify-between rounded bg-zinc-900 p-2 lg:bg-zinc-700">
        <p className="text-sm text-zinc-100">{title}</p>
        <div className="md:hidden">{ExpandArrow}</div>
      </div>

      <div className="p-2">
        {filter.map((filterItem, index) => (
          <Link href="/templates" key={index}>
            <a className="my-2 block text-zinc-200 hover:text-zinc-50 md:my-4 md:text-left">
              {filterItem.name}
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
