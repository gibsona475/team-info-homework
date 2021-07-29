const Employee = require("./Employee"); 

class Engineer extends Employee{

    constructor(name, id, email,github){
        super(name,id,email); //comes from Employee 
        this.github = github; //specific to engineer 
    }
    //getName()

    getRole(){
        return 'Engineer';
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer; 