// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMark = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
   
];
 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
  .prompt([
    {type: "input",
    message: "What is the title of your project?",
    name: "title",
},
    {type: "input",
    message: "What is the description of your project?",
    name: "description"
},

    {type:"input",
    message: "What is required to install your project?",
    name: "installation"
},
    {type:"input",
    message: "How can your project be used?",
    name: "usage"
},
    {type: "input",
    message: "How can users contribute to your project?",
    name: "contributing"
},
    {type: "input",
    message: "What is needed to run a test on your project?",
    name: "tests"
},
    {type: "list",
    message: "Which license does your project use?",
    choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None' ],
    name: "license"
},
    {type: "input",
    message: "What is your GitHub username?",
    name: "lincense"
}
    {type: "list",
    message: "Which license does your project use?",
    choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None' ],
    name: "lincense"
}
  ])
  .then((data) => {
    const filename = 

    fs.writeFile(filename,  (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  })