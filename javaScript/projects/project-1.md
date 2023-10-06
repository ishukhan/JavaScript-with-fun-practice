# Project with DOM Manipulation

## Project Link

[click here](https://stackblitz.com/edit/web-platform-bjyguo?file=index.html)

## project 1 Solution

# Color Changer

```javaScript
console.log("ishu")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    switch (e.target.id) {
      case 'yellowgreen':
        body.style.backgroundColor = e.target.id;
        break;
      case 'red':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'green':
        body.style.backgroundColor = e.target.id;
        break;
    }

    // you can also using if statement

    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }
  });
});



```

## Project 2 Solution

# BMI Calculator

```javaScript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a Valid height ${height}`;
    result.style.color = 'red';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a Valid weight ${weight}`;
    result.style.color = 'red';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    if (bmi <= 18.6) {
      result.innerHTML = `<span>${bmi}</span><br><span>Your are Under Weight</span>`;
      result.style.color = 'yellow';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>${bmi}</span><br><span>Noraml Range</span>`;
      result.style.color = 'darkgreen';
    } else {
      result.innerHTML = `<span>${bmi}</span><br><span>Over Weight Keep Excersize</span>`;
      result.style.color = 'red';
    }
  }
});

```

## project 3 Solution

# Digital Clock

```javaScript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
