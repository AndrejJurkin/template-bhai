import { Stats } from "../utils/getStatsAndContributors";

interface Props {
  stats: Stats;
}

export default function StatSection({ stats }: Props) {
  return (
    <section className="py-14">
      <div className="container grid grid-cols-2 gap-y-9 gap-x-12 text-center sm:grid-cols-4">
        {Object.keys(stats).map((stat, index) => (
          <Stat key={index} stat={stat} value={stats[stat as keyof Stats]} />
        ))}
      </div>
    </section>
  );
}

interface StatProps {
  stat: string;
  value: number;
}

function Stat({ stat, value }: StatProps) {
  return (
    <div className="space-y-1 xl:space-y-2">
      <div className="text-4xl font-bold xl:text-5xl">{value}</div>
      <div className="capitalize text-slate-400 xl:text-xl">{stat}</div>
    </div>
  );
}
