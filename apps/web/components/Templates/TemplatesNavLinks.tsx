import Link from "next/link";
import MainNavLinks from "../MainNavLinks";
import Separator from "./Separator";
import Filters from "./Filters";
import Favorites from "./Favorites";

export default function NavLinks() {
  return (
    <>
      <MainNavLinks />
      <Separator />

      <div className="md:hidden">
        <Favorites />
        {/* Uncomment this section after we have sufficient templates */}

        {/* <Filters /> */}
      </div>
    </>
  );
}
