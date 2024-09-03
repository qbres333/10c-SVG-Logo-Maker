const Circle = require("../lib/circle");

describe("logo", () => {
  describe("logo shape", () => {
    it("should pass if the text entered is longer than 3 characters", () => {
    //   const shape = "hhhh";
      const shape = new Circle();
      shape.shapeColor(blue);

      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });
});