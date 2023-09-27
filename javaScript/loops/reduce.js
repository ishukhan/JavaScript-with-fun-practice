const myNums = [1 ,2 ,3]

// const myTotal = myNums.reduce( (acc, currVal) => {
//     // console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0)

// console.log(myTotal);


const shopingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:4999
    },
    {
        itemName:"MongoDb course",
        price:1999
    },
]

const initialPrice = 0;
const priceToPay = shopingCart.reduce( (acc, item)=>{
   return acc+  item.price
} ,initialPrice)

console.log(`Total prise is to ${priceToPay}`);