// for of

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }

// const greetings="hello world"
// for(const greet of greetings){
//     console.log("each char is "+greet)
//}

//Maps

// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// console.log(map)

// for (const [key,value] of map) {
//     console.log(key,value)

// }

// const myObj={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift'

// }

// for (const key in myObj) {
//    console.log(key+":"+myObj[key]); 
// }

// const arr=["aaa","bbb","ccc","ddd"]
// for (const key in arr) {
//     console.log(key)
// }

const arr1=["aaa","bbb","ccc","ddd"]

// arr1.forEach( function (item){
//     console.log(item);
// })

// arr1.forEach( (val)=> {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// arr1.forEach(printMe)

// arr1.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const objArr=[
    {
        langName:"javasript",
        langFileName:"js"
    },
    {
        langName:"java",
        langFileName:"java"
    },
    {
        langName:"c",
        langFileName:"c"
    }
]

objArr.forEach( (item)=>{
    console.log(item.langName);
})