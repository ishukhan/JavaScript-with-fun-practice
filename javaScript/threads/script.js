const worker = new Worker("worker.js");
const CalculateSum = document.querySelector(".sumOfNumber");
const changeBg = document.querySelector(".changeBg");

CalculateSum.addEventListener("click", () => {
  //   alert(`Total sum of 1 billion ${sum}`);

  worker.postMessage("helllo ishu");
});

changeBg.addEventListener("click", () => {
  if (document.body.style.background !== "green") {
    document.body.style.background = "green";
  } else {
    document.body.style.background = "blue";
  }
});
