// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
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
        message: 'Description of project',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Table of Contents',
        name: 'TOC',
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
        type: 'checkbox',
        message: 'Which license type are you using for this file',
        name: 'License',
        choices: ['MIT','APACHE','GPL','BSD','NONE'],
    },
];


let fileName = "";
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = `${data.Title.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>{
            err ? console.log(err) : console.log('Success!')
  
    });
};

// TODO: Create a function to initialize app
function init() {
    try {
        inquirer
        .prompt(questions)
        .then((data) => {
        writeToFile(fileName,data);
        // console.log(data)
        }); 
    } catch (error) {
        console.log(err)
    }
}

// Function call to initialize app
init();
