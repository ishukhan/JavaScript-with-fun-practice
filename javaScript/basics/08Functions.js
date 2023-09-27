
function sayMyName(){
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("u");
}

// sayMyName()


// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }

// addTwoNumber(3,7)

function addTwoNumber(num1,num2){
    
    let result = num1+num2
    return result;
}

const result = addTwoNumber(3,7)
// console.log("result ", result)

function userLoggedInMessage(username){
    if (username === undefined) {
        console.log("please enter a username`")
        return
    }
    return `${username} is logged In`
}

// console.log(userLoggedInMessage("ishu"))
// console.log(userLoggedInMessage()) // argumment empty

//rest operator
function calculateCartPrise(...num1){
return num1;
}
// console.log(calculateCartPrise(200,500,800,1000));

//obejct passs in function
const user={
name:"ishu",
age:18
}
function handleObject(anyObject){
    return console.log(`username is ${anyObject.name} and age is ${anyObject.age}`)
}
// handleObject(user)
handleObject({
    name:"sam",
    age:20
})

// Array pass in function

const myArray = [200,400,500,1000]

function handleArray(getArray){
    return getArray[1]
}

// console.log(handleArray(myArray))
console.log(handleArray([5000,1000,50,3000]))