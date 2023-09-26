//  if

const isUserLoggedIn = true;
const temperatur=41

// if(temperatur<40){
//     console.log("temperatur less then 50")
// }
// else{
//     console.log("temperatur greater then 50")
// }

// <, >, <=, <=, ==, !=, ===, !==, 


// const score = 200;
// if(score>=100){
//     const power="fly"
//     console.log(`User power: ${power}`)
// }


// const balance=1000;

// if(balance<500){
//     console.log("less than");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200")
// }



const UserLoggedIn =true;
const debitCard=true;
const loggedInFromGoogle = false;
const loggedInFromEmail= true;

if(UserLoggedIn && debitCard){
    console.log("Allow to buy courses")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged In")
}