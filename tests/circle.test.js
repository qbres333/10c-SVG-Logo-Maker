const Circle = require("../lib/circle");

describe("circle logo", () => {
  describe("circle shape color", () => {
    it("should pass if the text rendered sets the correct shape color", () => {
      const shape = new Circle();
      shape.shapeColor = `"blue"`;

      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
  });
});