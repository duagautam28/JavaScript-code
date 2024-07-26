// arrays

// const myArray=[1,2,3,2,"Gautam"]
// console.log(typeof myArray)

const myArr= new Array(1,2,3,4,5)
// console.log(myArr[2])

// myArr.push(6);
// console.log(myArr)

// myArr.pop();
// console.log(myArr)

// myArr.unshift(2) // insert element at starting
// console.log(myArr)

// myArr.shift()  //del starting element
// console.log(myArr)

// console.log(myArr.includes(10))
// console.log(myArr.indexOf(10))

const newArr=myArr.join();

// console.log(myArr)
// console.log(newArr)  //changes to string

//slice,splice

const mySlice=myArr.slice(1,3)   //it does not modify the array
console.log("A",myArr)
console.log(mySlice)

const mySplice=myArr.splice(1,3)   // it modifies the array
console.log("B",myArr)
console.log(mySplice)



