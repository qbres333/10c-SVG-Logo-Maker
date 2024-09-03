const Shape = require("../lib/Shape.js");

describe('logo', () => {
    describe('logoText', () => {
        it('should pass if the text entered is less than 4 characters', () => {
            const text = 'hhh';
            const generalShape = new Shape(text);

            expect(generalShape.text.length).toBeLessThan(4);
        })
    })
})