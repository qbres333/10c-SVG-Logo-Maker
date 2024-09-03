// import shapes.js
const Shape = require("../lib/Shape.js");


// square logo made from rect element, with rounded corners rx, ry
class Square extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  printSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="20" rx="6" ry="6" width="160" height="160" fill=${this.shapeColor} />
    <text x="150" y="120" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
    </svg>`;
  }
}

module.exports = Square;