//set all my global variables to be used throughout the game:

var words = ["cow", "pig", "goat", "chicken", "rooster", "dog", "cat", "donkey", "horse", "peacock", "turkey"];
var win = 0;
var loss = 0;
var lettersGuessed = [];
var guessLeft = 15;
var correctLetters = [];
var yourGuess = [];
var inProgress = false;
var wordSelect = "";



// create function for letter press: I tried but it didnt work out. 

// function removeCommas() {

//     correctLetters.replace(/,/g, " ");
//     document.getElementById('current-word').innerHTML = noComma;
//     }
    console.log(wordSelect);

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
            lettersGuessed.push(yourGuess.toUpperCase())
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

    // document.getElementById("button").addEventListener("click", reset()); -- tried to add a reset button but things did not pan out... 

    
    //function to reset game if win or loss:
    
    function reset() {
        inProgress = false;
        guessLeft = 15;
        yourGuess = [];
        lettersGuessed = [];
        correctLetters = [];
    }

    // Create reference to update text in html

    document.getElementById('win-text').innerHTML = "Wins: " + win;
    document.getElementById('loss-text').innerHTML = "Losses: " + loss;
    document.getElementById('guesses-left').innerHTML = "Guesses left: " + guessLeft;
    document.getElementById('guesses').innerHTML = "Letters already guessed: " + lettersGuessed;
    document.getElementById("current-word").innerHTML = correctLetters;

};