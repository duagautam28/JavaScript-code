class user{
    constructor(username,email,pass){
        this.username=username
        this.email=email
        this.pass=pass
    }

    encryptPass(){
        return `${this.pass}abc`
    }

}

const gd=new user("gautam","gautam28fb.com","123")
console.log(gd.encryptPass());