const generateHTML = ({ emName, title, eid, email, github, school, officeNumber }) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <div class="container">
  <h1>${emName}</h1>
  <h2>${title}<h2>
  <ul>
    <li>${eid}</li>
    <li>${email}</li>
    <li>${github}</li>
    <li>${school}</li>
    <li>${officeNumber}</li>
  </ul>
 </div> 

 </body>
 </html>
    `
}

module.exports = generateHTML
    