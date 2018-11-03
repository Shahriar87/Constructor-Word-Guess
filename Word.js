var Letter = require('./Letter.js');


function Word(letterObject) {
    this.array = [];
    letterGuessed = "";

    // WORD IS SPLITTED INTO LETTER OBJECT

    for (var i = 0; i < letterObject.length; i++) {
        var letter = new Letter(letterObject[i]);
        this.array.push(letter);
    };

    // LOGGING ENTIRE WORD STRING

    this.completeWord = function () {

        letterGuessed = "";
        for (var i = 0; i < this.array.length; i++) {
            letterGuessed += this.array[i] + " ";
        }
        console.log(letterGuessed + "\n");
    };

    // CHECKING OF USER GUESS WITH LETTERS FROM CURRENTLY SELECTED WORD

    this.userGuessed = function (param) {
        for (var i = 0; i < this.array.length; i++) {
            this.array[i].match(param);
        }
    };

}

module.exports = Word;