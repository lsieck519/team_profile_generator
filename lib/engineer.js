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


