function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(name, score) {
  (this.name = name), (this.score = score);
}
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};
const chai = new createUser("chai", 25);
console.log(chai.printMe());
const tea = createUser("chai", 250);
/*
Here is what happens behind the scenes when the new keyword is used:

A new Object is created: The new keyword initiates the creation of a new
javaScript object

A prototype is linked: The newly created Object gets linked to the prototype
property of the constructor function. This means that it has access to properties
and methodes defined on the constructor function.

The Constructor is Called: The constructor function is called with the specifed
arguments and this is bound to the newly created object. If no explicit return value
is specifed form the constructor, JavaScript assumes this, the newly created object,
to the intend return value.

The new object is Returned: After the constructor function has been called,
if it doen'nt return a non-primitive value (object, array, function, etc)
the newly created object is returned
*/
