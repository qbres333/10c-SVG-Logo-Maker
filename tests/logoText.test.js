const Shape = require("../lib/Shape.js");

describe('logo', () => {
    describe('logoText', () => {
        it('should fail if the text entered is longer than 3 characters', () => {
            const text = 'hhhh';
            const generalShape = new Shape(text);

            expect(generalShape.text.length).toBeLessThan(4);
        })
    })
})