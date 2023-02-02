class Intern {
    constructor (school) {
        this.school = school;
    
    this.getSchool = () => {
        if (this.school === true) {
            console.log(this.school);
        }
    
    }

`In addition to Employee's properties and methods, Intern will also have:

school

getSchool()

getRole() // Overridden to return 'Intern'`
    }
}

module.exports = Intern;