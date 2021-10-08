// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenseGenerator = require('./utils/generateMarkdown.js');
var badger = '';
// const generateMarkdown = require('./utils/generateMarkdown');
// console.log(generateMarkdown.renderLicenseBadge);


// TODO: Create an array of questions for user input
const questions = [
    // {
    //     type: 'input',
    //     message: 'What is your Github Username?',
    //     name: 'Github',
    // },
    // {
    //     type: 'input',
    //     message: 'What is your email address?',
    //     name: 'Email',
    // },
    {
        type: 'input',
        message: 'What is your Project Title?',
        name: 'Title',
    },
    // {
    //     type: 'input',
    //     message: 'Provide a short description of the project BEFORE we get into the details of the what, why, and how of your project.',
    //     name: 'Description',
    // },
    // {
    //     type: 'input',
    //     message: 'What was your motivation?',
    //     name: 'Motivation',
    // },
    // {
    //     type: 'input',
    //     message: 'Why did you build this project?',
    //     name: 'WhyBuild',
    // },
    // {
    //     type: 'input',
    //     message: 'What problem does it solve?',
    //     name: 'Problem',
    // },
    // {
    //     type: 'input',
    //     message: 'What did you learn?',
    //     name: 'Learn',
    // },
    // {
    //     type: 'input',
    //     message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    //     name: 'Installation'
    // },
    // {
    //     type: 'input',
    //     message: 'Provide instructions and examples for use.',
    //     name: 'Usage',
    // },
    // {        
    //     type: 'input',
    //     message: 'What is the Github username for any contributors or persons you would like to give credit to?',
    //     name: 'Contributors',
    // },
    // {        
    //     type: 'input',
    //     message: 'Are there any links you want to add that were used to support the development of this project?',
    //     name: 'Tutorials',
    // },
    {
        type: 'checkbox',
        message: 'Which license type are you using for this file',
        name: 'License',
        choices: ['MIT','APACHE','GPL','BSD','NONE'],
    },
];


// let fileName = "";
// TODO: Create a function to write README file
const writeToFile = (answers) =>
`# ${answers.Title}
${licenseGenerator.renderLicenseBadge(...answers.License)}

## Description
${answers.Description}
- ${answers.Motivation}
- ${answers.WhyBuild}
- ${answers.Problem}
- ${answers.Learn}

# Table of Contents
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Questions](#questions)

## Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage
${answers.Usage}

Please see screenshots attached
    
## Contributions
The following persons assisted with this project.  If left blank, there were no other contributors.
- ${answers.Contributors}
- ${answers.Tutorials}

## License
${licenseGenerator.renderLicenseLink(...answers.License)}


## Questions
- https://github.com/${answers.Github}

If any questions, please direct them directly to me at ${answers.Email}
`;


// TODO: Create a function to initialize app
function init() {

    inquirer
    .prompt(questions)
    .then((answers) => {
        fileName = `${answers.Title.toLowerCase().split(' ').join('')}.md`;
            const READmeContent = writeToFile(answers);
            // badger = licenseGenerator.renderLicenseBadge(...answers.License);
            // console.log("this shouldnt be undefined " + badger);
        fs.writeFile(fileName, READmeContent, (err) =>
            err ? console.log(err) : console.log('Check out your README file!')
        );  
    }); 
}


// Function call to initialize app
init();
