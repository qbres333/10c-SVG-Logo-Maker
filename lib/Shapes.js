// build parent Shape
class Shape {
    constructor(text, textColor, shape, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

}


// Build children, inherit traits. Change printSVG for each shape.
class Circle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  printSVG() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <${this.shape} cx="150" cy="100" r="80" fill=${this.shapeColor} />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
      </svg>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  printSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="160" y="160" rx="6" ry="6" width="160" height="160" fill=${this.shapeColor} />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
    </svg>`;
  }
}


class Triangle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  printSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 20 57.6, 184.8 242.4, 184.8" fill=${this.shapeColor} />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
    </svg>`;
  }
}


// export the module
module.exports = Shapes;