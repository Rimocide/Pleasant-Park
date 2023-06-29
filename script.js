function getComputerChoice(){
    let CC = Math.floor(Math.random() * 3);
    return CC;
}

function getPlayerChoice(){
    let x=1;
    let PC;
    while(x){
        PC = parseInt(prompt("Enter your choice: (0 for rock, 1 for paper and 2 for scissors"));
        if(PC >= 0 && PC<3)
        break;
    }
    return PC;
}

function playGame(){
    for(let i=0; i<=5; i++){
        let playerChoice = getPlayerChoice(), computerChoice = getComputerChoice(), score=playerChoice-computerChoice;
        let choices = ["Rock", "Paper", "Scissors"];
        if(score==-2 || score==1)
        console.log("You win! ", choices[playerChoice], " beats", choices[computerChoice]);

        else if(score==-1 || score==2)
        console.log("You lose! ", choices[playerChoice], " loses to", choices[computerChoice]);

        else
        console.log("It's a tie :(");
    }
}

playGame();