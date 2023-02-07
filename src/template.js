const generateHTML = (newEmployee) => {

    const startHTML = `<!DOCTYPE html>
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
    </header>`


if (newEmployee.length == 3 ) {
    let firstName = newEmployee[0].emName;
    let firstID = newEmployee[0].id;
    let firstEmail = newEmployee[0].email;

    
    let firstAdditional 
    let firstTitle 

if (newEmployee[0].github) {
    firstAdditional = newEmployee[0].github;
    firstTitle = 'Engineer';
} else if (newEmployee[0].school) {
    firstAdditional = newEmployee[0].school
    firstTitle = 'Intern';
} else {
    firstAdditional = newEmployee[0].officeNumber;
    firstTitle = 'Manager';
}

    let firstHTML = ` <ul>
    <li>${firstName}</li>
    <li>${firstTitle}</li>
    <li>${firstID}</li>
    <li>${firstEmail}</li>
    <li>${firstAdditional}</li>
    </ul> `


    let secondName = newEmployee[1].emName;
    let secondID = newEmployee[1].id;
    let secondEmail = newEmployee[1].email;

    let secondAdditional 
    let secondTitle 

if (newEmployee[1].github) {
    secondAdditional = newEmployee[1].github;
    secondTitle = 'Engineer';
} else if (newEmployee[1].school) {
    secondAdditional = newEmployee[1].school
    secondTitle = 'Intern';
} else {
    firstAdditional = newEmployee[1].officeNumber;
    secondTitle = 'Manager';
}
    
    let secondHTML = ` <ul>

    <li>${secondName}</li>
    <li>${secondTitle}</li>
    <li>${secondID}</li>
    <li>${secondEmail}</li>
    <li>${secondAdditional}</li>
    
    </ul> `

    let thirdName = newEmployee[2].emName;
    let thirdID = newEmployee[2].id;
    let thirdEmail = newEmployee[2].email;


    let thirdAdditional 
    let thirdTitle 

if (newEmployee[2].github) {
    thirdAdditional = newEmployee[2].github;
    thirdTitle = 'Engineer';
} else if (newEmployee[2].school) {
    thirdAdditional = newEmployee[2].school
    thirdTitle = 'Intern';
} else {
    thirdAdditional = newEmployee[2].officeNumber;
    thirdTitle = 'Manager';
}
    
    let thirdHTML = ` <ul>

    <li>${thirdName}</li>
    <li>${thirdTitle}</li>
    <li>${thirdID}</li>
    <li>${thirdEmail}</li>
    <li>${thirdAdditional}</li>
    
    </ul> `


    return `
    ${startHTML}

    <section class="container">

    <div class="card">

    <h1>Employee One</h1>

    ${firstHTML}
   

    </div>

    <div class="card">

    <h1>Employee Two</h1>

    ${secondHTML}
    
    </div>

    </div>

    <div class="card">

    <h1>Employee Three</h1>

    ${thirdHTML}
    
    </div>

    </section>

    </body>
    </html>
    `
} 


    else if  (newEmployee.length == 2 ) {
        let firstName = newEmployee[0].emName;
        let firstID = newEmployee[0].id;
        let firstEmail = newEmployee[0].email;

        
        let firstAdditional 
        let firstTitle 

    if (newEmployee[0].github) {
        firstAdditional = newEmployee[0].github;
        firstTitle = 'Engineer';
    } else if (newEmployee[0].school) {
        firstAdditional = newEmployee[0].school
        firstTitle = 'Intern';
    } else {
        firstAdditional = newEmployee[0].officeNumber;
        firstTitle = 'Manager';
    }

        let firstHTML = ` <ul>
        <li>${firstName}</li>
        <li>${firstTitle}</li>
        <li>${firstID}</li>
        <li>${firstEmail}</li>
        <li>${firstAdditional}</li>
        </ul> `


        let secondName = newEmployee[1].emName;
        let secondID = newEmployee[1].id;
        let secondEmail = newEmployee[1].email;

        let secondAdditional 
        let secondTitle 

    if (newEmployee[1].github) {
        secondAdditional = newEmployee[1].github;
        secondTitle = 'Engineer';
    } else if (newEmployee[1].school) {
        secondAdditional = newEmployee[1].school
        secondTitle = 'Intern';
    } else {
        firstAdditional = newEmployee[1].officeNumber;
        secondTitle = 'Manager';
    }
        
        let secondHTML = ` <ul>
    
        <li>${secondName}</li>
        <li>${secondTitle}</li>
        <li>${secondID}</li>
        <li>${secondEmail}</li>
        <li>${secondAdditional}</li>
        
        </ul> `
    
    
        return `
        ${startHTML}
    
        <section class="container">
    
        <div class="card">
    
        <h1>Employee One</h1>
    
        ${firstHTML}
       
    
        </div>

        <div class="card">
    
        <h1>Employee Two</h1>

        ${secondHTML}
        
        </div>
    
        </section>
    
        </body>
        </html>
        `
    } else if (newEmployee.length == 1 ){
    let firstName = newEmployee[0].emName;
    let firstID = newEmployee[0].id;
    let firstEmail = newEmployee[0].email;

    let firstAdditional 
    let firstTitle 

    if (newEmployee[0].github) {
        firstAdditional = newEmployee[0].github;
        firstTitle = 'Engineer';
    } else if (newEmployee[0].school) {
        firstAdditional = newEmployee[0].school
        firstTitle = 'Intern';
    } else {
        firstAdditional = newEmployee[0].officeNumber;
        firstTitle = 'Manager';
    }

   
    let firstHTML = ` 
    <ul>
    <li>${firstName}</li>
    <li>${firstTitle}</li>
    <li>${firstID}</li>
    <li>${firstEmail}</li>
    <li>${firstAdditional}</li> 
    </ul> `

    return `
    ${startHTML}

    <section class="container">

    <div class="card">

    <h1>Employee One</h1>

   ${firstHTML}
    
    </div>

    </section>

    </body>
    </html>
    `
} 
}

module.exports = generateHTML
    