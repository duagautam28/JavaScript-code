// primitives datatype
// they are call by value

// 7 types :String,Nuber,Bolean,null,undefined,Symbol,BigInt

const score=100

const id=Symbol(123)
const anotherId=Symbol(123)

console.log(id===anotherId)

//bigint
const bigInt=1233444444444455555555556544332222n
console.log(bigInt)

//Reference typr or non-premtive datatypes

//Array,Objects,Functions

const heroes=["shaktiman","naagraj","doga"]

//objects

let myObj={
    name:"Gautam",
    age:18,
}

const myFunction=function(){
    console.log("hello world");
}
console.log(typeof myFunction)

