const choices=document.querySelectorAll(".choice");
const userChoiceDisplay=document.querySelector("#userChoice");
const compChoiceDisplay=document.querySelector("#compChoice");
const userScoreDisplay=document.querySelector("#user-score");
const drawScoreDisplay=document.querySelector("#draww");
const compScoreDisplay=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");

let userScore=0;
let compScore=0;
let drawScore=0;

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];

    const randomIndex = Math.floor(Math.random() * 3);

    return options[randomIndex];
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

const emojis={
    rock: "👊",
    paper: "✋",
    scissor: "✌️"
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.id; 
        userChoiceDisplay.innerText=emojis[userChoice];
        const compChoice = getCompChoice();
        compChoiceDisplay.innerText=emojis[compChoice];

        playGame(userChoice,compChoice);
        
    });
});

