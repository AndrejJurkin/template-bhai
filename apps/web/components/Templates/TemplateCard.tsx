import Link from "next/link";
import Image from "next/image";
import { Template } from "../../utils/getAllTemplates";
import { StarUnfilled, StarFilled } from "../../assets/icons";

interface Props {
  template: Template;
  isFavorite: boolean;
  handleFavoriteTemplates: any;
}

export default function TemplateCard({
  template,
  isFavorite,
  handleFavoriteTemplates,
}: Props) {
  return (
    <div className="group relative h-60 w-full overflow-hidden pb-4 md:w-[48%] lg:h-72">
      <div className="relative overflow-hidden rounded">
        <Image
          src={template.src}
          layout="responsive"
          width={1200}
          height={636}
          sizes="40vw"
          quality={100}
        />

        <button
          className="pointer-events-all absolute bottom-2 right-2 z-20 flex rounded-full bg-zinc-800/70 p-1 outline outline-2 outline-black transition-transform duration-100 active:scale-110"
          onClick={() => handleFavoriteTemplates(template.name)}
        >
          {isFavorite ? StarFilled : StarUnfilled}
        </button>
      </div>

      <p className="my-2 text-left text-sm font-medium capitalize lg:text-base">
        {template.name}
      </p>

      <div className="my-4 flex justify-between gap-x-4 overflow-hidden p-px transition-[margin] duration-700 group-hover:mb-10">
        <button className="template-action-button -translate-x-72 bg-zinc-50 text-zinc-800 md:translate-x-0 md:-translate-y-24">
          <Link href="#">
            <a target="_blank">Download</a>
          </Link>
        </button>

        <button className="template-action-button translate-x-72 bg-black text-zinc-50 outline outline-1 outline-zinc-300 md:translate-x-0 md:-translate-y-24">
          <Link href={template.link}>
            <a target="_blank">Live Demo</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
