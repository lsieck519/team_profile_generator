const inquirer = require("inquirer")
const { writeFile } = require('fs').promises;


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
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
    {
      type: 'input',
      name: 'github',
      message: 'Employee GitHub Username:',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Employee Location:',
    },
  ]);
};

const generateHTML = ({ name, title, eid, email, github, location }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>My Team</title>
</head>
<body>
<div class="container">
  <h1>${name}</h1>
  <h2>${title}<h2>
  <ul>
    <li>${eid}</li>
    <li>${email}</li>
    <li>${github}</li>
    <li>${location}</li>
 </div> 
</body>
</html>`;

const init = () => {
  promptUser()
    .then((answers) => writeFile('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
