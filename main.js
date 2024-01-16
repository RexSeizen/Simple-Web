// Toogle class active humberger menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#humberger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

const humbergerMenu = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humbergerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

const searchButton = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
