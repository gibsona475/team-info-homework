const Employee = require("./Employee"); 

class Manager extends Employee{

    constructor(name, id, email,officeNumber){
        super(name,id,email); //comes from Employee 
        this.officeNumber = officeNumber; //specific to maanger 
    }
    //getName()

    getRole(){
        return 'Manager';
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager; 