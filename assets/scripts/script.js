// To use the form within the html page, wrap script within function rps() {}
var playAgain = true;
var choices = ["rock", "paper", "scissors"];

function gamePlayer() {
    this.choice = 0;
    this.wins = 0;
    this.streakCurrent = 0;
    this.streakBest = 0;
    this.win = function() {    
        this.wins++;
        this.streakCurrent++;
        if (this.streakCurrent > this.streakBest) {
            this.streakBest = this.streakCurrent;
        }
    },
    this.lose = function () {this.streakCurrent = 0;}
}

// Simplify player and computer with a constructor. 
var player = new gamePlayer();
var computer = new gamePlayer();

// Variables for Game Stats
var draws = 0;
var totalGames = 0;
var previousWinner = 0;
var gameWinner;
var gameResult = 0;

while (playAgain) {
    player.choice = choices.indexOf(prompt("Rock, Paper, or Scissors?").toLowerCase());
    if (player.choice === -1) {
        playAgain = confirm("Not a valid choice.\nChoices are rock, paper, or scissors.\n\nPlease try again.");
        continue;
    }
    computer.choice = Math.floor(3 * Math.random());

    // Using mathematical logic to compare results rather than compare each possible game result
    // Add a game object to reduce redundant code with gameWinner and gameResult
    if (player.choice === computer.choice) {
        gameWinner = "draw";
        gameResult = 0;
        draws++;
        computer.lose();
        player.lose();
    } else if (
        (computer.choice === (player.choice + 1)) || 
        (computer.choice === (player.choice - 2))
    ) {
        gameWinner = choices[computer.choice];
        gameResult = -1;
        computer.win();
        player.lose();
    } else {
        gameWinner = choices[player.choice];
        gameResult = 1;
        player.win();
        computer.lose();
    } 

    // Customizable ending message for the user
    var endingMessage = "";
    if (gameResult === 1) {
        endingMessage = "\n\nCongratulations, you won!"
    } else if (gameResult === 0) {
        endingMessage = "\n\nIt's a draw!"
    } else {
        endingMessage = "\n\nYou lose. Better luck next time."
    }

    totalGames++;
    
    alert("Your choice: " + choices[player.choice] + "\nComputer Choice: " + 
    choices[computer.choice] + "\nGame Winner: " + gameWinner + endingMessage);

    alert("Statistics:\nPlayer Wins: " + player.wins + 
    "\nComputer Wins: " + computer.wins + "\nTotal Games: " + totalGames + 
    "\nPlayer Win Ratio: " + (player.wins/totalGames).toFixed(2) + 
    "\nComputer Win Ratio: " + (computer.wins/totalGames).toFixed(2));

    alert("Streaks:\nPlayer Streak: " + player.streakCurrent + "\nBest Player Streak: " + 
    player.streakBest + "\nComputer Streak: " + computer.streakCurrent + 
    "\nBest Computer Streak: " + computer.streakBest);

    playAgain = confirm("Play again?");

    // Assign game result to previous winner to track streaks
    previousWinner = gameResult;
}