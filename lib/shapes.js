class Shape {
    constructor(text = '', textColor = '', shapeColor = '') {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    setText(t) {
        this.text = t;
    }
    setTextColor(tColor) {
        this.textColor = tColor;
    }
    setColor(sColor) {
        this.shapeColor = sColor;
    }
    
    render() {
        return 'The child should implement the render() method';
    }
}

class Circle extends Shape {
    constructor(text = '', textColor = '', shapeColor = '') {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Triangle extends Shape {
    constructor(text = '', textColor = '', shapeColor = '') {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.shapeColor}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Square extends Shape {
    constructor(text = '', textColor = '', shapeColor = '') {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = { Circle, Triangle, Square };