// TOGGLE MENU
const btn = document.querySelector(".nav_toggle");
const links = document.querySelector(".nav_link");
const banner = document.querySelector(".banner");
btn.addEventListener("click", () => {
  links.classList.toggle("show_navlink");
  if (links.classList.contains("show_navlink")) {
    banner.classList.add("banner_top");
  } else {
    banner.classList.remove("banner_top");
  }
});

/******************* Set Date **********************/
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

/*********************fixed Navbar******************/
const navbar = document.querySelector("#nav");
const topLink = document.querySelector(".top_link");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeigth = navbar.getBoundingClientRect().height;
  // console.log(navHeigth);
  if (scrollHeight > navHeigth) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show_link");
  } else {
    topLink.classList.remove("show_link");
  }
});

/**************sMOOTH SCROLL***************/

const scrollLinks = document.querySelectorAll(".scroll_links");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevnt default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    // calculate the height
    const navHeigth = navbar.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed");
    let position = element.offsetTop - navHeigth;
    if (!fixedNav) {
      position = position - navHeigth;
    }
    console.log(position);
    window.scrollTo({
      top: position,
      left: 0,
    });
    links.classList.remove("show_navlink");
  });
});
