# SVG-Logo-Generator

## Table of Contents
* [Description](#description)
* [Examples](#examples)
* [Video Example Walkthrough](#example) 
* [Installation](#installation-instructions)
* [Usage](#usage-instructions)
* [Credits](#credits)
* [Contributing](#contribution-guidelines)
* [Tests](#tests)
* [Questions](#questions)

## Description <a name="description"></a> 
I made this project so that as a freelance web developer I could generate simple SVG logos for my own projects without having to pay a graphic designer. I made it by building a Node.js command-line application that takes in user input to generate a logo and save it as an SVG. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to an .svg file.

## Examples <a name="examples"></a>
![Circle logo.svg Example](/examples/circle-example.svg)
![Triangle logo.svg Example](/examples/triangle-example.svg)
![Square logo.svg Example](/examples/square-example.svg)

## Video Example Walkthrough <a name="example"></a>
Here is a link to the video example walkthrough hosted on Google Drive: []().

## Installation <a name="installation-instructions"></a>
Git clone this repository down locally to your machine.
Then install Inquirer version 8.2.4 like so:
```bash
npm i inquirer@8.2.4
```

Then install Jest as a developer dependency:
```bash
npm i -D jest
```

## Usage <a name="usage-instructions"></a>
In the command line interface, run:
```bash
node index.js
```


## Credits <a name="credits"></a>
I used the Stu_Mini-Project from Module 10-OOP of the UCSD-VIRT-FSF-PT-09-2023-U-LOLC GitLab as an example.

When I was having trouble using my classes to write a logo.svg file, I consulted ChatGPT and it helped me to implement a switch statement to instantiate the proper shape class (Square, Triangle, or Circle).

## Contributing <a name="contribution-guidelines"></a>
Be respectful and please reach out if you have suggestions!

## Tests <a name="tests"></a> 
npm run test. I tested the render methods and the setColor methods of each shape class.

## Questions
Please feel free to reach out to me with questions or suggestions for this app.<br>
My GitHub user name is wmason1997 and here is my profile: [https://github.com/wmason1997](https://github.com/wmason1997).<br>
My email is williamcmason1997@gmail.com