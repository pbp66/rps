function rps() {

    //Repeat game
    var playAgain = true;
    
    // Variables for Game Stats
    var computerWins = 0;
    var playerWins = 0;
    var totalGames = 0;

    while (playAgain) {
        // Grab input from dropdown menu (select)
        //var playerChoice = document.getElementById("rps-game").value;
        var playerChoice = prompt("Rock, Paper, or Scissors?");
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

        // Using mathematical logic to compare results rather than compare each possible game result
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

        // Customizable ending message for the user
        var endingMessage;
        if (gameResult === 1) {
            endingMessage = "\n\nCongratulations, you won!"
            playerWins++;
        } else if (gameResult === 0) {
            endingMessage = "\n\nIt's a draw! Try again?"
        } else {
            endingMessage = "\n\nYou lose. Better luck next time."
            computerWins++;
        }
        
        totalGames++;
        
        playAgain = confirm("Your choice: " + playerChoice +"\nComputer Choice: " + computerChoice + "\nGame Winner: " + gameWinner + endingMessage + "\n\nGame Stats:\nPlayer Wins: " + playerWins + "\nComputer Wins: " + computerWins + "\nTotal Games: " + totalGames + "\nPlayer Win Ratio: " + playerWins/totalGames + "\nComputer Win Ratio: " + computerWins/totalGames);
    }
}