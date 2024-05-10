const { Circle, Triangle, Square } = require('./shapes');
// Checks to see the shape of the logo and then declares a new logo object
// The logo then uses the render() method to get the contents of the shape for the svg file and returns it
function createSVGLogo(text, textColor, shape, shapeColor) {
    let logo;
    switch (shape) {
        case 'Circle':
            logo = new Circle(text, textColor, shapeColor);
            break;
        case 'Triangle':
            logo = new Triangle(text, textColor, shapeColor);
            break;
        case 'Square':
            logo = new Square(text, textColor, shapeColor);
            break;
    }
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${logo.render()}
    </svg>`;
}

module.exports = createSVGLogo;