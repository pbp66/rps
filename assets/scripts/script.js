// To use the form within the html page, wrap script within function rps() {}

//Repeat game
var playAgain = true;

// Variables for Game Stats
var computerWins = 0;
var playerWins = 0;
var draws = 0;
var totalGames = 0;
var playerStreakCurrent = 0;
var computerStreakCurrent = 0;
var playerStreakBest = 0;
var computerStreakBest = 0;
var previousWinner = 0;

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
    } else if (playerChoice === "scissors"){
        playerResult = 3;
    } else {
        playAgain = confirm("Not a valid choice.\nChoices are rock, paper, or scissors.\n\nPlease try again.");
        continue;
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
            computerWins++;
            computerStreakCurrent++;
            playerStreakCurrent = 0;
            if (computerStreakCurrent > computerStreakBest) {
                computerStreakBest = computerStreakCurrent;
            }
        } else {
            gameWinner = "You";
            gameResult = 1;
            playerWins++;
            playerStreakCurrent++;
            computerStreakCurrent = 0;
            if (playerStreakCurrent > playerStreakBest) {
                playerStreakBest = playerStreakCurrent;
            }
        } 
    } else {
        gameWinner = "Draw";
        gameResult = 0;
        draws++;
        computerStreakCurrent = 0;
        playerStreakCurrent = 0;
    }

    // Customizable ending message for the user
    var endingMessage;
    if (gameResult === 1) {
        endingMessage = "\n\nCongratulations, you won!"
    } else if (gameResult === 0) {
        endingMessage = "\n\nIt's a draw! Try again?"
    } else {
        endingMessage = "\n\nYou lose. Better luck next time."
    }

    totalGames++;
    
    playAgain = confirm("Your choice: " + playerChoice + 
    "     " + "Computer Choice: " + 
    computerChoice + "\nGame Winner: " + gameWinner + endingMessage + 
    "\n\nPlayer Wins: " + playerWins + "     " +"Computer Wins: " + computerWins + 
    "     " + "Total Games: " + totalGames + "\nPlayer Win Ratio: " + 
    (playerWins/totalGames).toFixed(2) + "     " + "Computer Win Ratio: " + 
    (computerWins/totalGames).toFixed(2) + "\nPlayer Streak: " + playerStreakCurrent +
    "     " + "Best Player Streak: " + playerStreakBest + "\nComputer Streak: " + computerStreakCurrent + "     " + "Best Computer Streak: " + computerStreakBest
    );

    // Assign game result to previous winner to track streaks
    previousWinner = gameResult;
}