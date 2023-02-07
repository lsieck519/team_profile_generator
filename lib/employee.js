class Employee {
    constructor (id, emName, email) {
        this.id = id;
        this.emName = emName;
        this.email = email;
    }

    getName() {
        return this.emName;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "employee"
    }

    }

       
    module.exports = Employee;


