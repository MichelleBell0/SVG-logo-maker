const { Circle, Triangle, Square } = require('./shapes');
// Test suite for shapes to check if each Shape child class generates the correct content.
describe('Test Suite for Shapes', () => {
    // Tests the Circle class render() method output
    it('Should render a circle svg', () => {
        const expectedShape = `<circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`;
        const circle = new Circle('SVG', 'white', 'blue');
        expect(circle.render()).toEqual(expectedShape);
    });

    // Tests the Triangle class render() method output
    it('Should render a triangle svg', () => {
        const expectedShape = `<polygon points="150,18 244,182 56,182" fill="blue" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">SVG</text>`;
        const triangle = new Triangle('SVG', 'white', 'blue');
        expect(triangle.render()).toEqual(expectedShape);
    });

    // Tests the Square class render() method output
    it('Should render a square svg', () => {
        const expectedShape = `<rect x="75" y="25" width="150" height="150" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`;
        const square = new Square('SVG', 'white', 'blue');
        expect(square.render()).toEqual(expectedShape);
    });
});