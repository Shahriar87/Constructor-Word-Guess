var Letter = require('./Letter.js');


function Word (letterObject) {
    this.array = [];
    letterGuessed = "";

    // WORD IS SPLITTED INTO LETTER OBJECT

    letterObject.forEach(element => {
        var letter = new Letter(element);

        this.array.push(letter);
    
    });

    console.log(array);

    // LOGGING ENTIRE WORD STRING

    this.completeWord = function (){

        this.array.forEach(element => {
            letterGuessed += this.array[element] + " ";
        });

        console.log(letterGuessed);
    };

    // CHECKING OF USER GUESS WITH LETTERS FROM CURRENTLY SELECTED WORD

    this.userGuessed = function (){

        this.array.forEach(element => {
            this.array[element].match(param);
        });
    };

}

module.exports = Word;