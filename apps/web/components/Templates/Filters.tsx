import Favorites from "./Favorites";
import FilterList from "./FilterList";

export default function Filters() {
  const frameworks = [
    { name: "Vanilla JS", "filter-type": "vanilla" },
    { name: "React", "filter-type": "react" },
    { name: "Next JS", "filter-type": "nextjs" },
    { name: "Svelte", "filter-type": "svelte" },
    { name: "Vue", "filter-type": "vue" },
    { name: "Astro", "filter-type": "astro" },
  ];

  const templates = [
    { name: "Product Page", "filter-type": "product-page" },
    { name: "Hotel / Restaurant Business", "filter-type": "hotel-restaurant" },
    { name: "Portfolio", "filter-type": "portfolio" },
    { name: "Technology", "filter-type": "technology" },
    { name: "E-Buisiness Templates", "filter-type": "e-buisiness" },
    { name: "Bank / Finance", "filter-type": "bank-finance" },
  ];

  const filters = [
    { title: "Frameworks", "filter-type": frameworks },
    { title: "Templates", "filter-type": templates },
  ];

  return (
    <section className="my-2 flex flex-col gap-y-2 lg:bg-zinc-900">
      {filters.map((filter, index) => (
        <FilterList
          title={filter.title}
          filter={filter["filter-type"]}
          key={index}
        />
      ))}
    </section>
  );
}
