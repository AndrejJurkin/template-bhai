import Navlink from "./Navlink";

const nav_items = [
  {
    name: "Home",
    url: "#",
    home: true,
  },
  {
    name: "About",
    url: "#about",
    home: false,
  },
  {
    name: "Experience",
    url: "#experience",
    home: false,
  },
  {
    name: "Skills",
    url: "#skills",
    home: false,
  },
  {
    name: "Projects",
    url: "#projects",
    home: false,
  },
  {
    name: "Contact",
    url: "#contact",
    home: false,
  },
];

export default function Items() {
  return (
    <div>
      <ul className="items-center hidden space-x-6 lg:flex">
        {nav_items.map((item, index) => {
          return (
            <Navlink
              key={index}
              name={item.name}
              url={item.url}
              home={item.home}
            />
          );
        })}
      </ul>
    </div>
  );
}
