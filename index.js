const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("../lib/shapes");
// for file path to save examples (built-in Node module)
const path = require("path");

// create an array of questions
const questions = [
  {
    type: "input",
    message: "Enter the text for your logo (max 3 characters): ",
    name: "logoText",
    // add validation
  },
  {
    type: "input",
    message: "Enter the color of your logo text (keyword or Hex code): ",
    name: "textColor",
    // add validation
  },
  {
    type: "list",
    message: "Choose a logo shape:",
    name: "logoShape",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    message: "Enter the color of your logo shape (keyword or Hex code): ",
    name: "shapeColor",
    // add validation
  },
];


// create string to structure the svg element
// use writeFile to create svg file named 'logo.svg'
function writeSVG() {
    inquirer.prompt(questions)
    .then((response) => {
        // collect answers in an object
        const logoInput = {
            logoText: response.logoText,
            textColor: response.textColor,
            logoShape: response.logoShape,
            shapeColor: response.shapeColor
        }

        // create a file path where logo.svg files will be saved: examples
        const filePath = path.join("../examples", "logo.svg");
        
        // construct the svg file 
        // use IF to create diff svg file based on logoShape
        if (logoInput.logoShape = 'circle') {
            const circleLogo = Circle(
              logoInput.logoText,
              logoInput.textColor,
              logoInput.logoShape,
              logoInput.shapeColor
            );
            const logoData = circleLogo.printSVG();

            fs.writeFile(filePath, logoData, (err) => {
                if(err) {
                    console.err(err);
                } else {
                    console.log("Generated logo.svg");
                }
            });
        } else if (logoInput.logoShape = 'square') {
            const squareLogo = Square(
              logoInput.logoText,
              logoInput.textColor,
              logoInput.logoShape,
              logoInput.shapeColor
            );
            const logoData = squareLogo.printSVG();

            fs.writeFile(filePath, logoData, (err) => {
              if (err) {
                console.err(err);
              } else {
                console.log("Generated logo.svg");
              }
            });
        } else {
            const triangleLogo = Triangle(
              logoInput.logoText,
              logoInput.textColor,
              logoInput.logoShape,
              logoInput.shapeColor
            );
            const logoData = triangleLogo.printSVG();

            fs.writeFile(filePath, logoData, (err) => {
              if (err) {
                console.err(err);
              } else {
                console.log("Generated logo.svg");
              }
            });
        }
        
    })
}

// function to initialize the app
function init() {
    writeSVG();
}

// function call to initialize app
init();
