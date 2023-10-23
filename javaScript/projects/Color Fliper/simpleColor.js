const colors = ["green", "red", "rgba(133,122,200)", "#212121"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", (e) => {
  //   console.log(document.body);
  //   get a randome number between 0 - 3
  const randomeNumber = getRandomeNumber();
  console.log(randomeNumber);
  document.body.style.backgroundColor = colors[randomeNumber];
  color.textContent = colors[randomeNumber];
});

function getRandomeNumber() {
  return Math.floor(Math.random() * colors.length);
}
