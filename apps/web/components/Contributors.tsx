import { ContributorsInterface } from "../utils/getStatsAndContributors";

interface ContributorsProps {
  contributors: ContributorsInterface;
}

export default function Contributors({ contributors }: ContributorsProps) {
  return (
    <section className="mt-10 pb-14 xl:pb-24">
      <div className="container">
        <h2 className="text-center text-3xl font-bold lg:text-4xl xl:text-5xl">
          Contributors
        </h2>
        <p className="mt-3 text-center text-slate-400 lg:text-lg xl:text-xl xl:font-medium">
          Highly professional and capable.
        </p>
        <div className="mt-14 flex flex-wrap justify-center gap-x-12 gap-y-14 sm:gap-x-20 xl:gap-x-40 xl:gap-y-24">
          {contributors.map((contributor, index) => (
            <figure key={index} className="flex flex-col items-center">
              <img
                className="h-24 w-24 rounded-full"
                src={contributor.avatarUrl}
                alt={contributor.name}
              />
              <figcaption className="mt-2 text-lg font-bold">
                {contributor.name}
              </figcaption>
              <a
                className="font-medium text-indigo-300 xl:text-lg"
                href={`https://github.com/${contributor.username}`}
              >
                @{contributor.username}
              </a>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
