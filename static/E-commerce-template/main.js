import "./style.css";


const closeSidebar = document.querySelector("#close-sideBar");
const sidebar = document.querySelector("#sidebar");
const openSidebar = document.querySelector("#open-sidebar");
const openSearchModal = document.querySelector("#searchBtn");
const searchModal = document.querySelector("#search-modal");

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove('translate-x-0');
  sidebar.classList.add("translate-x-full");
  console.log("the drawer has been closed");
});
openSidebar.addEventListener("click", () => {
  sidebar.classList.remove("translate-x-full");
  sidebar.classList.add("translate-x-0");
  console.log("the the sidebar has opened has opened");
  
});

openSearchModal.addEventListener("click", () => {
  searchModal.classList.toggle("nav-items--hidden");
  
  console.log("the search modal is opening");
});

  document.querySelector("#copyright-year").innerText =
    new Date().getFullYear();
;