// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require('./utils/generateMarkdown');

//  Create an array of questions for user input
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
    message: 'How can the app be installed? Provide step-by-step installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is the app used? Provide instructions and examples for use:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can other developers contribute to your project? Provide guidelines for contributions:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can the app be tested? Provide any testing instructions:',
  },
  {
    type: 'input',
    name: 'reportIssues',
    message: 'How should users report issues? Provide instructions or guidelines for issue reporting:',
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
// write the README file. It takes a filename and data as parameters. if you ever wanted another new file you could use writeToFile('OTHER_NEW_DOCUMENT.md', data) without having to write a new function
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md!")
  );
}

// Create a function to initialize app
// Uses Inquirer to prompt the user with questions and then use the responses to generate the README content
function init() {
  // Use inquirer to prompt the user with questions
  inquirer
    .prompt(questions)
    // Once all questions are answered, use the answers to generate markdown
    .then((answers) => writeToFile("README.md", generateMarkdown(answers)))
    // If an error occurs during the inquirer process log the error
    .catch((error) => console.error(error));
}

// Function call to initialize app
init();
