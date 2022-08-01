import { StatsInterface } from "../utils/getStatsAndContributors";

interface StatsProps {
  stats: StatsInterface;
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-14">
      <div className="container grid grid-cols-2 gap-y-9 gap-x-12 text-center sm:grid-cols-4">
        <div className="space-y-1 xl:space-y-2">
          <div className="text-4xl font-bold xl:text-5xl">
            {stats.templates}
          </div>
          <div className="text-slate-400 xl:text-xl">Templates</div>
        </div>
        <div className="space-y-1 xl:space-y-2">
          <div className="text-4xl font-bold xl:text-5xl">
            {stats.contributors}
          </div>
          <div className="text-slate-400 xl:text-xl">Contributors</div>
        </div>
        <div className="space-y-1 xl:space-y-2">
          <div className="text-4xl font-bold xl:text-5xl">{stats.commits}+</div>
          <div className="text-slate-400 xl:text-xl">Commits</div>
        </div>
        <div className="space-y-1 xl:space-y-2">
          <div className="text-4xl font-bold xl:text-5xl">
            {stats.githubStars}
          </div>
          <div className="text-slate-400 xl:text-xl">GitHub Stars</div>
        </div>
      </div>
    </section>
  );
}
