const Employee = require("./Employee"); 

class Intern extends Employee{

    constructor(name, id, email, school){
        super(name,id,email); //comes from Employee 
        this.school = school; //specific to engineer 
    }
    //getName()

    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern; 