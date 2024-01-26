const inquirer = require('inquirer')
const fs = require("fs")
const path = require("path")

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
        message: "Pick a color for shape color"
    },
];

function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
    }) 
}
init()