class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username:${this.username}`);
        
    }

    static createid(){
        return `123`
    }
}

// const gd=new User("gautam")

// console.log(gd.createid());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone", "iphone.com")
iphone.logMe();
console.log(iphone.createid());

