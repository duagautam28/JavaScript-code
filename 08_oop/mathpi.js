console.log(Math.PI);

descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);

const obj={
    name:"gautam",
    isloggedIn:true,
    other:function(){
        console.log("hello");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(obj,"name"));

// Object.defineProperty(obj,'name',{
//     writable:false,
//     enumerable:false
// })

// console.log(Object.getOwnPropertyDescriptor(obj,"name"));

for(let [key,value] of Object.entries(obj)){
    if(typeof value!='function'){
    console.log(`${key}:${value}`);
}
}