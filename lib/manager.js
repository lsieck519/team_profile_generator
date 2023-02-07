const Employee = require('./employee')


class Manager extends Employee {
    constructor (id, emName, email, officeNumber) {
        super(id, emName, email)
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "manager"
    }
}

module.exports = Manager;

