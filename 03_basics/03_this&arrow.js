// const user={
//     username:"gautam",
//     price:999,

//     welcomemsg:function(){
//         console.log(this.username+',welcome to website')
//        // console.log(this)
//     }

// }
//user.welcomemsg()
// user.username="someone"
// user.welcomemsg()

// console.log(this)

// const chai=function(){
//     let userName="Gautam"
//     console.log(this.userName)
// }

// const chai= () => {
//     let userName="Gautam"
//     console.log(this)
// }
//chai()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

const addTwo = (num1,num2)=> (num1+num2)

console.log(addTwo(3,4))
