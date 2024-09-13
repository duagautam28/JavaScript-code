function Setusername(username){
    this.username=username
    console.log("called");
    
}

function createUser(useranme,email,pass){
    Setusername.call(this,useranme)

    this.email=email;
    this.pass=pass;
}

const gd=new createUser("gautam","gautam28fb.com","123")
console.log(gd);

