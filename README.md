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

This was an interesting project for me because it was my first time working with Jest and writing tests for my own project. I look forward to more project development and testing in the future!

## Examples <a name="examples"></a>
![Circle logo.svg Example](/examples/circle-example.svg)
![Triangle logo.svg Example](/examples/triangle-example.svg)
![Square logo.svg Example](/examples/square-example.svg)

Note: click on the Triangle example. The text actually fits within the triangle. GitHub rendering sometimes throws that off in this README.md.

## Video Example Walkthrough <a name="example"></a>
Here is a link to the video example walkthrough hosted on Google Drive: [https://drive.google.com/file/d/1ngrel8bmqBAOhqQK09H3gbe6ebq_7-VJ/view](https://drive.google.com/file/d/1ngrel8bmqBAOhqQK09H3gbe6ebq_7-VJ/view). I showed the interaction with the command line interface (CLI) by entering node index.js, the generated logo.svg in VS Code and in a browser, as well as how to run the tests ("npm run test" in the CLI)

## Installation <a name="installation-instructions"></a>
Git clone this repository down locally to your machine.
Then install Inquirer version 8.2.4 like so:
```bash
npm i inquirer@8.2.4
```

Then install Jest as a developer dependency like so:
```bash
npm i -D jest
```

## Usage <a name="usage-instructions"></a>
In the command line interface, run:
```bash
node index.js
```

## Credits <a name="credits"></a>
I used the Stu_Mini-Project from Module 10-OOP of the [UCSD-VIRT-FSF-PT-09-2023-U-LOLC](https://git.bootcampcontent.com/University-of-California---San-Diego/UCSD-VIRT-FSF-PT-09-2023-U-LOLC) GitLab repository as an example. Thank you, user mvpache!

When I was having trouble using my classes to write a logo.svg file, I consulted ChatGPT and it helped me to implement a switch statement to instantiate the proper shape class (Square, Triangle, or Circle).

I had a tutoring session with Mila Hose on 12/10. Mila helped me with creating render method tests for Triangle, Circle, and Square in my shapes.test.js file. Mila also helped me to fix the formatting within my render methods so that they would pass the test formats within the example test provided in the rubric's README. I was writing opening multiple <svg> segments before our session and Mila helped me to find the source of that issue and correct. Thanks Mila!

## Contributing <a name="contribution-guidelines"></a>
Be respectful and please reach out if you have suggestions!

## Tests <a name="tests"></a> 

I tested the render methods and the setColor methods of each shape class.

In the command line interface, run:
```bash
npm run test
```

## Questions
Please feel free to reach out to me with questions or suggestions for this app.<br>
My GitHub user name is wmason1997 and here is my profile: [https://github.com/wmason1997](https://github.com/wmason1997).<br>
My email is williamcmason1997@gmail.com