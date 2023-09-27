// var a=10;
// let b=20;
// const c=30;

if(true){
    var a=10; //globle scope
    // let b=20; //block scope
    const c=30; //block scope
    // console.log("Inner: ", c)
}
// console.log(a)
// console.log(b)
// console.log(c)

// +++++++++++++++++++ nested function using scope +++++++++++++++++++++++

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        return console.log(username)
    }
    two()
    // console.log(website)
}
// one()

if(true){
    const username = "Ishu"
    if(username=== "Ishu"){
        const website = "ishukhan.vercel.app"
        // console.log(`this is ${username} and this user website name is ${website}`)
    }
    // console.log(website)
}

// console.log(username)

// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++

console.log(addONe(5))
function addONe (num){
    return num+1;
}

console.log(addTwo(5))
const addTwo = function(num){
    return num+2
}