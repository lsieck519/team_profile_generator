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

    <section class="hero">
        <div class="hero-body">
    <p class="title">
        Meet the Team
    </p>
        </div>
    </section>
    
    <div class="container">`

    const endHTML = `
    </div>
    </body>
    </html>
    `


if (newEmployee.length == 5 ) {

    //get info for first employee card 
    let firstName = newEmployee[0].emName;
    let firstID = "ID: " + newEmployee[0].id;
    let firstEmail = `Email: <a href = "mailto:${newEmployee[0].email}"> ${newEmployee[0].email} </a>`;

    let firstAdditional 
    let firstTitle 

    if (newEmployee[0].github) {
        firstAdditional = `Github: <a href = "https://github.com/${newEmployee[0].github}" target="_blank">${newEmployee[0].github}</a>`;
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
            <li class="title2">${firstTitle}</li>
            <li>${firstID}</li>
            <li>${firstEmail}</li>
            <li>${firstAdditional}</li> 
        </ul> `

//get info for second employee card 
    let secondName = newEmployee[1].emName;
    let secondID = "ID: " + newEmployee[1].id;
    let secondEmail = `Email: <a href = "mailto:${newEmployee[1].email}"> ${newEmployee[1].email} </a>`;

    let secondAdditional 
    let secondTitle 

    if (newEmployee[1].github) {
        secondAdditional = `Github: <a href = "https://github.com/${newEmployee[1].github}" target="_blank">${newEmployee[1].github}</a>`;
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
        <li class="title2">${secondTitle}</li>
            <li>${secondID}</li>
            <li>${secondEmail}</li>
            <li>${secondAdditional}</li> 
        </ul>`


//get info for third employee card 
    let thirdName = newEmployee[2].emName;
    let thirdID = "ID: " + newEmployee[2].id;
    let thirdEmail = `Email: <a href = "mailto:${newEmployee[2].email}"> ${newEmployee[2].email} </a>`;

    let thirdAdditional 
    let thirdTitle 

    if (newEmployee[2].github) {
        thirdAdditional = `Github: <a href = "https://github.com/${newEmployee[2].github}" target="_blank">${newEmployee[2].github}</a>`;
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
        <li class="title2">${thirdTitle}</li>
            <li>${thirdID}</li>
            <li>${thirdEmail}</li>
            <li>${thirdAdditional}</li> 
        </ul>`


    //get info for fourth employee card 
    let fourthName = newEmployee[3].emName;
    let fourthID = "ID: " + newEmployee[3].id;
    let fourthEmail = `Email: <a href = "mailto:${newEmployee[3].email}"> ${newEmployee[3].email} </a>`;

    let fourthAdditional 
    let fourthTitle 

    if (newEmployee[3].github) {
        fourthAdditional = `Github: <a href = "https://github.com/${newEmployee[3].github}" target="_blank">${newEmployee[3].github}</a>`;
        fourthTitle = 'Engineer';
    } else if (newEmployee[3].school) {
        fourthAdditional = "School:" + newEmployee[3].school
        fourthTitle = 'Intern';
    } else {
        fourthAdditional = "Office Number:" + newEmployee[3].officeNumber;
        fourthTitle = 'Manager';
    }
    
    let fourthHTML = `
    
    <h1>${fourthName}</h1>
        <ul>
        <li class="title2">${fourthTitle}</li>
            <li>${fourthID}</li>
            <li>${fourthEmail}</li>
            <li>${fourthAdditional}</li> 
        </ul>`


    //get info for fifth employee card 
    let fifthName = newEmployee[4].emName;
    let fifthID = "ID: " + newEmployee[4].id;
    let fifthEmail = `Email: <a href = "mailto:${newEmployee[4].email}"> ${newEmployee[4].email} </a>`;

    let fifthAdditional 
    let fifthTitle 

    if (newEmployee[4].github) {
        fifthAdditional = `Github: <a href = "https://github.com/${newEmployee[4].github}" target="_blank">${newEmployee[4].github}</a>`;
        fifthTitle = 'Engineer';
    } else if (newEmployee[4].school) {
        fifthAdditional = "School:" + newEmployee[4].school
        fifthTitle = 'Intern';
    } else {
        fifthAdditional = "Office Number:" + newEmployee[4].officeNumber;
        fifthTitle = 'Manager';
    }
    
    let fifthHTML = `
    
    <h1>${fifthName}</h1>
        <ul>
        <li class="title2">${fifthTitle}</li>
            <li>${fifthID}</li>
            <li>${fifthEmail}</li>
            <li>${fifthAdditional}</li> 
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

    <div class="card">
        <div class="card-content">
            <div class="content">

        ${fourthHTML}

            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-content">
            <div class="content">

        ${fifthHTML}

            </div>
        </div>
    </div>

        ${endHTML}
    `
} 
 else if (newEmployee.length == 4 ) {

    //get info for first employee card 
    let firstName = newEmployee[0].emName;
    let firstID = "ID: " + newEmployee[0].id;
    let firstEmail = `Email: <a href = "mailto:${newEmployee[0].email}"> ${newEmployee[0].email} </a>`;

    let firstAdditional 
    let firstTitle 

    if (newEmployee[0].github) {
        firstAdditional = `Github: <a href = "https://github.com/${newEmployee[0].github}" target="_blank">${newEmployee[0].github}</a>`;
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
            <li class="title2">${firstTitle}</li>
            <li>${firstID}</li>
            <li>${firstEmail}</li>
            <li>${firstAdditional}</li> 
        </ul> `

//get info for second employee card 
    let secondName = newEmployee[1].emName;
    let secondID = "ID: " + newEmployee[1].id;
    let secondEmail = `Email: <a href = "mailto:${newEmployee[1].email}"> ${newEmployee[1].email} </a>`;

    let secondAdditional 
    let secondTitle 

    if (newEmployee[1].github) {
        secondAdditional = `Github: <a href = "https://github.com/${newEmployee[1].github}" target="_blank">${newEmployee[1].github}</a>`;
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
        <li class="title2">${secondTitle}</li>
            <li>${secondID}</li>
            <li>${secondEmail}</li>
            <li>${secondAdditional}</li> 
        </ul>`


//get info for third employee card 
    let thirdName = newEmployee[2].emName;
    let thirdID = "ID: " + newEmployee[2].id;
    let thirdEmail = `Email: <a href = "mailto:${newEmployee[2].email}"> ${newEmployee[2].email} </a>`;

    let thirdAdditional 
    let thirdTitle 

    if (newEmployee[2].github) {
        thirdAdditional = `Github: <a href = "https://github.com/${newEmployee[2].github}" target="_blank">${newEmployee[2].github}</a>`;
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
        <li class="title2">${thirdTitle}</li>
            <li>${thirdID}</li>
            <li>${thirdEmail}</li>
            <li>${thirdAdditional}</li> 
        </ul>`


    //get info for fourth employee card 
    let fourthName = newEmployee[3].emName;
    let fourthID = "ID: " + newEmployee[3].id;
    let fourthEmail = `Email: <a href = "mailto:${newEmployee[3].email}"> ${newEmployee[3].email} </a>`;

    let fourthAdditional 
    let fourthTitle 

    if (newEmployee[3].github) {
        fourthAdditional = `Github: <a href = "https://github.com/${newEmployee[3].github}" target="_blank">${newEmployee[3].github}</a>`;
        fourthTitle = 'Engineer';
    } else if (newEmployee[3].school) {
        fourthAdditional = "School:" + newEmployee[3].school
        fourthTitle = 'Intern';
    } else {
        fourthAdditional = "Office Number:" + newEmployee[3].officeNumber;
        fourthTitle = 'Manager';
    }
    
    let fourthHTML = `
    
    <h1>${fourthName}</h1>
        <ul>
        <li class="title2">${fourthTitle}</li>
            <li>${fourthID}</li>
            <li>${fourthEmail}</li>
            <li>${fourthAdditional}</li> 
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

    <div class="card">
        <div class="card-content">
            <div class="content">

        ${fourthHTML}

            </div>
        </div>
    </div>

        ${endHTML}
    `
} 

else if (newEmployee.length == 3 ) {

    //get info for first employee card 
    let firstName = newEmployee[0].emName;
    let firstID = "ID: " + newEmployee[0].id;
    let firstEmail = `Email: <a href = "mailto:${newEmployee[0].email}"> ${newEmployee[0].email} </a>`;

    let firstAdditional 
    let firstTitle 

    if (newEmployee[0].github) {
        firstAdditional = `Github: <a href = "https://github.com/${newEmployee[0].github}" target="_blank">${newEmployee[0].github}</a>`;
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
            <li class="title2">${firstTitle}</li>
            <li>${firstID}</li>
            <li>${firstEmail}</li>
            <li>${firstAdditional}</li> 
        </ul> `

//get info for second employee card 
    let secondName = newEmployee[1].emName;
    let secondID = "ID: " + newEmployee[1].id;
    let secondEmail = `Email: <a href = "mailto:${newEmployee[1].email}"> ${newEmployee[1].email} </a>`;

    let secondAdditional 
    let secondTitle 

    if (newEmployee[1].github) {
        secondAdditional = `Github: <a href = "https://github.com/${newEmployee[1].github}" target="_blank">${newEmployee[1].github}</a>`;
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
        <li class="title2">${secondTitle}</li>
            <li>${secondID}</li>
            <li>${secondEmail}</li>
            <li>${secondAdditional}</li> 
        </ul>`


//get info for third employee card 
    let thirdName = newEmployee[2].emName;
    let thirdID = "ID: " + newEmployee[2].id;
    let thirdEmail = `Email: <a href = "mailto:${newEmployee[2].email}"> ${newEmployee[2].email} </a>`;

    let thirdAdditional 
    let thirdTitle 

    if (newEmployee[2].github) {
        thirdAdditional = `Github: <a href = "https://github.com/${newEmployee[2].github}" target="_blank">${newEmployee[2].github}</a>`;
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
        <li class="title2">${thirdTitle}</li>
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
    let firstID = "ID: " + newEmployee[0].id;
    let firstEmail = `Email: <a href = "mailto:${newEmployee[0].email}"> ${newEmployee[0].email} </a>`;

    let firstAdditional 
    let firstTitle 

    if (newEmployee[0].github) {
        firstAdditional = `Github: <a href = "https://github.com/${newEmployee[0].github}" target="_blank">${newEmployee[0].github}</a>`;
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
        <li class="title2">${firstTitle}</li>
            <li>${firstID}</li>
            <li>${firstEmail}</li>
            <li>${firstAdditional}</li> 
        </ul> `


    let secondName = newEmployee[1].emName;
    let secondID = "ID: " + newEmployee[1].id;
    let secondEmail = `Email: <a href = "mailto:${newEmployee[1].email}"> ${newEmployee[1].email} </a>`;

    let secondAdditional 
    let secondTitle 

    if (newEmployee[1].github) {
        secondAdditional = `Github: <a href = "https://github.com/${newEmployee[1].github}" target="_blank">${newEmployee[1].github}</a>`;
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
        <li class="title2">${secondTitle}</li>
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
        let firstID = "ID: " + newEmployee[0].id;
        let firstEmail = `Email: <a href = "mailto:${newEmployee[0].email}"> ${newEmployee[0].email} </a>`;
    
        let firstAdditional 
        let firstTitle 
    
        if (newEmployee[0].github) {
            firstAdditional = `Github: <a href = "https://github.com/${newEmployee[0].github}" target="_blank">${newEmployee[0].github}</a>`;
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
            <li class="title2">${firstTitle}</li>
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
    