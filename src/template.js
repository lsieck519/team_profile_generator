const generateHTML = (newEmployee) => {

    const startHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link rel="stylesheet" href="../src/template.css">
        <title>Team Profile Generator</title>
    </head>
    <body>

    <section class="hero is-success">
        <div class="hero-body">
    <p class="title">
        Employee Profiles
    </p>
        <p class="subtitle">
         Meet our team!
    </p>
        </div>
    </section>
    
    <div class="container">`

    const endHTML = `
    </div>
    </body>
    </html>
    `


if (newEmployee.length == 3 ) {

    //get info for first employee card 
    let firstName = newEmployee[0].emName;
    let firstID = newEmployee[0].id;
    let firstEmail = newEmployee[0].email;

    let firstAdditional 
    let firstTitle 

    if (newEmployee[0].github) {
        firstAdditional = "Github:" + newEmployee[0].github;
        firstTitle = 'Engineer';
    } else if (newEmployee[0].school) {
        firstAdditional = "School:" + newEmployee[0].school
        firstTitle = 'Intern';
    } else {
        firstAdditional = "Office Number:" + newEmployee[0].officeNumber;
        firstTitle = 'Manager';
    }

    let firstHTML = ` 

    <h1>${firstName}</h1>
        <ul>
            <li class="title">${firstTitle}</li>
            <li>${firstID}</li>
            <li>${firstEmail}</li>
            <li>${firstAdditional}</li> 
        </ul> `

//get info for second employee card 
    let secondName = newEmployee[1].emName;
    let secondID = newEmployee[1].id;
    let secondEmail = newEmployee[1].email;

    let secondAdditional 
    let secondTitle 

    if (newEmployee[1].github) {
        secondAdditional = "Github:" + newEmployee[1].github;
        secondTitle = 'Engineer';
    } else if (newEmployee[1].school) {
        secondAdditional = "School:" + newEmployee[1].school
        secondTitle = 'Intern';
    } else {
        secondAdditional = "Office Number:" + newEmployee[1].officeNumber;
        secondTitle = 'Manager';
    }
    
    let secondHTML = `
    
    <h1>${secondName}</h1>
        <ul>
        <li class="title">${secondTitle}</li>
            <li>${secondID}</li>
            <li>${secondEmail}</li>
            <li>${secondAdditional}</li> 
        </ul>`


//get info for third employee card 
    let thirdName = newEmployee[2].emName;
    let thirdID = newEmployee[2].id;
    let thirdEmail = newEmployee[2].email;

    let thirdAdditional 
    let thirdTitle 

    if (newEmployee[2].github) {
        thirdAdditional = "Github:" + newEmployee[2].github;
        thirdTitle = 'Engineer';
    } else if (newEmployee[2].school) {
        thirdAdditional = "School:" + newEmployee[2].school
        thirdTitle = 'Intern';
    } else {
        thirdAdditional = "Office Number:" + newEmployee[2].officeNumber;
        thirdTitle = 'Manager';
    }
    
    let thirdHTML = `
    
    <h1>${thirdName}</h1>
        <ul>
        <li class="title">${thirdTitle}</li>
            <li>${thirdID}</li>
            <li>${thirdEmail}</li>
            <li>${thirdAdditional}</li> 
        </ul>`


    return `
    ${startHTML}

    <div class="card">
        <div class="card-content">
            <div class="content">

        ${firstHTML}

            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-content">
            <div class="content">

        ${secondHTML}

            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-content">
            <div class="content">

        ${thirdHTML}

            </div>
        </div>
    </div>

        ${endHTML}
    `
} 


    else if  (newEmployee.length == 2 ) {
    let firstName = newEmployee[0].emName;
    let firstID = newEmployee[0].id;
    let firstEmail = newEmployee[0].email;

    let firstAdditional 
    let firstTitle 

    if (newEmployee[0].github) {
        firstAdditional = "Github:" + newEmployee[0].github;
        firstTitle = 'Engineer';
    } else if (newEmployee[0].school) {
        firstAdditional = "School:" + newEmployee[0].school
        firstTitle = 'Intern';
    } else {
        firstAdditional = "Office Number:" + newEmployee[0].officeNumber;
        firstTitle = 'Manager';
    }

    let firstHTML = ` 

    <h1>${firstName}</h1>
        <ul>
        <li class="title">${firstTitle}</li>
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
        secondAdditional = "Github:" + newEmployee[1].github;
        secondTitle = 'Engineer';
    } else if (newEmployee[1].school) {
        secondAdditional = "School:" + newEmployee[1].school
        secondTitle = 'Intern';
    } else {
        secondAdditional = "Office Number:" + newEmployee[1].officeNumber;
        secondTitle = 'Manager';
    }
        
    let secondHTML = `
    
    <h1>${secondName}</h1>
        <ul>
        <li class="title">${secondTitle}</li>
            <li>${secondID}</li>
            <li>${secondEmail}</li>
            <li>${secondAdditional}</li> 
        </ul>`

    
        return `
        ${startHTML}

        <div class="card">
            <div class="card-content">
                <div class="content">
    
            ${firstHTML}
    
                </div>
            </div>
        </div>
    
        <div class="card">
            <div class="card-content">
                <div class="content">
    
            ${secondHTML}
    
                </div>
            </div>
        </div>
    
        ${endHTML}
        `
    } 
    
    
    else if (newEmployee.length == 1 ){
        let firstName = newEmployee[0].emName;
        let firstID = newEmployee[0].id;
        let firstEmail = newEmployee[0].email;
    
        let firstAdditional 
        let firstTitle 
    
        if (newEmployee[0].github) {
            firstAdditional = "Github:" + newEmployee[0].github;
            firstTitle = 'Engineer';
        } else if (newEmployee[0].school) {
            firstAdditional = "School:" + newEmployee[0].school
            firstTitle = 'Intern';
        } else {
            firstAdditional = "Office Number:" + newEmployee[0].officeNumber;
            firstTitle = 'Manager';
        }
    
        let firstHTML = ` 
    
        <h1>${firstName}</h1>
            <ul>
            <li class="title">${firstTitle}</li>
                <li>${firstID}</li>
                <li>${firstEmail}</li>
                <li>${firstAdditional}</li> 
            </ul> `
    


    return `

    ${startHTML}

    <div class="card">
        <div class="card-content">
            <div class="content">

    ${firstHTML}
    
             </div>
        </div>
    </div>

    ${endHTML}

    `
} 
}

module.exports = generateHTML
    