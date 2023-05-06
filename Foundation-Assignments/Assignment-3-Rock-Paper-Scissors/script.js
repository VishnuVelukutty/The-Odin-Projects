let getComputerChoice = () => {
    let computerOptions = ["rock", "paper", "scissors"];
    let computerSelectedOption = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerSelectedOption;
}

let getPlayerChoice = () => {
    let validateInput = false;
    while (validateInput == false) {
        const playerSelection = prompt("Enter an option").toLowerCase();
        if (playerSelection == null) {
            continue;
        }
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
            validateInput = true
            return playerSelection;
        }
        else {
            alert("wrong options !!! enter either rock paper or scissors")
            getPlayerChoice();
        }
    }
}

let playRound = (playerSelection, computerSelection) => {

    let result = ""

    if (playerSelection == computerSelection) {
        console.log("Tie");
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
        console.log("Player wins");
        result = "p"
    }
    else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "rock")) {
        console.log("Computer wins");
        result = "c"
    }
    return result
}

let game = () => {
    let computerScore = 0, playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        let outcome = playRound(playerSelection, computerSelection);

        if (outcome == "p") {
            playerScore++
        }
        else if (outcome == "c") {
            computerScore++
        }

    }
    let winner = ""
    if (playerScore > computerScore) {
        winner = "Player"
        console.log(winner+" "+playerScore)
    }
    else if (playerScore < computerScore) {
        winner = "Computer"
        console.log(winner+" "+computerScore)
    }
    else {
        winner = "Tie"
        console.log(winner)
    }


}

game()