// const myName = "ishu    ";

// console.log(myName.trim().length);
// console.log(myName.truelength);

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
