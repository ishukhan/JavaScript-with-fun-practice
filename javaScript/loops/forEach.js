const coding =["js", "ruby","python", "c++", "java"]

// coding.forEach(function (item){
//     console.log(item);
// })


// Arrow function

// coding.forEach( (value)=>{
//     console.log(value);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) //give referance


// coding.forEach((item, index, Array)=>{ //3 parameter
//     // console.log(item, index, Array);
// })


const myCoding=[
    {
    languageName:"javaScript",
    languageFileName:"js"
    },
    {
    languageName:"java",
    languageFileName:"java"
    },
    {
    languageName:"python",
    languageFileName:"py"
    },
]

myCoding.forEach( (item) => {
// console.log(item.languageName)
})


// store forEach in variable

// const value = coding.forEach( (item) => {
//     // console.log(item)
//     return item
// })
// console.log(value)   // give undifiend   // forEach does'nt return value

const myNum = [1,2,3,4,5,6,7,8,9]

// const newNum = myNum.filter( (num) => num > 4)
// const newNum = myNum.filter( (num) => {   //whenever use scope give return keyword
//     return num > 4
// })

// const newNum = [];

// myNum.forEach( (num) => {
//     if(num>2){
//         newNum.push(num)
//     }
// })


// console.log(newNum)

