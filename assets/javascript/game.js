
// Define variables

// letters that computer can choose
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// scoreboard
var wins = 0;
var loss = 0;

// guesses left & letters guessed 
var guessesLeft = 9;
var lettersGuessed = [];
var computerChose = [];

window.onload = function() {
      // This randomly chooses a letter from the computerChoice array - this is the computer's letter
      var computerLetter = computerChoice[Math.floor(Math.random()*computerChoice.length)];
      computerChose.push(computerLetter);
      console.log(computerChose[0]);
}
  
// User input
 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);



    var charCode = typeof event.which == "letter" ? event.which : event.keyCode;

    if (charCode) {
        lettersGuessed.push(String.fromCharCode(charCode));




if((userGuess === computerChose[0]) && (guessesLeft > 0)) {
    wins++;
    console.log("you're a winner baby");
    guessesLeft = 9;
    lettersGuessed = [];
    computerChose = [];
    var computerLetter = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    computerChose.push(computerLetter);
    console.log(computerChose[0]);
 }

if((userGuess !== computerChose[0]) && (guessesLeft > 0)) {
    // lettersGuessed.push(item1, item2, item3, item4, item5, item6, item7, item8, item9);
    guessesLeft--;
    console.log("sry");
    }

    if((userGuess !== computerChose[0]) && (guessesLeft <= 0)) {
        // lettersGuessed.push(item1, item2, item3, item4, item5, item6, item7, item8, item9);
        guessesLeft = 9;
        loss++;
        lettersGuessed = [];
        console.log("You took the L");
        computerChose = [];
        var computerLetter = computerChoice[Math.floor(Math.random()*computerChoice.length)];        
        computerChose.push(computerLetter);
        console.log(computerChose[0]);

        }

    

 
     // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
     var html =
     "<p>wins: " + wins + "</p>" +
     "<p>losses: " + loss + "</p>" +
     "<p>guesses left: " + guessesLeft + "</p>" +
     "<p>letters guessed: " + lettersGuessed + "</p>" ;
 

   // Set the inner HTML contents of the #game div to our html string
   document.querySelector("#game").innerHTML = html;
 }
}
