function rps() {
    // var playerChoice = window.prompt("Rock, Paper, or Scissors? ");
    var playerChoice = document.getElementById("rps-game").value;
    playerChoice = playerChoice.toLowerCase();


    var  playerResult;
    if (playerChoice === "rock") {
        playerResult = 1;
    } else if (playerChoice === "paper") {
        playerResult = 2;
    } else {
        playerResult = 3;
    }

    var computerResult = Math.floor(3 * Math.random() + 1);

    var computerChoice;
    if (computerResult === 1) {
        computerChoice = "rock";
    } else if (computerResult === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
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
        endingMessage = "\n\nCongratulations, you won!"
    } else if (gameResult === 0) {
        endingMessage = "\n\nIt's a draw! Try again?"
    } else {
        endingMessage = "\n\nYou lose. Better luck next time."
    }

    alert("Your choice: " + playerChoice +"\nComputer Choice: " + computerChoice + "\nGame Winner: " + gameWinner + endingMessage);
}