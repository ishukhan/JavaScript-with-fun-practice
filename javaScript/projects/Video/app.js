const btn = document.querySelector(".switch_btn");
const video = document.querySelector(".video_container");

btn.addEventListener("click", () => {
  // this is way im not using toggle because im using videon
  //   btn.classList.toggle("slide");
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// preLoader

const preLoader = document.querySelector(".pre_loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preLoader.classList.add("hide_Preloader");
  }, 3000);
});
