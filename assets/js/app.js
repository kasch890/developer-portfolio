//scroll-up button functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//nav bar hamburger menu functionality
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const van = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

//select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);