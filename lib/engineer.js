class Engineer {
    constructor (github) {
        this.github = github;
    

    this.getGithub = () => {
        if (this.github === true) {
            console.log(this.github);
        }
    }
}
}
  
  module.exports = Engineer;
  


 

        `In addition to Employee's properties and methods, Engineer will also have:

        github // GitHub username
        
        getGithub()
        
        getRole() // Overridden to return 'Engineer'`
    
