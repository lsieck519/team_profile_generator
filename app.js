const inquirer = require("inquirer")
const fs = require('fs')
const generateHTML = require("./src/template.js")

const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")


let newEmployee =[];

const promptUser = async () => {
  const data = await inquirer
  
  .prompt([
    {
      type: 'list',
      name: 'title',
      message: 'Job Title:',
      choices: ['Manager','Engineer','Intern'],
    },
    {
      type: 'input',
      name: 'emName',
      message: 'Employee Name: ',
    },
    {
      type: 'input',
      name: 'id',
      message: '4-digit Employee ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email Address:',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Office Number:',
      when: (newEmployee) => newEmployee.title === 'Manager',
    },

    {
      type: 'input',
      name: 'github',
      message: 'GitHub Username:',
      when: (newEmployee) => newEmployee.title === 'Engineer',
    },

    {
      type: 'input',
      name: 'school',
      message: 'School:',
      when: (newEmployee) => newEmployee.title === 'Intern',
    },

   
    {
      type: 'list',
      name: 'next',
      message: 'Select one',
      choices: ['Create Team Page', 'Add More' ]
    }

  ])

  if (data.title === "Manager") {
    const newManager = new Manager (
      data.id,
      data.emName,
      data.email,
      data.officeNumber,
    )
    newEmployee.push(newManager)
    // console.log(newManager);
  } else if (data.title === "Engineer") {
    const newEngineer = new Engineer (
      data.id,
      data.emName,
      data.email,
      data.github,
    )
    newEmployee.push(newEngineer)
    // console.log(newEngineer);
  } else {
    const newIntern = new Intern (
      data.id,
      data.emName,
      data.email,
      data.school,
    )
    newEmployee.push(newIntern)
    // console.log(newIntern);
  } 


  if (data.next === "Add More"){
    promptUser()
  } else {
    createProfile()
  }
};


promptUser()




const createProfile = () => {
  fs.writeFileSync('./dist/index.html', generateHTML(newEmployee));
  console.log(newEmployee);
}


