const nums=[1,2,3]
// const total=nums.reduce(function (acc,curval){
//     console.log(acc+" "+curval);
//     return acc+curval
// },0)        // here 0 indicates initial  value of acc it means it acc is 0 in starting
// console.log((total));

// const total2= nums.reduce((acc,cur)=> acc+cur,0)
// console.log(total2);

const shoppingCart=[
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science",
        price:12999
    },
    {
        itemName:"jscourse",
        price:2999
    }
]

const totalPrice=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log((totalPrice));