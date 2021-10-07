// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');



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
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','NONE'],
    },
];
let fileName = "";
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = `${data.Title.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>{
            err ? console.log(err) : console.log('Success!')
  
    });
    console.log("The extension is "+path.extname(fileName));
    
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
