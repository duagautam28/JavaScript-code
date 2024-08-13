const nums=[1,2,3,4,5,6,7,8,9,10]

// const newNum=nums.map( (n)=>n+10)

//console.log(newNum);

const newNums1=nums
        .map((n)=>n*10)
        .map((n)=> n+1)
        .filter((n)=>n>=40)
console.log(newNums1);