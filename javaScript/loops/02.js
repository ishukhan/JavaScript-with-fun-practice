let users = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 28
}, {
}, {
    name: 'khan',
    books: ['coding', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'ishu',
    books: ['Romeo and Juliet'],
    age: 15
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

// const userDetail = users.filter( (item) => item.name === "Bob")

const userDetail = users.filter( (item) => item.age<=18)

// console.log(userDetail);



// map

const myNumbers = [1,2,3,4,5,6,7,8,9]

// const myNums = myNumbers.map( (num) => {
//     return num+10})
// console.log(myNums);

// forEach
// const newNums = []
// myNumbers.forEach( (num) =>{
//     newNums.push(num+10)
// })
// console.log(newNums);

const newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num > 20)
console.log(newNums);