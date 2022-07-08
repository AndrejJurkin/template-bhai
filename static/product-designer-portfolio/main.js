const nav = document.querySelector("#nav");
let isMenuOpen = false;
document.querySelector("#menu").addEventListener("click", () => {
  if (isMenuOpen) {
    isMenuOpen = false;
    nav.classList.add("hidden");
  } else {
    nav.classList.remove("hidden");
    isMenuOpen = true;
  }
});
