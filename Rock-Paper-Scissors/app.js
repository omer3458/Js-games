const computer=document.getElementById("computer-choice")
const choiceDisplay=document.getElementById("user-choice")
const resultDisplay=document.getElementById("result")
const possibleChoices=document.querySelectorAll("button")
let userChoice




possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener("click"
,(e)=>{
 userChoice=e.target.id
 choiceDisplay.innerHTML=userChoice
 compChoice()
 getResult()
 
 
}))
function compChoice(){
    const dizi=["rock","paper","scissors"]
    let comp=Math.floor((Math.random()*3))
    comp=dizi[comp]
    computer.innerHTML=comp
}

function getResult(){
    let result
    if(computer.innerHTML===userChoice){
        result="its draw"
    }
     if(computer.innerHTML==="rock" && userChoice==="paper"){
        result="you win!"
    }
    if(computer.innerHTML==="rock" && userChoice==="scissors"){
        result="you lost!"
    }
    if(computer.innerHTML==="paper" && userChoice==="rock"){
        result="you lost!"
    }
    if(computer.innerHTML==="paper" && userChoice==="scissors"){
        result="you win!"
    }
    if(computer.innerHTML==="scissors" && userChoice==="paper"){
        result="you lost!"
    }
    if(computer.innerHTML==="scissor" && userChoice==="rock"){
        result="you win!"
    } 
    
    resultDisplay.innerHTML=result
}




