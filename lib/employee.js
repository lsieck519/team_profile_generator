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


// `The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'`
