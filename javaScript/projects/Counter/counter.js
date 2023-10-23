// set iniial value
let count = 0;

// select value and btns
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);//NodeList
// using forEach methode

btns.forEach((btn) => {
  //   console.log(btn); //show item in btns

  //   now AddEventlistner for each button
  btn.addEventListener("click", (e) => {
    let style = e.currentTarget.classList;
    if (style.contains("decrease")) {
      count--;
      value.style.color = "red";
    } else if (style.contains("increase")) {
      count++;
      value.style.color = "green";
    } else {
      count = 0;
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
