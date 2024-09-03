const Square = require("../lib/square");

describe("square logo", () => {
  describe("square shape color", () => {
    it("should pass if the text rendered sets the correct shape color", () => {
      const shape = new Square();
      shape.shapeColor = `"blue"`;

      expect(shape.render()).toEqual(
        '<rect x="70" y="20" rx="6" ry="6" width="160" height="160" fill="blue" />'
      );
    });
  });
});
