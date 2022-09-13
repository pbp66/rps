var choices = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;
var keepPlaying = true;

while (keepPlaying) {
    var humanChoice = prompt("Choose r, p, s");
    // console.log(humanChoice);

    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // console.log(computerChoice);

    var result;
    if (humanChoice === computerChoice) {
        ties++;
        result = "tied!";
    } else if (
        humanChoice === "r" && computerChoice === "s" ||
        humanChoice === "p" && computerChoice === "r" ||
        humanChoice === "s" && computerChoice === "p"
        ) {
        // Human Wins
        wins++;
        result = "won!"
    } else {
        // Computer Wins
        losses++;
        result = "lost!";
    }

    alert("You " + result);

    alert("Stats:")
}