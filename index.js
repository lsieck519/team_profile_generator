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
      choices: ['Manager','Engineer','Intern'],
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
      choices: ['Add More', 'Complete Creation']
    }

  ])

  if (data.title === "Manager") {
    const newManager = new Manager (
      data.eid,
      data.emName,
      data.email,
      data.officeNumber,
    )
    newEmployee.push(newManager)
    console.log(newManager);
  } else if (data.title === "Engineer") {
    const newEngineer = new Engineer (
      data.eid,
      data.emName,
      data.email,
      data.github,
    )
    newEmployee.push(newEngineer)
    console.log(newEngineer);
  } else {
    const newIntern = new Intern (
      data.eid,
      data.emName,
      data.email,
      data.school,
    )
    newEmployee.push(newIntern)
    console.log(newIntern);
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



//commenting out for now bc i dont think im going to include an "other" job title option but still undecided 
// const Employee = require("./lib/employee")

 // {
    //   type: 'input',
    //   name: 'other',
    //   message: 'Job Title:',
    //   when: (newEmployee) => newEmployee.title === 'Other',
    // },


// else {

//   //might remove the 'other' option
//   const newOther = new Employee (
//     data.eid,
//     data.emName,
//     data.email,
//     data.other,
//   )
//   newEmployee.push(newOther)
//   console.log(newEmployee)
// }