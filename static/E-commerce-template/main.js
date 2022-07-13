import "./style.css";

const closeSidebar = document.querySelector("#close-sideBar");
const sidebar = document.querySelector("#sidebar");
const openSidebar = document.querySelector("#open-sidebar");
const openSearchModal = document.querySelector("#searchBtn");
const searchModal = document.querySelector("#search-modal");
const overlay = document.querySelector("#overlay");

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("translate-x-0");
  sidebar.classList.add("translate-x-full");
  overlay.classList.toggle("hidden");
});
openSidebar.addEventListener("click", () => {
  sidebar.classList.remove("translate-x-full");
  overlay.classList.toggle("hidden");
  sidebar.classList.add("translate-x-0");
});

openSearchModal.addEventListener("click", () => {
  searchModal.classList.toggle("nav-items--hidden");
});

document.querySelector("#copyright-year").innerText = new Date().getFullYear();
