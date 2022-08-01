import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import StatSection from "../components/Stats";
import TemplatesSection from "../components/TemplatesSection";
import Contributors from "../components/Contributors";
import Footer from "../components/Footer";
import getAllTemplates, { Template } from "../utils/getAllTemplates";
import {
  getStats,
  getContributors,
  Stats,
  Contributor,
} from "../utils/getStatsAndContributors";

interface WebProps {
  stats: Stats;
  contributors: Contributor[];
  templates: Template[];
}

export default function Web({ stats, contributors, templates }: WebProps) {
  return (
    <div className="font-inter text-white">
      <Head>
        <title>Template Bhai</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />

      <main>
        <HeroSection />
        <div className="bg-zinc-900">
          <StatSection stats={stats} />
          <TemplatesSection templates={templates} />
          <Contributors contributors={contributors} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const [stats, contributors, templates] = await Promise.all([
    getStats(),
    getContributors(),
    getAllTemplates(),
  ]);

  return {
    props: {
      stats,
      contributors,
      templates,
    },
  };
}
