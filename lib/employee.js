const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        this.getName = () => {
            if (this.name === true){
                console.log(this.name);
            }
        }

        this.getId = () => {
            if (this.id === true){
                console.log(this.id);
            }
        }

        this.getEmail = () => {
            if (this.email === true){
                console.log(this.email);
            }
        }

        this.getRole = () => {
            if (this.role === true){
                console.log(this.role);
            }
        }


`The first class is an Employee parent class with the following properties and methods:

name

id

email

getName()

getId()

getEmail()

getRole() // Returns 'Employee'`

    }
}
