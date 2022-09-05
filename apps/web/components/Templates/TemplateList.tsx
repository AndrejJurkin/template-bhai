import TemplateCard from "../../components/Templates/TemplateCard";
import PageNavigation from "./PageNavigation";

interface Props {
  favoritesData: { "template-name": string; favorite: boolean }[];
  templatesData: {
    name: string;
    link: string;
    src: string;
  }[];
  handleFavoriteTemplates: any;
}

export default function TemplateList({
  favoritesData,
  templatesData,
  handleFavoriteTemplates,
}: Props) {
  const maxTemplatesPerPage: number = 6;

  return (
    <div className="mt-8 flex w-full flex-wrap justify-between gap-2 gap-y-4 md:gap-y-7 md:px-8 md:py-2">
      {templatesData.map((template, index) => {
        const isFavorite = favoritesData.filter(
          (currTemplate) => currTemplate["template-name"] === template.name
        )[0]?.favorite;

        return (
          <TemplateCard
            template={template}
            isFavorite={isFavorite}
            handleFavoriteTemplates={handleFavoriteTemplates}
            key={index}
          />
        );
      })}

      {templatesData.length > maxTemplatesPerPage && <PageNavigation />}
    </div>
  );
}
