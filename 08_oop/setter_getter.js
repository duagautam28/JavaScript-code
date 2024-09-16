class user{
    constructor(email,pass){
        this.email=email;
        this.pass=pass
    }
    
    get pass(){
        return this._pass.toUpperCase();
    }
    set pass(value){
        this._pass=value
    }
}

const gd=new user("gd@gmail.com","123");
console.log(gd.pass);
