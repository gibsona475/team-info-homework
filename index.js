const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const fs = require("fs")
const cardTemplate = require("./src/page-template")
const teamMembers = []; //hold all member info 
const path = require("path");

const folderPath = path.resolve(__dirname, "dist"); 
const filePath =  path.join(folderPath, "team.html"); 

function init() {
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
            name: "managerEmail",
            message: "What is the email of your Manager?"
        }, {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the office number of your Manager?"
        },
    ]).then(answer => {
        // console.log(answer);
        //Conver into a CLass Object 
        const managerInfo = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber);

        // console.log(managerInfo);
        //Accumulating all members in an array 
        teamMembers.push(managerInfo);
        addMember(); 

    })
}

function addMember(){
     //Adding either Engineer or Interen or gennerating an hTML FILE 
     inquirer.prompt(
        {
            type: "list",
            name: "options",
            message: "What would you like to add?",
            choices: ["Engineer", "Intern", "Generate HTML"]
        }).then(choice => {
            console.log(choice)
             if (choice.options === "Engineer"){
                 //Call function asking related to engineer 
                engineerInfo();
             }else if (choice.options === "Intern"){
                InternInfo();

             }else {
                console.log("generating HTML", teamMembers); 
                // console.log("template", cardTemplate(teamMembers)); 
                //FS write file function 
                fs.writeFile(filePath, cardTemplate(teamMembers), (err,response)=>{
                    if(err) { 
                        console.log(err);
                    }else { 
                        console.log("Generated HTML Succesfully at "+ filePath);
                    }
                })
             }  
        });
}

function engineerInfo(){

    console.log("Welcome to Team Generator !! \n Answer few questions \n");
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of your Engineer?"
        }, {
            type: "input",
            name: "engineerID",
            message: "What is the id of your Engineer?"
        }, {
            type: "input",
            name: "engineerEmail",
            message: "What is the email of your Engineer?"
        }, {
            type: "input",
            name: "engineerGitHub",
            message: "What is your engineer's GitHub?"
        },
    
    
    ]).then(response => {
        // console.log(response); 

        //Convert into a CLass Object 
        const eInfo = new Engineer (response.engineerName,response.engineerID,response.engineerEmail, response.engineerGitHub) ;

        // console.log(eInfo);
        //Accumulating all members in an array 
        teamMembers.push(eInfo);

        addMember(); 
    })
}

function InternInfo(){

    console.log("Welcome to Team Generator !! \n Answer few questions \n");
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of your Intern?"
        }, {
            type: "input",
            name: "internID",
            message: "What is the id of your Intern?"
        }, {
            type: "input",
            name: "internEmail",
            message: "What is the email of your Intern?"
        }, {
            type: "input",
            name: "internSchool",
            message: "What is the name of your school?"
        },
    
    ]).then(response => {
        // console.log(response); 
        //convert into claassobject 
        const iInfo = new Intern (response.internName, response.internID, response.internEmail, response.internSchool)
        //add to an aray 
        teamMembers.push(iInfo);

        addMember(); 
    })
}

//Starting the appplication 
init();
