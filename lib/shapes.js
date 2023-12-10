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

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <polygon points="150, 18 244, 182 56, 182" fill="${this.desiredColorOfShape}" />
      
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.desiredColorOfText}">${this.desiredText}</text>
      
      </svg>`
    }
}

// Square class
class Square extends Shape {
    constructor(desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape) {
        super(desiredText, desiredColorOfText, desiredColorOfShape);
        this.desiredLogoShape = desiredLogoShape;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="50" y="0" width="200" height="200" fill="${this.desiredColorOfShape}" stroke-width="5"/>
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.desiredColorOfText}">${this.desiredText}</text>
    
    </svg>`
    }
}

// Circle class
class Circle extends Shape {
    constructor(desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape) {
        super(desiredText, desiredColorOfText, desiredColorOfShape);
        this.desiredLogoShape = desiredLogoShape;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.desiredColorOfShape}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.desiredColorOfText}">${this.desiredText}</text>
      
      </svg>`
    }
}



module.exports = {
    Shape,
    Triangle,
    Square,
    Circle
};