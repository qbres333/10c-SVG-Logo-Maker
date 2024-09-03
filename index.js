const inquirer = require("inquirer");
const fs = require("fs");

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

        // construct the svg file text
        //   use IF to create diff svg file based on logoShape
        let circleLogo = `<svg version="1.1" 
            width="300" 
            height="200" 
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill=${logoInput.shapeColor} />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill=${logoInput.textColor}>${logoInput.logoText}</text>
            </svg>`;

        // square logo made from rect element, with rounded corners rx, ry
        let squareLogo = `<svg version="1.1" 
            width="300" 
            height="200" 
            xmlns="http://www.w3.org/2000/svg">
            <rect x="160" y="160" rx="6" ry="6" width="160" height="160" fill=${logoInput.shapeColor} />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill=${logoInput.textColor}>${logoInput.logoText}</text>
            </svg>`;

        // triangle created with polygon element
        // top point 150, 150; bottom left 70,[calulcate]; bottom right 230,[calculate]
        let triangleLogo = `<svg version="1.1" 
            width="300" 
            height="200" 
            xmlns="http://www.w3.org/2000/svg">
            <polygon x="160" y="160" rx="6" ry="6" width="160" height="160" fill=${logoInput.shapeColor} />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill=${logoInput.textColor}>${logoInput.logoText}</text>
            </svg>`;
            
    })
}

/* for tests: 
prompt for text: test fails if there are more than 3 characters;
prompt for text color: test fails if the input is not a color keyword
    or hex code
prompt for shape: shape is a list (triangle, circle, square)
prompt for shape color: test fails if the input is not a color keyword
    or hex code
 
*/