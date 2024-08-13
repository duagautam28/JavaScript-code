// const coding=["js","ruby","java","python","cpp"]

// coding.forEach((item)=>{            //forEach does not return value
//     console.log(item);
// })

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNum=myNums.filter( (num)=> num>4)              //filter return value
// console.log(newNum);

// const newNum2=myNums.filter( (num)=>{
//     return num>4
// })
// console.log(newNum2)

const newNum3=[]
myNums.forEach( (num)=>{
    if(num>4){
        newNum3.push(num)
    }
})
console.log(newNum3);