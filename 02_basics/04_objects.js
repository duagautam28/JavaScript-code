const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="max"
tinderUser.isLogedname=false

console.log(tinderUser)

const regularUser={
    email:"email@.com",
    fullName:{
        userName:{
            firstName:"sam",
            lastNmae:"someone",
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullName.userName.firstName)

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

// const obj4={...obj1,...obj2}
// console.log(obj4)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('name'))


const course={
    coursename:"javaScript",
    price:"999",
    courseInstructor:"gautam"

}
// console.log(course.courseInstructor)

// const{courseInstructor:inst}=course
// console.log(inst)


//json
// {
//     "coursename":"javaScript",
//     "price":"999",
//     "courseInstructor":"gautam" 
// }
