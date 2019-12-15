var words = ["cow", "pig", "goat", "chicken", "rooster", "dog", "cat", "donkey", "horse"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create an array of possible words to guess - is there something for a random selector for the computer to pick a word?
var win = 0;
var lettersGuessed = 0;
var guessLeft = 0;

// create function for letter press


document.onkeyup = function(event) {
    var userGuess = event.key;
    var wordSelect = words[Math.floor(Math.random() * words.length)];
    console.log(wordSelect);
    var correctLetters = "";
    document.getElementById("currentGuess").innerHTML = blanks(words)
    
    function blanks(words) {
        for (var i = 0; i < words.length; i++) {
            correctLetters += ("_ ");
        }
        return correctLetters;
    
};
}
// Create reference to text in html

var directions = document.getElementById("directions");
var winText = document.getElementById("win-text");
var guessesLeft = document.getElementById("guesses-left");
var guesses = document.getElementById("guesses");

document.getElementById("current-word").innerHTML = wordSelect;


// if statements for if user guessses word to randomly select