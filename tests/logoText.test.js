const Shapes = require("../Shapes.js");

describe('logo', () => {
    describe('logoText', () => {
        it('should fail if the text entered is longer than 3 characters', () => {
            const text = 'hhhh';
            const generalShape = new Shapes(text);

            expect(generalShape.text.length).toBeLessThan(4);
        })
    })
})