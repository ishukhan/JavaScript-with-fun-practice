const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveway = document.querySelector(".giveway");
const deadline = document.querySelector(".deadline");
const item = document.querySelectorAll(".deadline_formate h4");

// without hard code value
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 17, 10, 0);
// let futureDate = new Date(2023, 10, 12, 16, 55, 0);

const fullyear = futureDate.getFullYear();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

let weekday = weekdays[futureDate.getDay()];
// weekday = weekdays[weekday];

giveway.textContent = `giveway ends on ${weekday}, ${date} ${month} ${fullyear} ${hour}:${min}`;

// future time in ms

const futureTime = futureDate.getTime();

function getRemainginTime() {
  const today = new Date().getTime();
  //   console.log(today);
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  // calculate all value
  let days = Math.floor(t / oneDay);
  let hour = Math.floor((t % oneDay) / oneHour);
  let min = Math.floor((t % oneHour) / oneMin);
  let second = Math.floor((t % oneMin) / 1000);
  const values = [days, hour, min, second];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  item.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  //   if time is complete
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expire">Sorry this giveway has expired</h4>`;
  }
}
// countdown
let countdown = setInterval(getRemainginTime, 1000);
getRemainginTime();
