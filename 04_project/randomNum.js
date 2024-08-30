let randomNum=parseInt(Math.random()*100+1)
const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessField")
const remaining=document.querySelector(".lastResult") 
const startOver=document.querySelector(".resultParas")
const guessSlot=document.querySelector(".guesses")
const lowOrHi=document.querySelector(".lowOrHi")

let numGuess=1
let prevGuess=[]
const p=document.createElement('p')

let playGame=true;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value)
    validate(guess)
  });
}

function validate(guess){
  if(isNaN(guess)){
    alert('Enter avlid number')
  }
  else if(guess>100){
    alert('Enter a number less than 100')
  }
  else if(guess<1){
    alert('Enter a number greater than 100')
  }
  else{
    prevGuess.push(guess)
    if(numGuess>10){
      displayGuess(guess)
      displayMesaage(`Game over.You Lose!.
      The random num is ${randomNum}`)
      endGame();
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess==randomNum){
    displayMesaage(`You have guessed it right`)
    endGame();
  }
  else if(guess>randomNum){
    displayMesaage(`You guessed the number TOO high`)
  }
  else if(guess<randomNum){
    displayMesaage(`You guessed the number TOO low`)
  }
}

function displayGuess(guess){
  userInput.value=''
  guessSlot.innerHTML+=`${guess} `
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}

function displayMesaage(msg){
  lowOrHi.innerHTML=`<h2>${msg}</h2>`
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add("button")
 p.innerHTML=`<h2 id= "newGame">Start New Game</h2>`;
 startOver.appendChild(p)
 playGame=false
 newGame();
}

function newGame(){
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNum=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame=true
    
  });
}
