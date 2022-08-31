import TemplateCard from "../../components/Templates/TemplateCard";

interface Props {
  favoriteList: { "template-name": string; favorite: boolean }[];
  templatesData: {
    name: string;
    link: string;
    src: string;
  }[];
  handleFavoriteTemplates: any;
}

export default function TemplateList({
  favoriteList,
  templatesData,
  handleFavoriteTemplates,
}: Props) {
  return (
    <div className="mt-8 flex w-full flex-wrap justify-between gap-2 gap-y-7 px-8 md:gap-y-24 md:py-2">
      {favoriteList.length === templatesData.length &&
        templatesData.map((template, index) => {
          const isFavorite = favoriteList.filter(
            (currTemplate) => currTemplate["template-name"] === template.name
          )[0].favorite;

          return (
            <TemplateCard
              template={template}
              isFavorite={isFavorite}
              handleFavoriteTemplates={handleFavoriteTemplates}
              key={index}
            />
          );
        })}
    </div>
  );
}
