import "./style.css";

const menuBtn = document.querySelector("#menu-btn");
const sidebar = document.querySelector("#sidebar");
const closeSidebar = document.querySelector("#close-sideBar");

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("translate-x-0");
  sidebar.classList.add("translate-x-full");
});

menuBtn.addEventListener("click", () => {
  sidebar.classList.remove("translate-x-full");
  sidebar.classList.add("translate-x-0");
});

document.querySelector("#copyright-year").innerText = new Date().getFullYear();