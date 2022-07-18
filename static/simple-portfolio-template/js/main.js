"use strict";

// Variables
const heroSection = document.getElementById(`hero-section`);
const headerNav = document.querySelector(`.navbar`);
const menuButton = document.querySelector(`.menu-button`);
const navItems = document.querySelector(`.nav-items`);

const sliders = document.querySelectorAll(`.slider-section`);
const numberOfsliders = document.querySelectorAll(`.slider-section`).length;
const sliderButtonContainer = document.querySelector(
  `.slider-button-container`
);

const sliderIntervalTime = 5000;

const copyrightYearContainer = document.querySelector(`.copyright-year`);

let sliderInterval,
  currentActiveSlide = 1;

// Functions
function slide() {
  sliders.forEach((slide, index) => {
    const translateFactor = 100 * (index + 1 - currentActiveSlide);
    slide.style.transform = `translateX(${translateFactor}%)`;
  });
}

function slider(direction) {
  function autoSlide() {
    sliderInterval = setInterval(function () {
      currentActiveSlide =
        currentActiveSlide === numberOfsliders ? 1 : currentActiveSlide + 1;

      slide();
    }, sliderIntervalTime);
  }

  if (direction) {
    clearInterval(sliderInterval);

    if (direction === "left") {
      currentActiveSlide =
        currentActiveSlide === 1 ? numberOfsliders : currentActiveSlide - 1;
    } else if (direction === "right") {
      currentActiveSlide =
        currentActiveSlide === numberOfsliders ? 1 : currentActiveSlide + 1;
    }

    slide();

    // Resume auto slider.
    autoSlide();
  } else {
    autoSlide();
  }
}

function setCopyrightYear() {
  copyrightYearContainer.innerText = new Date().getFullYear();
}

// Display nav bar if you scroll past the hero section
function initializeObserver() {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      !entry.isIntersecting
        ? headerNav.classList.add("sticky-nav")
        : headerNav.classList.remove("sticky-nav");
    });
  }, options);

  observer.observe(heroSection);
}

// Event Listeners
window.addEventListener("load", function () {
  slide();
  slider();
  setCopyrightYear();
  initializeObserver();
});

menuButton.addEventListener("click", function () {
  navItems.classList.toggle("nav-items--hidden");
  navItems.classList.toggle("nav-items--active");
});

sliderButtonContainer.addEventListener("click", function (event) {
  slider(event.target.classList[1].split("--")[1]);
});
