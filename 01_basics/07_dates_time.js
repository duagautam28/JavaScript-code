let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(typeof myDate)

// let myCreatedDate=new Date(2023,0,23)    // month start from 0 index
// let myCreatedDateTime=new Date(2024,6,24,23,33,44)
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDateTime.toLocaleString())

let CreatedDate1=new Date("01-14-2023")
// console.log(CreatedDate1.toLocaleString())

let TimeStamp=Date.now()
// console.log(TimeStamp)
// console.log( CreatedDate1.getTime())
// console.log( Math.floor(TimeStamp/1000))

let newDate=new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())

console.log(newDate.toLocaleString('defailt',{
    weekday:"long"

}))