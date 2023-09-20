let name= "ishu";
let repoCount = 50;

// console.log(name + repoCount + " Value");
// this type of concanating is out dated;

// modern way to concatinate is 
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
// This is also called string interpolation

// string declaration

const gameName = new String("ishu-hc-game")

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName); //doesn't change orignal value\


const url = "http://ishukhan/ishu%20khan";
 console.log(url.replace('%20', '-'))

 console.log(url.includes('ishu'))//true
 console.log(url.includes('isteyaq'))//false

 //convert variable to array
 console.log(gameName.split('-'))