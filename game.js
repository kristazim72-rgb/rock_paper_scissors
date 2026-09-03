function getComputerChoice(){
    const rand =Math.random() * 3;
    let choice;

    if (rand<1){
        return "rock";
    }else if (rand<2){
        return "paper";
    }else{
        return "scissors";
    }
}


function getHumanChoice(){
    const input = prompt("Choose either rock, paper or scissors: \n or 'quit' to exist");
    return input.toLowerCase();
}


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "Tie!";
    }else if(humanChoice === "rock" && computerChoice === "scissors"){
        return "You win!";
    }else if (humanChoice === "paper" && computerChoice === "rock"){
        return "You win!";
    }else if (humanChoice === "scissors" && computerChoice === "paper"){
        return "You win!"
    }else{
        return "Computer wins!"
    }
}

function playGame(){
    let running = true;

    while(running){
       const humanSelection = getHumanChoice();
       const computerSelection = getComputerChoice();

       const result = playRound(humanSelection, computerSelection);

       alert(`You chose: ${humanSelection}\nComputer chose: ${computerSelection}\n\n Result: ${result}`);

       const playAgain = prompt("Type 'quit' to exit or Enter to play again: ");

       if(playAgain && playAgain.toLowerCase() === "quit"){
        running = false;
       }
    }

    alert("Thanks for playing!")
    
}

playGame();