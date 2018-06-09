//use 'onkeyup' to trigger a for loop to loop through the alphabet array.
//find out how to remove letter from the array when it is guessed
//find out how to apply that letter to the word when it is guessed correctly

// // array containing all of the letters
var words = ["light blue", "magenta", "tangerine", "lavender"];
var answerArray = [];
var wins = 0;
var losses = 0;
var numGuessLeft = 9;
var guesses = [];

function playGame(event){
    var computerWord = Math.floor(Math.random()*words.length);
    var computerLetter = words[computerWord];
    var userChoice = event.key;
    
    for(var i =0; i<computerWord.length; i++){
        guesses[i] = "_";
    }
    var remainingLetters = word.length;
    
    document.querySelector("#colorWord").innerText = computerLetter;
    document.querySelector("#lettersGuessed").innerText = userChoice;

    // if (userChoice == computerLetter){
    //     wins++;
    //     document.querySelector("#wins").innerText = wins;
    //     numGuessLeft = 9;
    //     document.querySelector("#numGuess").innerText = numGuessLeft;
    //     document.querySelector("#lettersGuessed").innerText = guesses;
    // }else{
    //     numGuessLeft--;
    //     document.querySelector("#numGuess").innerText = numGuessLeft;
    //         if (numGuessLeft == 0){
    //         losses++;
    //         document.querySelector("#loses").innerText = losses;
    //         numGuessLeft = 9;
    //         document.querySelector("#numGuess").innerText = numGuessLeft;
    //         }
    // } 
}
document.onkeyup = playGame;
