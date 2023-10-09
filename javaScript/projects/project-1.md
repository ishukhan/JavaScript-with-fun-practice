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

## project 4 Solution

# Randome Number Guess Game

```javaScript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSloat = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultparse');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid Number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a number, less than 100');
  } else {
    // push the privious guess number in array
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over 🥴, Randome number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right 😍');
    lowOrHi.style.color = 'green';
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('You guess is Tooo low 🤔');
    lowOrHi.style.color = 'yellow';
  } else if (guess > randomNumber) {
    displayMessage('You guess is Tooo high 🤔');
    lowOrHi.style.color = 'red';
  }
}

// cleanUp guess
function displayGuess(guess) {
  userInput.value = '';
  guessSloat.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSloat.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabld');
    startOver.remove(p);
    playGame = true;
  });
}

```

## Project 5 Solution

# Keyboard Cheack

```javaScript
const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? ' SPACE' : `${e.key}`}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
  `;
});

```

## Project 6 Solution

# Unlimited Color

```javaScript
// Randome Color Genarate

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


```
