const Shape = require('../lib/shapes.js');

describe('Shape', () => {
    test('should throw error if render is called', () => {
        const shape = new Shape();
        const err = new Error('Child class must implement a render() method.')
        expect(shape.render).toThrow(err);
    });
});

//triangle render test

//square render test

//circle render test