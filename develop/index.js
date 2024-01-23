// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can the app be installed? Please provide step-by-step installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is the app used? Please provide instructions and examples for use:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can other developers contribute to your project? Please provide guidelines for contributions:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can the app be tested? Please provide any testing instructions:',
  },
  {
    type: 'input',
    name: 'reportIssues',
    message: 'How should users report issues? Please provide instructions or guidelines for issue reporting:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

//  Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md!")
  );
}

// Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile("README.md", generateMarkdown(answers)))
    .catch((error) => console.error(error));
}

// Function call to initialize app
init();
