
function letterCheck (letter){
    this.character = letter;
    this.guess = false;

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
};


module.exports = letterCheck;