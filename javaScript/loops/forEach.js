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
console.log(item.languageName)
})
