var playerChoice = window.prompt("Rock, Paper, or Scissors? ");

var  playerResult;
if (playerChoice === "Rock") {
    playerResult = 1;
} else if (playerChoice === "Paper") {
    playerResult = 2;
} else {
    playerResult = 3;
}

var computerResult = Math.floor(3 * Math.random() + 1);

var computerChoice;
if (computerResult === 1) {
    computerChoice = "Rock";
} else if (computerResult === 2) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissors";
}

var gameWinner;
var gameResult;
if (playerResult !== computerResult) {
    if ((computerResult === (playerResult + 1)) || (computerResult === (playerResult - 2))) {
        gameWinner = "Computer";
        gameResult = -1;
    } else {
        gameWinner = "You";
        gameResult = 1;
    } 
} else {
    gameWinner = "Draw";
    gameResult = 0;
}

var endingMessage;
if (gameResult === 1) {
    endingMessage = "\nCongratulations, you won!"
} else if (gameResult === 0) {
    endingMessage = "\nIt's a draw! Try again?"
} else {
    endingMessage = "\nYou lose. Better luck next time."
}

alert("Your choice: " + playerChoice +"\nComputer Choice: " + computerChoice + "\nGame Winner: " + gameWinner + endingMessage);
