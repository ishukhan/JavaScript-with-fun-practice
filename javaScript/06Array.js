//array

const myArr= [1,2,3,4,5];

const myHeros = ["Thor", "Iron man"]

const myArr2 = new Array(1,2,3,4);
// console.log(myArr[4]);
// console.log(myArr.length);

// console.log(myHeros[0].length)

//array methode

// myArr.push(6)
// myArr.pop()

myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice
// console.log("A ", myArr);
// Slice
// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B ", myArr);

// Splice
// const myn2 = myArr.splice(1,3)
// console.log("C ", myArr);
// console.log(myn2);



const marval_heros = ["Thor", "spiderman","ironMan"]

const dc_heros =["superman", "flash", "batman"]

// marval_heros.push(dc_heros)
// // console.log(marval_heros);
// console.log(marval_heros[3]);
// console.log(marval_heros[3][2]);


let allHeros = marval_heros.concat(dc_heros)
console.log(allHeros);

// spread oprator
// let all_new_heros = [...marval_heros, ...dc_heros]
// console.log(all_new_heros);

// const another_array= [1,2,3,[4,5],6,[7,8,[9]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("ishu"));
// console.log(Array.from("ishu"));
console.log(Array.from({name:"ishu"}));//intersting

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3))


