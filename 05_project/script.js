//generate a random color
const randomColor= function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
       color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
  };
  //console.log(randomColor())
  let intervalId;
  const startChangingColor=function(){
    const changeColor=function(){
      document.body.style.backgroundColor=randomColor();
    }
    if(!intervalId){
      intervalId=setInterval(changeColor,1000)
    }
   
  }
  
  const stopChangingcolor=function(){
    clearInterval(intervalId)
    intervalId=null;
  }
  document.querySelector("#start").addEventListener('click',startChangingColor);
  
  document.querySelector('#stop').addEventListener('click',stopChangingcolor);