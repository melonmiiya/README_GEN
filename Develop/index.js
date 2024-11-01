import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';


const questions = [
    {
      type: 'input',
      message: 'What is the title of this project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What was your motivation?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'Why did you build this project?',
      name: 'build',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'problem',
      },
      {
        type: 'input',
        message: 'What did you learn?',
        name: 'learn',
      },
      {
        type: 'input',
        message: 'How can one install this app?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'How can one test this app??',
        name: 'test',
      },
      {
        type: 'list',
        message: 'What license did you use?',
        choices: ['Unlicense', 'MIT'],
      },
      {
        type: 'input',
        message: 'How can someone use this app?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What is your Github?',
        name: 'Github',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Who also contributed to this project?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((responses => {
    console.log("Making README.md file");
    writeToFile("./README.md", generateMarkdown({ ...responses}));
  }));
}
init();
