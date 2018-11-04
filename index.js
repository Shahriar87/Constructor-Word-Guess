var Word = require("./Word.js");
var inquirer = require("inquirer");
var letterArray = "abcdefghijklmnopqrstuvwxyz";
var bandNames = ["green day", "papa roach", "mudvayne", "creed", "system of a down"];
var randomBandIndex = Math.floor(Math.random() * bandNames.length);

// var randomBand = (bandNames[randomBandIndex]).split(",");

var randomBand = bandNames[randomBandIndex];

var randomWord = new Word(randomBand);

var callNextWord = false;

var incorrectLetters = [];
var correctLetters = [];
var guessesLeft = 9;

// THE MAIN GAME FUNCTION

function game() {

    if (callNextWord) {
        randomBandIndex = Math.floor(Math.random() * bandNames.length);
        randomBand = bandNames[randomBandIndex];
        randomWord = new Word(randomBand);
        callNextWord = false;
    }

    var wordComplete = [];

    var wordCheckArray = [];


    randomWord.array.forEach(completeCheck);

    // INQUIRER FUNCTION TO TAKE USER INPUT

    if (wordComplete.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Guess the Alt Rock Band with letters between A-Z!",
                name: "userinput"
            }
        ])
            .then(function (param) {
                if (!letterArray.includes(param.userinput) || param.userinput.length > 1) {
                    console.log("\nPlease try again!\n");
                    game();
                } else {

                    if (incorrectLetters.includes(param.userinput) || correctLetters.includes(param.userinput) || param.userinput === "") {
                        console.log("\nAlready Guessed or Nothing Entered\n");
                        game();
                    } else {

                        // var wordCheckArray = [];

                        randomWord.userGuessed(param.userinput);

                        randomWord.array.forEach(wordCheck);
                        if (wordCheckArray.join('') === wordComplete.join('')) {
                            console.log("\nIncorrect\n");

                            incorrectLetters.push(param.userinput);
                            guessesLeft--;
                        } else {
                            console.log("\nCorrect!\n");

                            correctLetters.push(param.userinput);
                        }


                        randomWord.completeWord();

                        console.log("Guesses Left: " + guessesLeft + "\n");

                        console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                        if (guessesLeft > 0) {
                            game();
                        } else {
                            console.log("Sorry, you lose!\n");

                            restartGame();
                        }

                        function wordCheck(key) {
                            wordCheckArray.push(key.guess);
                        }
                    }
                }
            })
    } else {
        console.log("YOU WIN!\n");
        restartGame();
    }

    function completeCheck(key) {
        wordComplete.push(key.guess);
    }

};

// RESTART GAME

function restartGame(){
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to:",
            choices: ["Play Again", "Exit"],
            name: "restart"
        }
    ])
    .then(function (input){
        if (input.restart === "Play Again"){
            callNextWord = true;
            incorrectLetters = [];
            correctLetters = [];
            guessesLeft = 9;
            game();
        } else {
            return
        }
    })
}

game();