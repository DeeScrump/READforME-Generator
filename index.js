// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const 

// Array for the
const license = [
    {
        MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    },
    {
        Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    },
    {
        GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    },
    {
        BSD: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    },
];

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'Github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
    },
    {
        type: 'input',
        message: 'What is your Project Title?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Provide a short description of the project BEFORE we get into the details of the what, why, and how of your project.',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'Motivation',
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'WhyBuild',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'Problem',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'Learn',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'Usage',
    },
    {        
        type: 'input',
        message: 'What is the Github username for any contributors or persons you would like to give credit to?',
        name: 'Contributors',
    },
    {        
        type: 'input',
        message: 'Are there any links you want to add that were used to support the development of this project?',
        name: 'Tutorials',
    },
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
`

# ${answers.Title}

## Description
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

## Questions
- https://github.com/${answers.Github}

If any questions, please direct them directly to me at ${answers.Email}
`;





    // fileName = `${data.Title.toLowerCase().split(' ').join('')}.md`;
    // fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>{
    //         err ? console.log(err) : console.log('Success!')
      // });
// };


// TODO: Create a function to initialize app
function init() {

    inquirer
    .prompt(questions)
    .then((answers) => {
        fileName = `${answers.Title.toLowerCase().split(' ').join('')}.md`;
          const READmeContent = writeToFile(answers);
        //   console.log(answers);
        // fs.writeFile(fileName, JSON.stringify(answers, null, '\t'), (err) =>
        fs.writeFile(fileName, READmeContent, (err) =>
            err ? console.log(err) : console.log('Check out your README file!')
            
        );  
    }); 
}

// Function call to initialize app
init();
