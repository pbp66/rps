var choices = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;

var humanChoice = prompt("Choose r, p, s");
console.log(humanChoice);

var computerChoice = choices[Math.floor(3 * Math.random())];
console.log(computerChoice);