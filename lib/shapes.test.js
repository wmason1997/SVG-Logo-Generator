const {
    Shape,
    Triangle,
    Square,
    Circle
} = require('../lib/shapes.js');



describe('Shape', () => {
    test('should throw error if render is called', () => {
        const shape = new Shape();
        const err = new Error('Each shape class must implement a render() method.')
        expect(shape.render).toThrow(err);
    });
});


//triangle render test and example test from rubric README
describe('Triangle',  ()  => {
    test('should return polygon svg shape', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

    });
});



//square render test in the same style as the one provided in rubric README
describe('Square',  ()  => {
    test('should return rect svg shape', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue" stroke-width="5"/>');

    });
});

//circle render test in the same style as the one provided in rubric README
describe('Circle',  ()  => {
    test('should return Circle shape', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');

    });
});