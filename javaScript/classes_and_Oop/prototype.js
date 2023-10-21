// const myName = "ishu    ";
// const channle="chai     "
// console.log(myName.truelength);

// this true length is'nt a methode but
// i can create this and gave this power to trime space in string go to
// line no 65 Example

const myHero = ["Hulk", "spiderman"];

const heroPower = {
  thor: "Hammer",
  spiderman: "slink",

  getSpidePower: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};

// in JavaScript array object and string all travel by object
// in this exapmle I'm add a property in Object and pass the array and object is also called top heraraci
Object.prototype.ishu = function () {
  console.log("ishu is present in all object");
};

// in this example I'm add the property in Array they doesnt work in object and string
Array.prototype.heyIshu = function () {
  console.log("ishu say hello");
};

// heroPower.ishu();
myHero.ishu();
myHero.heyIshu();
// heroPower.heyIshu();

// Inheritance

const chai = {
  name: "chai",
  email: "chai@gmail.com",
};

const Teacher = {
  isMakingVideo: true,
};

const TeachingSupport = {
  isAvialable: false,
};

const TaSupport = {
  maingAssig: "js assignment",
  fulltime: true,
  __proto__: TeachingSupport,
};
// console.log(TaSupport.__proto__);

let proto = (__proto__.Teacher = chai);
console.log(proto);

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

const anotherName = "chaiAurCode       ";

// trueLength give power to any STRING to trim and gave user to actual length
String.prototype.trueLength = function () {
  console.log(this);
  console.log(`true length is: ${this.trim().length}`);
};

anotherName.trueLength();
// also direct gave STRING
"Ishu".trueLength();
"Chaines  ".trueLength();
