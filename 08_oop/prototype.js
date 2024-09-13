// let myName="gautam"

// console.log(myName.length)

let myHero=["hitesh","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpider:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.gautam=function(){
    console.log(`gautam is present in all objects`);
}

Array.prototype.heyGd=function(){
    console.log(`hello`);
    
}

heroPower.gautam();
myHero.gautam();

//heroPower.heyGd();
// myHero.heyGd();

//inheritance

const user={
    useranme:"gautam",
    email:"xyz@mail.com"
}

const teachingSupport={
    isAvailable:false
}

const TAsupport={
    makeAssignment: 'JS assignment',
    fulltime:true
}

Object.setPrototypeOf(teachingSupport,user)

let anotherName="Gautam          "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
}
anotherName.trueLength()