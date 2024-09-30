alert("YOU HAVE ENTERED IN THE GAME");

let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#userscore");
const compScorepara = document.querySelector("#compscore")

const genCompChoice= () => {
    const options =["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin , userChoice,compChoice) =>
{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
                msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorepara.innerText = compScore;

        
        msg.innerText = `you lose buddy ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "pink";
    }
};


const drawGame = () => {
    console.log("NO ONE WON   TRY AGAINNN BROO")
    msg.innerText = "play again  THIS MATCH HAS DRAWN";
    msg.style.backgroundColor = "d5f2e3";
};

const playGame = (userChoice) =>
{
    console.log("user choice", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice", compChoice);

    if(userChoice === compChoice){
        drawGame();

    }
    else{
        let userWin = true;
        if(userChoice == "rock") {
            userWin === compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice,compChoice);
    }

;}


choices.forEach((choice) =>
{
    console.log(choice)
    choice.addEventListener("click", () =>
    {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);

    });
});