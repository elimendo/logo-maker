const inquirer = require('inquirer')
const {writeFile} = require("fs/promises")
const path = require("path")
const Text = require("./lib/Text")
const {Circle, Square, Triangle} = require('./lib/Shape')
const Svg =  require("./lib/Svg")


const questions = [
    {
        type: "input",
        name: "char",
        message: " What 3 characters will you deploy?"
    },

    {
        type: "input",
        name: "txtColor",
        message: "Pick a color for font color"
    },

    {
        type: "list",
        name: "shape",
        message: "Pick a shape",
        choices: ["Square", "Triangle", "Circle"]
    },

    {
        type: "input",
        name: "shapeColor",
        message: "Pick a color for your shape"
    },
];

function init() {
    inquirer.prompt(questions).then((answers)=>{
        // console.log(answers)
        const text = new Text(answers.char, answers.txtColor)
        // console.log(text.print())

        let shape;

        if(answers.shape === "Circle"){
            shape = new Circle(answers.shapeColor)
        } else if (answers.shape === "Square"){
            shape = new Square(answers.shapeColor)
        } else if (answers.shape === "Triangle"){
            shape = new Triangle(answers.shapeColor)
        }

        // console.log(shape.print())

        const svg = new Svg(text, shape)

        writeFile("logo.svg", svg.print())
    }) 
}
init()
