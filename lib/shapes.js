class Shape {
    constructor(desiredText, desiredColorOfText, desiredColorOfShape) {
        this.desiredText = desiredText;
        this.desiredColorOfText = desiredColorOfText;
        //this.desiredLogoShape = desiredLogoShape;
        this.desiredColorOfShape = desiredColorOfShape;
    }

    render() {
        throw new Error('Each shape class must implement a render() method.');
    }

    setColor(desiredColorOfShape) {
        this.desiredColorOfShape = desiredColorOfShape;
    }

}

// Triangle class
class Triangle extends Shape {
    constructor(desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape) {
        super(desiredText, desiredColorOfText, desiredColorOfShape);
        this.desiredLogoShape = desiredLogoShape;
    }

    render() {
        //return '<polygon points="150, 18 244, 182 56, 182" fill=${desiredColorOfShape}';

        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.desiredColorOfShape}" />`
    }
}

// Square class
class Square extends Shape {
    constructor(desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape) {
        super(desiredText, desiredColorOfText, desiredColorOfShape);
        this.desiredLogoShape = desiredLogoShape;
    }

    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.desiredColorOfShape}" stroke-width="5"/>`
    }
}

// Circle class
class Circle extends Shape {
    constructor(desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape) {
        super(desiredText, desiredColorOfText, desiredColorOfShape);
        this.desiredLogoShape = desiredLogoShape;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.desiredColorOfShape}" />`
    }
}



module.exports = {
    Shape,
    Triangle,
    Square,
    Circle
};