const email="gautamsrms@gmail.com "
if(email){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

// falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{}, function(){}

const obj={}
if(Object.keys(obj).length==0){
    console.log("object is empty");
}

// Nullish  coalescing operator (??): null undefined
let val1;
val1=5??10
val2=null ?? 10

console.log(val1)
console.log(val2)                   

//terinary object

// condition ? true : false
const iceTea=100
iceTea>=80 ? console.log("true") : console.log("false")

