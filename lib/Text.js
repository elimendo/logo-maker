class Text {
    constructor(char, txtColor){
        this.char = char;
        this.txtColor = txtColor;
    
    }
    print(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.char}">${this.txtColor}</text>`
    }
}
module.exports = Text