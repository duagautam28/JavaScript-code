// const user={
//     username: "gautam",
//     loginCount:8,
//     signedin:true,

//     getUserDetails: function(){
//        //console.log("get user details from database");
//         console.log(`username:${this.username}`);
//     }
// }

// console.log(user.username);
// user.getUserDetails();

function User(username,loginCount,isLoggedin){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedin=isLoggedin;

    this.greetings= function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this;
}

const user1=new User("gautam",8,true)
const user2=new User("nivi",8,true)
console.log(user2);
