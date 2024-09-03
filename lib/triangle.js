// import shapes.js
const Shape = require("../lib/Shape.js");


// triangle created with polygon element
class Triangle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  printSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 20 57.6, 184.8 242.4, 184.8" fill=${this.shapeColor} />
    <text x="150" y="155" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
    </svg>`;
  }

  render() {
    return `<polygon points="150, 20 57.6, 184.8 242.4, 184.8" fill=${this.shapeColor} />`;
  }
}

module.exports = Triangle;