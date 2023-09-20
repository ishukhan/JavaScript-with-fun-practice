const score = 400;
console.log(score);

const balance = new Number(400)
console.log(balance);


console.log(balance.toString().length); //conver number into string used number methode

// console.log(balance.toFixed(2));

const otherNumber= 23.8966;
// console.log(otherNumber.toPrecision(3))

const hundred = 1000000;
// console.log(hundred.toLocaleString('en-IN'))


//+++++++++++++++++++++ Math +++++++++++++++++++++++++
// console.log(Math.PI);
// console.log(Math.abs(-4));//negative value convert in positive
// console.log(Math.round(3.4));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));

// console.log(Math.max(5,6,8,9));
// console.log(Math.min(5,6,8,9));

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()* (max-min+1)+min))