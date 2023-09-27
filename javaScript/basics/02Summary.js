// Diffrent type of Data type?

// primitive

// 7 types : String, Number, Boolean, null, undifined, Symbol, BigInt

 

// Reference type : (Non primitive)

// Array, Objects, Functions



// ++++++++++++++++++++++++++++++++++++++++===

// MEMORY TYPE

// Stack(all primitive data type used in stack. they only add copy of value)
// Heap(all non-primitive data used in Heap. they used as a refrence form another value)

// for Exxample
// Stack

let myYoutube = "issuecode"

let anotherName = myYoutube;
anotherName = "khanAcademy";

console.log(myYoutube);
console.log(anotherName);



let userOne= {
    email: "ishu@gmail.com",
    upi:"ishu@ybl"
}

let userTwo = userOne;
userTwo.email= "khan@google.com";

console.log(userOne.email);
console.log(userTwo.email);