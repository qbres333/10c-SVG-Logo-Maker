const inquirer = require("inquirer");
const fs = require("fs");
// import path module to save examples later (built-in Node module)
const path = require("path");

// import shapes
const Shape = require("./lib/Shape.js");
const Circle = require("./lib/circle.js");
const Square = require("./lib/square.js");
const Triangle = require("./lib/triangle.js");

/* create regular expression to validate Hex color; color keyword 
array located at the end of this file */
const hexRegExp = /^#([0-9a-fA-F]{6})$/;

// create an array of questions
const questions = [
  {
    type: "input",
    message: "Enter the text for your logo (max 3 characters): ",
    name: "logoText",
    // add validation
    validate: (input) => {
      if (input.length === 0) {
        return "Logo must contain text.";
      }
      if (input.length > 3) {
        return "Logo text must be 3 characters or fewer.";
      }
      return true;
    },
  },
  {
    type: "input",
    message:
      "Enter the color of your logo text (keyword or #FFFFFF Hex format): ",
    name: "textColor",
    // add validation
    validate: (input) => {
      if (!hexRegExp.test(input.toLowerCase()) && !colorKeyWord.includes(input.toLowerCase())) {
        return "Please enter a valid color keyword or Hex code.";
      }
      return true;
    },
  },
  {
    type: "list",
    message: "Choose a logo shape:",
    name: "logoShape",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    message:
      "Enter the color of your logo shape (keyword or #FFFFFF Hex format): ",
    name: "shapeColor",
    // add validation
    validate: (input) => {
      if (!hexRegExp.test(input.toLowerCase()) && !colorKeyWord.includes(input.toLowerCase())) {
        return "Please enter a valid color keyword or Hex code.";
      }
      return true;
    },
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
        // create timestamp to add to file name for uniqueness
        const timeCreated = Date.now();
        // construct the svg file 
        // use IF to create diff svg file based on logoShape
        if (logoInput.logoShape == 'circle') {
          const circleLogo = new Circle(
            logoInput.logoText,
            logoInput.textColor,
            logoInput.logoShape,
            logoInput.shapeColor
          );
          const logoData = circleLogo.printSVG();

          // create a file path where logo.svg files will be saved: examples
          // each file will have a unique name with shape & timestamp
          const filePath = path.join("./examples/", `circle-logo_${timeCreated}.svg`);

          fs.writeFile(filePath, logoData, (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("Generated logo.svg");
            }
          });
        } else if (logoInput.logoShape == 'square') {
          const squareLogo = new Square(
            logoInput.logoText,
            logoInput.textColor,
            logoInput.logoShape,
            logoInput.shapeColor
          );
          const logoData = squareLogo.printSVG();

          // create a file path where logo.svg files will be saved: examples
          // each file will have a unique name with shape & timestamp
          
          const filePath = path.join(
            "./examples/",
            `square-logo_${timeCreated}.svg`
          );

          fs.writeFile(filePath, logoData, (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("Generated logo.svg");
            }
          });
        } else {
          const triangleLogo = new Triangle(
            logoInput.logoText,
            logoInput.textColor,
            logoInput.logoShape,
            logoInput.shapeColor
          );
          const logoData = triangleLogo.printSVG();

          // create a file path where logo.svg files will be saved: examples
          // each file will have a unique name with shape & timestamp
     
          const filePath = path.join(
            "./examples/",
            `triangle-logo_${timeCreated}.svg`
          );

          fs.writeFile(filePath, logoData, (err) => {
            if (err) {
              console.error(err);
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