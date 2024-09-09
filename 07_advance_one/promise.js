// const promise1=new Promise(function(resolve,reject){
//     //do an async task
//     //DB calls,cryptographic,network
//     setTimeout(function(){
//         console.log("async task is complete");
//         resolve();    // use for connection with the consumption
//     },1000)
// });
//  promise1.then(function(){
//     console.log('promise consumed');
//  })

//  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task 2');
//         resolve();
//     },1000)
//  }).then(function(){
//     console.log("async 2 resolved");
//  })


//  const promise3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"gautam",email:"gautam@gmail.com"})
//     },1000)
//  })

//  promise3.then(function(user){
//     console.log(user);
    
//  })


//  const promoise4=new Promise(function(resolve,reject){
//     let error=false;
//     if(!error){
//         resolve({username:"gautam",email:"gautam@gmail.com"})
//     }
//     else{
//         console.log("something went wrong");
        
//     }
//  })

// promoise4.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
    
// }).catch(function(error){[
//     console.log(error)
// ]}).finally(()=>{
//     console.log('the promise is either resolved or rejected'); 
// })


const promise5=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"gautam",email:"gautam@gmail.com"})
        }
        else{
            console.log("something went wrong");
            
        }
    },1000) 
})

async function consumePromise5() {
    try{
        const response=await promise5;
        console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
}

consumePromise5()

// async function getAllusers() {
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);  
//     }
// }

// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))
