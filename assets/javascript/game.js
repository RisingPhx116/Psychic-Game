//array that holds the computer's letter in mind
var computerThought = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", 
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables for score stats
var wins = 0;
var losses = 0;
var guesses = 10;
var whatYouGuessed = [];

//variables for holding HTML references to dislay on page
var userChoiceText = document.getElementById("userchoice-text");
var computerThoughtText = document.getElementById("computerthouught-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var whatYouGuessedText = document.getElementById("whatyouguessed-text");

//function that runs when key pressed
document.onkeyup = function(event) {

  //variable that holds & determines what key pressed
  var userGuess = event.key;

  //random choice from array... this is the computer thought
  var computerChoice = Math.floor[(Math.random() * computerThought.length)];

  //this is the loop to give the user 10 chances to guess
    if (computerChoice === userGuess) {
      wins++;
      guesses = 10;
      whatYouGuessed = [];

    }
     guesses--;

   whatYouGuessed.push(userGuess); 
  
  if (guesses === 0) {
    guesses = 10;
    whatYouGuessed = [];
    losses++;
  }

  
  //display Psychic Guess score stats...wins, losses, guesses left
  userChoiceText.textContent = "You chose: " + userGuess;
  winsText.textContent ="Your wins: " + wins;
  lossesText.textContent = "Your losses:" + losses;
  guessesText.textContent = "Guesses Remaining: " + guesses;
  whatYouGuessedText.textContent = "You Guessed: " + whatYouGuessed;
  console.log(whatYouGuessed)
 // winsText.textContent = "Wins: " + wins;
 // lossesText.textContent = 
  










};