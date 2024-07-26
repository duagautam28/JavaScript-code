// singleton

const mySym=Symbol("key1")

const user={
    name:"gautam",
    location:"jaipur",
    [mySym]:"myKey1",       // [] it indicates using as syymbol in objects
    age:18,
    email:"gautam@gmail.com",
    isLoggedin:false,
    lastLogin:["Monday","tuesday"]

}
console.log(user.email)
console.log(user["email"])
console.log(user[mySym])

user.email="gd2GMAIL.COM"

//Object.freeze(user)       // will not change the object entries

user.greeting= function(){
    console.log("hello js users")
}

user.greeting2= function(){
    console.log('hello js users,${this.name}')
}
console.log(user.greeting())
console.log(user.greeting2())




