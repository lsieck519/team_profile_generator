const inquirer = require("inquirer")
const { writeFile } = require('fs').promises;
const generateHTML = require("./src/template.js")


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'emName',
      message: 'Employee Full Name: ',
    },
    {
      type: 'input',
      name: 'title',
      message: 'Employee Job Title:',
    },
    {
      type: 'input',
      name: 'eid',
      message: '4-digit Employee ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Employee Email Address:',
    },
    
    //need to add logic around role selection 

    {
      type: 'input',
      name: 'github',
      message: 'Engineer GitHub Username:',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Manager office number:',
    },

    {
      type: 'input',
      name: 'school',
      message: 'Intern school:',
    },

  ]);
};

const init = () => {
  promptUser()
    .then((newEmployee) => writeFile('./dist/index.html', generateHTML(newEmployee)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
