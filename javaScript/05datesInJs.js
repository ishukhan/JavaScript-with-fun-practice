// console.log(Date())

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreateDate = new Date(2023,0,3)
// let myCreateDate = new Date(2023,0,3,5,3) //yyyy/mm/dd, h/m/s 
let myCreateDate = new Date("2023-01-20") //yyyy/mm/dd
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getMonth());
console.log(newDate.getFullYear());

let NewMonth=newDate.toLocaleString('default', {
    weekday:"long",
    day:"2-digit",
    month:"short",
    year:"numeric"
})
console.log(NewMonth);