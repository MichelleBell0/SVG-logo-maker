const { Circle, Triangle, Square } = require('./shapes');

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