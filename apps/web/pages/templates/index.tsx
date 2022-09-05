import { useEffect, useState } from "react";
import Head from "next/head";
import fs from "fs";
import Link from "next/link";
import path from "path";
import getAllTemplates from "../../utils/getAllTemplates";
import Header from "../../components/Templates/Header";
import Footer from "../../components/Footer";
import Intro from "../../components/Templates/Intro";
import TemplateList from "../../components/Templates/TemplateList";
import Sidebar from "../../components/Templates/Sidebar";
import FavoritesContext from "../../context/FavoritesContext";

interface TemplatesProps {
  templatesData: {
    name: string;
    link: string;
    src: string;
  }[];
}

export default function Templates({ templatesData }: TemplatesProps) {
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoritesData, setFavoritesData] = useState([
    {
      "template-name": "",
      favorite: false,
    },
  ]);

  const toggleFavoriteFilter = () => setShowFavorites((prevVal) => !prevVal);

  function toggleFavoriteTemplate(templateName: string) {
    const favData = JSON.parse(window.localStorage.getItem("favorites") || "");

    const targetTemplate = favData.filter(
      (template: any) => template["template-name"] === templateName
    )[0];

    const otherTemplates = favData.filter(
      (template: any) => template["template-name"] != templateName
    );

    targetTemplate.favorite = !targetTemplate.favorite;

    const newFavData = [targetTemplate, ...otherTemplates];
    window.localStorage.setItem("favorites", JSON.stringify(newFavData));
    setFavoritesData(newFavData);
  }

  useEffect(() => {
    let favData;

    if (
      window.localStorage.getItem("favorites") &&
      window.localStorage.getItem("favorites")?.length === templatesData.length
    ) {
      favData = JSON.parse(window.localStorage.getItem("favorites") || "");
    } else {
      favData = templatesData.map((template) => ({
        "template-name": template.name,
        favorite: false,
      }));

      window.localStorage.setItem("favorites", JSON.stringify(favData));
    }

    setFavoritesData(favData);
  }, []);

  return (
    <FavoritesContext.Provider value={showFavorites}>
      <div className="font-inter flex min-h-screen flex-col justify-between bg-zinc-900 text-white">
        <Head>
          <title>Templates</title>
        </Head>

        <Header />

        <main className="container my-20 mb-32 flex h-full flex-col items-center justify-center text-center">
          <Intro />

          <section className="mt-10 flex justify-center">
            <Sidebar handleShowFavorites={toggleFavoriteFilter} />
            <TemplateList
              favoritesData={favoritesData}
              templatesData={templatesData}
              handleFavoriteTemplates={toggleFavoriteTemplate}
            />
          </section>
        </main>

        <Footer />
      </div>
    </FavoritesContext.Provider>
  );
}

export async function getStaticProps() {
  const templatesData = await getAllTemplates();

  return {
    props: {
      templatesData,
    },
  };
}
