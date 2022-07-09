import "./style.css";

window.addEventListener("load", () => {
  const toggleManuBtn = document.querySelector("#toggle-menu-btn");
  const hamIcon = document.querySelector("#toggle-menu-btn > img:first-child");
  const closeIcon = document.querySelector("#toggle-menu-btn > img:last-child");

  const navMenu = document.querySelector("#nav-menu");

  const overlay = document.querySelector("#overlay");

  toggleManuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");

    hamIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");

    overlay.classList.toggle("hidden");
  });

  document.querySelector("#copyright-year").innerText =
    new Date().getFullYear();
});
