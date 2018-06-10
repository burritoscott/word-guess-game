//use 'onkeyup' to trigger a for loop to loop through the alphabet array.
//find out how to remove letter from the array when it is guessed
//find out how to apply that letter to the word when it is guessed correctly

// // array containing all of the letters
var colorArray = ["light blue", "magenta", "tangerine", "lavender"];


//variables being referenced id's in html
var wins = 0;
var losses = 0;
var numGuessLeft = 9;

var wins_span = document.querySelector("#wins");
var losses_span = document.querySelector("#losses");
var numGuessLeft_span = document.querySelector("#numGuessLeft");

// wins_span.innerText = wins;
// losses_span.innerText = losses;
// numGuessLeft_span = numGuessLeft;


function playGame(event){
    var randomColorIndex = Math.floor(Math.random()*colorArray.length);
    var randomColor = colorArray[randomColorIndex];
    var userGuess = event.key;

    document.querySelector("#lettersGuessed").innerText = userGuess;
    // code that sets up the index for the random color that is chosen
    var answerArray = [];
    for (i=0; i<randomColor.length; i++){
        answerArray[i] = "_";
    }
    var remainingLetters = randomColor.length;
    
}
document.onkeyup = playGame;
