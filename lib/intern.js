const Employee = require('./employee')

class Intern extends Employee {
    constructor (id, emName, email, school) {
        super(id, emName, email);
        this.school = school
    }

    getRole(){
        return "intern"
    }

    getSchool(){
        return this.school
    }
}

module.exports = Intern;
