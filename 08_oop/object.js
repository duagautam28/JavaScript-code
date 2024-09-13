function multiby5(num){
    return num*5;
}

multiby5.power=2

console.log(multiby5(5));
console.log(multiby5.power);
console.log(multiby5.prototype);

function createUser(username,score){
this.username=username
this.score=score
}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`)
}

const chai=new createUser("gd",250);
const tea=new createUser("gautam",25);

chai.printMe();



