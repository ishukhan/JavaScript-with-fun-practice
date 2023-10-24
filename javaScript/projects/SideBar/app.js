const toggle = document.querySelector(".sideBar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

toggle.addEventListener("click", () => {
  //   console.log(sidebar.classList);
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
