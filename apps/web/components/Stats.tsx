import { StatsInterface } from "../utils/getStatsAndContributors";

interface StatsProps {
  stats: StatsInterface;
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-14">
      <div className="container grid grid-cols-2 gap-y-9 gap-x-12 text-center sm:grid-cols-4">
        <p className="space-y-1 xl:space-y-2">
          <span className="block text-4xl font-bold xl:text-5xl">
            {stats.templates}
          </span>
          <span className="block text-slate-400 xl:text-xl">Templates</span>
        </p>
        <p className="space-y-1 xl:space-y-2">
          <span className="block text-4xl font-bold xl:text-5xl">
            {stats.contributors}
          </span>
          <span className="block text-slate-400 xl:text-xl">Contributors</span>
        </p>
        <p className="space-y-1 xl:space-y-2">
          <span className="block text-4xl font-bold xl:text-5xl">
            {stats.commits}+
          </span>
          <span className="block text-slate-400 xl:text-xl">Commits</span>
        </p>
        <p className="space-y-1 xl:space-y-2">
          <span className="block text-4xl font-bold xl:text-5xl">
            {stats.githubStars}
          </span>
          <span className="block text-slate-400 xl:text-xl">GitHub Stars</span>
        </p>
      </div>
    </section>
  );
}
