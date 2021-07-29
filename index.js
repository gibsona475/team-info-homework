const inquirer = require("inquirer");
const Manager = require("./lib/Manager"); 

function init(){
    console.log("Welcome to Team Generator !! \n Answer few questions \n");
    inquirer.prompt([
        {
            type: "input", 
            name: "managerName", 
            message: "What is the name of your Manager?"
        }, {
            type: "input", 
            name: "managerID", 
            message: "What is the id of your Manager?"
        }, {
            type: "input", 
            name: "managerOfficeNumber", 
            message: "What is the office number of your Manager?"
        }, {
        type: "input", 
        name: "managerEmail", 
        message: "What is the email of your Manager?"
    },
]). then(answer =>{
        // console.log(answer);
        //Conver into a CLass Object 
        const managerInfo = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber ); 

        // console.log(managerInfo);
        //Adding either Engineer or Interen or gennerating an hTML FILE 
        inquirer.prompt(
            {
                type: "list", 
                name: "options", 
                message: "What would you like to add?", 
                choices: ["Engineer", "Intern", "Generate HTML"]
            }).then(choice =>{
                console.log(choice)
                // if ()
            });

    })
}

init(); 
