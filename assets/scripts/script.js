function rps() {

    // Variables for Game Stats

    // Grab input from dropdown menu (select)
    var playerChoice = document.getElementById("rps-game").value;
    playerChoice = playerChoice.toLowerCase();

    // Converting player choice to compare with the computer
    var playerResult;
    if (playerChoice === "rock") {
        playerResult = 1;
    } else if (playerChoice === "paper") {
        playerResult = 2;
    } else {
        playerResult = 3;
    }

    // Get a random number between 1 and 3. One for each option (R,P, or S)
    var computerResult = Math.floor(3 * Math.random() + 1);

    // Convert computer result from a number to text for descriptive messaging
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