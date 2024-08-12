let humanWinCount = 0
let computerWinCount = 0


function getComputerChoice() {
    let x = Math.ceil(Math.random() * 3)
    switch (x) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

function getHumanChoice() {
    let x = window.prompt("Enter Rock, Paper or Scissors")
    x.toLocaleLowerCase()
    switch (x) {
        case "rock":
            return "rock"
        case "paper":
            return "paper"
        case "scissors":
            return "scissors"
        default:
            x = window.prompt("invalid input kindly enter Rock, Paper or Scissors")
    }
}

function playRound(getComputerChoice, getHumanChoice) {
    if (getComputerChoice === "rock" && getHumanChoice === "scissors") {
        computerWinCount++

    }
    else if (getComputerChoice === "rock" && getHumanChoice === "paper") {
        humanWinCount++

    }
    else if (getComputerChoice === "rock" && getHumanChoice === "rock") { }
    else if (getComputerChoice === "paper" && getHumanChoice === "rock") {
        computerWinCount++

    }
    else if (getComputerChoice === "paper" && getHumanChoice === "paper") { }
    else if (getComputerChoice === "paper" && getHumanChoice === "scissors") {
        humanWinCount++
    }
    else if (getComputerChoice === "scissors" && getHumanChoice === "rock") {
        humanWinCount++

    }
    else if (getComputerChoice === "scissors" && getHumanChoice === "paper") {
        computerWinCount++

    }
    else if (getComputerChoice === "scissors" && getHumanChoice === "scissors") {

    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let human = getHumanChoice();
        let computer = getComputerChoice()
        console.log(computer)
        playRound(computer, human)
    }
}

playGame()

console.log("human won " + humanWinCount + " times")
console.log("Computer won " + computerWinCount + " times")

if (humanWinCount > computerWinCount) (
    alert("Human Wins!")
)
if (humanWinCount == computerWinCount) (
    alert("its a draw play again")
)
if (computerWinCount > humanWinCount) {
    alert("Computer Wins")
}


