const Employee = require('./employee')


class Engineer extends Employee {

    constructor (id, emName, email, github) {
        super(id, emName, email);
        this.github = github
}
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'engineer'
    }
}

module.exports = Engineer;


        // `In addition to Employee's properties and methods, Engineer will also have:

        // github // GitHub username
        
        // getGithub()
        
        // getRole() // Overridden to return 'Engineer'`
    
