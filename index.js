const inquirer = require("inquirer")
const fs = require('fs')
const generateHTML = require("./src/template.js")

const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")
const Employee = require("./lib/employee")

let newEmployee =[];

const promptUser = async () => {
  const data = await inquirer
  
  .prompt([
   
    {
      type: 'input',
      name: 'emName',
      message: 'Full Name: ',
    },
    {
      type: 'input',
      name: 'eid',
      message: '4-digit Employee ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email Address:',
    },
    {
      type: 'list',
      name: 'title',
      message: 'Job Title:',
      choices: ['Manager','Engineer','Intern', 'Other'],
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
      type: 'input',
      name: 'other',
      message: 'Job Title:',
      when: (newEmployee) => newEmployee.title === 'Other',
    },

    {
      type: 'list',
      name: 'next',
      message: 'Select one',
      choices: ['Add More', 'Complete Creation']
    }

  ])

  if (data.title === "Manager") {
    const newManager = new Manager (
      data.emName,
      data.eid,
      data.email,
      data.title,
      data.officeNumber,
    )
    newEmployee.push(newManager)
    console.log(newManager);
  } else if (data.title === "Engineer") {
    const newEngineer = new Engineer (
      data.emName,
      data.eid,
      data.email,
      data.title,
      data.github,
    )
    newEmployee.push(newEngineer)
    console.log(newEngineer);
  } else if (data.title === "Intern"){
    const newIntern = new Intern (
      data.emName,
      data.eid,
      data.email,
      data.title,
      data.school,
    )
    newEmployee.push(newIntern)
    console.log(newIntern);
  } else {

    //might remove the 'other' option
    const newOther = new Employee (
      data.emName,
      data.eid,
      data.email,
      data.other,
    )
    newEmployee.push(newOther)
    console.log(newEmployee)
  }


  if (data.next === "Add More"){
    return promptUser()
  } else {
    return createProfile()
  }
};


promptUser()


const createProfile = () => {
  fs.writeFileSync('./dist/index.html', generateHTML(newEmployee));
}




