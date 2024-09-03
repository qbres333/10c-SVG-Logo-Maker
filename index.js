const inquirer = require("inquirer");
const fs = require("fs");
// import path module to save examples later (built-in Node module)
const path = require("path");

// import shapes
const Shape = require("../lib/Shape.js");
const Circle = require("../lib/Circle.js");
const Square = require("../lib/Square.js");
const Triangle = require("../lib/Triangle.js");

/* create regular expression to validate Hex color; color keyword 
array located at the end of this file */
const hexRegExp = /^[0-9A-F]{6}$/;

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
    message: "Enter the color of your logo text (keyword or 6-digit Hex code): ",
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
    message: "Enter the color of your logo shape (keyword or 6-digit Hex code): ",
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
          textColor: response.textColor.toLowerCase(),
          logoShape: response.logoShape,
          shapeColor: response.shapeColor.toLowerCase(),
        };

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


const colorKeyWord = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen"
];