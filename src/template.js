const generateHTML = (newEmployee) => {


    let firstName = newEmployee[0].emName;
    let firstID = newEmployee[0].id;
    let firstEmail = newEmployee[0].email;

    let secondName = newEmployee[1].emName;
    let secondID = newEmployee[1].id;
    let secondEmail = newEmployee[1].email;

  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../src/template.css">
        <title>Document</title>
    </head>
    <body>

    <header>

    <h1>Employee Profiles</h1>

    </header>

    <section class="container">

    <div class="card">

    <h1>Employee One</h1>

    <ul>
    <li>${firstName}</li>
    <li>${firstEmail}</li>
    <li>${firstID}</li>
    </ul>

    </div>

    <div class="card">

    <h1>Employee Two</h1>

    <ul>
    <li>${secondName}</li>
    <li>${secondEmail}</li>
    <li>${secondID}</li>
    </ul>

    </div>
    </section>

    </body>
    </html>
    `
}

module.exports = generateHTML
    