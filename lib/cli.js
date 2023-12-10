const inquirer = require('inquirer');
const { join } = require('path');
const { Shape, Triangle, Square, Circle} = require('./shapes.js');
const { writeFile } = require('fs/promises');

class CLI {
    constructor() {
        this.title = '';
        this.params = [];
    }

    run() {
        this.addParams()
    }

    addParams() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'desiredText',
                    message: 'Enter logo text (up to 3 characters).',
                },
                {
                    type: 'input',
                    name: 'desiredColorOfText',
                    message: 'Enter text color - keyword or hexadecimal number (please include # in your input).',
                },
                {
                    type: 'list',
                    name: 'desiredLogoShape',
                    message: 'What should the shape of the logo be?',
                    choices: [
                        'circle',
                        'triangle',
                        'square'
                    ],
                },
                {
                    type: 'input',
                    name: 'desiredColorOfShape',
                    message: "Enter shape's color - keyword or hexadecimal number (please include # in your input).",
                },
            ])
            .then(({ desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape}) => {
                this.params.push({ desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape });

                let selectedShape;
                switch (desiredLogoShape) {
                    case 'circle':
                        selectedShape = new Circle(desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape);
                        break;
                    case 'triangle': 
                        selectedShape = new Triangle(desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape);
                        break;
                    case 'square':
                        selectedShape = new Square(desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape);
                        break;
                    default:
                        throw new Error('Shape not an option!');
                }

                // Generate SVG code for the selected shape
               // const svgCode = selectedShape.render();
               const svgCode = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
    ${selectedShape.render()}
      
    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${desiredColorOfText}">${desiredText}</text>
      
</svg>
               `

                // Write the SVG code to logo.svg
                return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), svgCode);
            })
            .then(() => {
                console.log('Generated logo.svg');
            })
            .catch((err) => {
                console.log(err);
                console.log('Oops. Something went awry.');
            });
    }
}

module.exports = CLI; // exporting CLI class