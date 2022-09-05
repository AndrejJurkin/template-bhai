import Favorites from "./Favorites";
import Filters from "./Filters";

interface Props {
  handleShowFavorites: any;
}

export default function Sidebar({ handleShowFavorites }: Props) {
  return (
    <div className="mt-8 hidden w-1/2 flex-col gap-y-14 self-stretch bg-black p-4 py-8 md:flex">
      <Favorites />

      {/* Uncomment this section after we have sufficient templates */}

      {/* <Filters /> */}
    </div>
  );
}
