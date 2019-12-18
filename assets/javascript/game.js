var words = ["cow", "pig", "goat", "chicken", "rooster", "dog", "cat", "donkey", "horse"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var win = 0;
var loss = 0;
var lettersGuessed = [];
var guessLeft = 15;
var correctLetters = [];
var yourGuess = [];
var inProgress = false;


// create function for letter press
var wordSelect = "";

document.onkeyup = function (event) {

    if (inProgress) {

        var gameWon = true;
        document.getElementById("guesses").innerHTML = event.key;
        var yourGuess = event.key;
        var letterFound = false;

        for (var i = 0; i < wordSelect.length; i++) {
            if (wordSelect[i] === yourGuess) {
            correctLetters[i] = yourGuess
            letterFound = true;
            }
            if (correctLetters[i] === ("_")) {
                gameWon = false;
            }
        }
        if (letterFound === false) {
            lettersGuessed.push(yourGuess)
        }

        if (gameWon) {
            win++;
            reset();
        }
        else if (guessLeft > 0) {
            guessLeft--;
        }
        else {
            loss++;
            reset();
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

    };
    document.getElementById("current-word").innerHTML = correctLetters;

    // document.getElementById("button").addEventListener("click", reset());

    function reset() {
        inProgress = false;
        guessLeft = 15;
        yourGuess = [];
        lettersGuessed = [];
        correctLetters = [];
    }

    // Create reference to text in html


    document.getElementById('win-text').innerHTML = "Wins: " + win;
    document.getElementById('loss-text').innerHTML = "Losses: " + loss;
    document.getElementById('guesses-left').innerHTML = "Guesses left: " + guessLeft;
    document.getElementById('guesses').innerHTML = "Letters already guessed: " + lettersGuessed;

};



// if statements for if user guessses word to randomly select

