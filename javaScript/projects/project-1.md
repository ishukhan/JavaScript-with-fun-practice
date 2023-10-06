# Project with DOM Manipulation

## Project Link

[click here](https://stackblitz.com/edit/web-platform-bjyguo?file=index.html)

## project 1

# Color Changer

```
javaScript Code
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
