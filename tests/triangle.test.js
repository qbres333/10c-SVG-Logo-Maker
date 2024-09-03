const Triangle = require("../lib/triangle");

describe("triangle logo", () => {
  describe("triangle shape color", () => {
    it("should pass if the text rendered sets the correct shape color", () => {
      const shape = new Triangle();
      shape.shapeColor = `"blue"`;

      expect(shape.render()).toEqual(
        '<polygon points="150, 20 57.6, 184.8 242.4, 184.8" fill="blue" />'
      );
    });
  });
});
