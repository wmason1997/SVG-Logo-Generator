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
        return '<polygon points="150, 18 244, 182 56, 182" fill=${desiredColorOfShape}';
    }
}

// Square class
class Square extends Shape {
    constructor(desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape) {
        super(desiredText, desiredColorOfText, desiredColorOfShape);
        this.desiredLogoShape = desiredLogoShape;
    }
}

// Circle class
class Circle extends Shape {
    constructor(desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape) {
        super(desiredText, desiredColorOfText, desiredColorOfShape);
        this.desiredLogoShape = desiredLogoShape;
    }
}



module.exports = {
    Shape,
    Triangle,
    Square,
    Circle
};