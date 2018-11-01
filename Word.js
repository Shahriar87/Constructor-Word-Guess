var Letter = require('./Letter.js');

function Word (letterObject) {
    this.array = [];

    letterObject.forEach(element => {
        var letter = new Letter(element);

        this.array.push(letter);
    
    });

    console.log(array);

    
}