// const userEmail= "i@google.com";
// const userEmail= ""; flasy
const userEmail= [];


if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Don't have user Email");
}
// falsy values

// flase, 0, -0, BigInt 0n, "", null, undifined, NaN

// truthy values 

// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length===0){
//     console.log("Array is empty")
// }


// const emptyObj={}; line no 27 excute
const emptyObj={name:"ishu"};

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}else{
    console.log("Object is not empty");
}



// Nullish Coalescing Operator (??): null undefined\

let val1;
// val1= 5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 10
val1 = null ?? 10 ?? 20;


console.log(val1);

// Terniary Operator

// Condition ? true : flase

const iceTeaPrice =  100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");