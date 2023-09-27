const user ={
    username:"Ishu",
    password:211313,
    
    welcomeMessage:function(){
        console.log(`${this.username} , Welcome to the webiste`)
        // console.log(this)
    }
    
}
// console.log(user.welcomeMessage());
// user.username="sam"
// user.password=446
// console.log(user.welcomeMessage());

// console.log(this) //they show empty object in node invaroment but in browser invorement they show window object.

// function chai(){
//     const username = "ishu"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//     let username = "ishu"
//     console.log(this.username)
// }
const chai = () =>{
    // let username = "ishu"
    // console.log(this.username)
    // console.log(this); //empty parenthaties
}
chai()

//Arrow function

// const addTwo = (num1, num2)=>{
//     return num1+num2;
// }

// const addTwo = (num1, num2)=> (num1+num2); //single line of statemnet using parenthates

const addTwo = (num1, num2)=>({username:"ishu"});

console.log(addTwo(3,7))

