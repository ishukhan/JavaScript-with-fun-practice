// High Order Array loops

// for of

// ["","",""]
// [{},{},{}]

let arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "hello World!"
for (const greet of greetings) {
    // if (greet==" ") {
    //     continue;
    // }
    // console.log(greet);
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('PAK', "Pakistan")

// console.log(map)

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}


// object use for of loop

const myObject ={
    IN:"India",
    PAK: "Pakistan",
    AFG: "Afganistan"
}

// console.log(myObject)

// for (const key of myObject) {
//     console.log(key)
// } Doesn't work?