const clock=document.querySelector("#clock")

setInterval(function(){
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString();
   // clock.innerHTML=date.toLocaleString();
    //clock.innerHTML=date.toLocaleDateString();

},1000)