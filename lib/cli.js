const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
// const { createDocument } = require('./document');

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
                    message: 'Enter text color (keyword or hexadecimal number).',
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
                    message: "What should the shape's color be? (keyword or hexadecimal number)",
                },
            ])
            .then(({ desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape}) => {
                this.params.push({ desiredText, desiredColorOfText, desiredLogoShape, desiredColorOfShape });
            });
    }
}

module.exports = CLI; // exporting CLI class