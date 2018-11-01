
function LetterCheck (letter){
    this.character = letter;
    this.guess = false;

    // FIRST FUNCTION TO REPLACE CHARACTERS BASED ON USER GUESS

    this.toString = function (){
        if (this.character === " ") {
            this.guess = true;
            return " ";
        } else {
            if (this.guess === false) {
                return "_";
            } else {
                return this.character;
            }
        }
    };

    // SECOND FUNCTION TO SWITCH GUESS TO TRUE IF USER GUESS MATCHES THE EXISTING CHARACTERS OF THE WORD

    this.match = function () {
        if (userGuess === this.character) {
            this.guess = true;
        }
    };
};


module.exports = LetterCheck;