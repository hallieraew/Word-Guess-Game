var words = ["cow", "pig", "goat", "chicken", "rooster", "dog", "cat", "donkey", "horse"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create an array of possible words to guess - is there something for a random selector for the computer to pick a word?
var win = 0;
var loss = 0;
var lettersGuessed = 0;
var guessLeft = 15;
var correctLetters = [];
var yourGuess = [];
var inProgress = false;

// create function for letter press
var wordSelect = "";

document.onkeyup = function (event) {

    if (inProgress) {

        document.getElementById("guesses").innerHTML = event.key;
        var yourGuess = event.key;

        for (var i = 0; i < wordSelect.length; i++) {
            if (wordSelect[i] === yourGuess) {
                correctLetters[i] = yourGuess
            }
        }
        

    }
    else {
        
        wordSelect = words[Math.floor(Math.random() * words.length)];
        console.log(wordSelect);
        inProgress = true;
        
        for (var i = 0; i < wordSelect.length; i++) {
            console.log(wordSelect)
            correctLetters[i] = ("_");
        }
        
        if (yourGuess === wordSelect) {
            wins++;

        }
        else if (yourGuess !== wordSelect) {
            guessLeft--;
        }
        else if (guessLeft === 0) {
            loss++;
        }
        // document.getElementById("current-word").innerHTML = (correctLetters);
    };
    document.getElementById("current-word").innerHTML = correctLetters;

    // Create reference to text in html


    document.getElementById('win-text').innerHTML = "Wins: " + win;
    document.getElementById('loss-text').innerHTML = "Losses: " + loss;
    document.getElementById('guesses-left').innerHTML = "Guesses left: " + guessLeft;
    document.getElementById('guesses').innerHTML = "Letters already guessed: " + yourGuess;


};



// if statements for if user guessses word to randomly select

