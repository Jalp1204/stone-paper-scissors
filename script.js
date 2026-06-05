const choices=document.querySelectorAll(".choice");
const userChoiceDisplay=document.querySelector("#userChoice");
const compChoiceDisplay=document.querySelector("#compChoice");
const userScoreDisplay=document.querySelector("#user-score");
const drawScoreDisplay=document.querySelector("#draww");
const compScoreDisplay=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");
const resetScoreBtn = document.querySelector("#reset-score");

let userScore=0;
let compScore=0;
let drawScore=0;

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];

    const randomIndex = Math.floor(Math.random() * 3);

    return options[randomIndex];
};

const animateComputerChoice=(finalChoice,userChoice) => {
    const options=["rock","paper","scissor"];
    const animation=setInterval(() => {
        const randomIndex=Math.floor(Math.random() * 3);
        const randomChoice=options[randomIndex];
        compChoiceDisplay.innerText=emojis[randomChoice];
    },110);

    setTimeout(() => {
        clearInterval(animation);
        compChoiceDisplay.innerText = emojis[finalChoice];
        playGame(userChoice, finalChoice);
        choices.forEach(choice =>{
            choice.disabled=false;
        })
    }, 1100);
};


const playGame = (userChoice,compChoice) => {
    if(userChoice===compChoice){
        drawScore++;
        drawScoreDisplay.innerText= drawScore;
        msg.innerText="It's a draw🤝";
        msg.style.color="white";
        return;
    }

    let userWin=true;
    if(userChoice==="rock"){
        userWin= compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin= compChoice==="scissor"?false:true;
    }
    else{
        userWin= compChoice==="rock"?false:true;
    }

    if(userWin){
        userScore++;
        userScoreDisplay.innerText=userScore;
        msg.innerText=`You win!🎉 ${userChoice} beats ${compChoice}!`;
        msg.style.color="lime";

    }
    else{
        compScore++;
        compScoreDisplay.innerText=compScore;
        msg.innerText=`You lose!🥲 ${compChoice} beats ${userChoice}!`;
        msg.style.color="red";
    }

}


const resetScoreboard=() => {
    userScore=0;
    compScore=0;
    drawScore=0;

    userScoreDisplay.innerText=userScore;
    compScoreDisplay.innerText=compScore;
    drawScoreDisplay.innerText=drawScore;

    msg.innerText="Choose your move 👊";
    msg.style.color="lime";

    userChoiceDisplay.innerText="❔";
    compChoiceDisplay.innerText="❔";

};

const emojis={
    rock: "👊",
    paper: "✋",
    scissor: "✌️"
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.id; 
        userChoiceDisplay.innerText=emojis[userChoice];
        msg.innerText = "Computer is thinking... 🤔";
        msg.style.color = "white";
        const compChoice = getCompChoice();
        choices.forEach(choice => {
            choice.disabled=true;
        })
        animateComputerChoice(compChoice,userChoice);

        
    });
});

resetScoreBtn.addEventListener("click",() => {
    resetScoreboard();
});

