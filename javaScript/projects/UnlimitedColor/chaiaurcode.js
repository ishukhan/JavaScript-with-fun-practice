// Randome Color Genrate

const randomeColor = function () {
  const hex = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomeColor());
let interval;
const changeBg = function () {
  document.body.style.backgroundColor = randomeColor();
};
const startChangingColor = function () {
  interval = setInterval(changeBg, 1000);
};

const stopChangingColor = function () {
  clearInterval(interval);
  interval = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
