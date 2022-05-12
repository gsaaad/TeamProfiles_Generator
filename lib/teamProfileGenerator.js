const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const fs = require("fs");
const path = require("path");
const generateHTML = require("./generateHTML");

var allEmployees = [];
var indexHTML = "index.html";

class teamProfileGenerator {
  constructor() {}
  managerQuestions() {
    const questions = [
      {
        type: "input",
        name: "teamName",
        message: "Let's start! Whats your Team's name:",
        validate: (validInput) => {
          if (validInput) {
            return true;
          }
          console.log("Please enter a Team Name");
          return false;
        },
      },
      {
        type: "input",
        name: "managerName",
        message: "Enter Manager Name: ",
        validate: (validInput) => {
          if (validInput) {
            return true;
          }
          console.log("Please enter a  Manager Name: ");
          return false;
        },
      },
      {
        type: "input",
        name: "managerID",
        message: "Enter Manager ID: ",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Enter your Manager Email: ",
      },
      {
        type: "input",
        name: "managerOfficeNum",
        message: "Enter Manager Office Number: ",
      },
      {
        type: "input",
        name: "managerGithub",
        message: "Enter Manager Github: ",
      },
    ];
    let managerAnswers = [];
    inquirer.prompt(questions).then((answers) => {
      managerAnswers.push(answers);
      var manager = new Manager(
        `${answers.managerName}`,
        `${answers.managerID}`,
        `${answers.managerEmail}`,
        `${answers.managerOfficeNum}`,
        `${answers.managerGithub}`
      );
      //configured manager and push to All Employees array
      allEmployees.push(manager);

      this.menuQuestions();
    });
  }

  // % selec engineer, prompt enginneer's name, id, email, github username + back to menu
  engineerQuestions() {
    const engQuestions = [
      {
        type: "input ",
        name: "engName",
        message: "Enter Engineer's name",
      },
      {
        type: "input",
        name: "engId",
        message: "Enter Engineer's ID: ",
      },
      {
        type: "input",
        name: "engEmail",
        message: "Enter Engineer's Email: ",
      },
      {
        type: "input",
        name: "engGithhub",
        message: " Enter Engineer's Github",
      },
    ];
    let engAnswers = [];
    inquirer.prompt(engQuestions).then((answers) => {
      engAnswers.push(answers);
      var engineer = new Engineer(
        `${answers.engName}`,
        `${answers.engId}`,
        `${answers.engEmail}`,
        `${answers.engGithhub}`
      );

      allEmployees.push(engineer);

      this.menuQuestions();
    });
  }
  internQuestions() {
    const internQuestions = [
      {
        type: "input ",
        name: "internName",
        message: "Enter Intern's name",
        validate: (validInput) => {
          if (validInput) {
            return true;
          }
          console.log("Please enter Intern's Name: ");
          return false;
        },
      },
      {
        type: "input",
        name: "internId",
        message: "Enter Intern's ID: ",
        validate: (validInput) => {
          if (validInput) {
            return true;
          }
          console.log("Please enter Intern's ID: ");
          return false;
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter Intern's Email: ",
        validate: (validInput) => {
          if (validInput) {
            return true;
          }
          console.log("Please enter Intern's Email: ");
          return false;
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "Enter Inter's School: ",
        validate: (validInput) => {
          if (validInput) {
            return true;
          }
          console.log("Please enter Intern's School: ");
          return false;
        },
      },
      {
        type: "input",
        name: "internGithhub",
        message: " Enter Intern's Github",
        validate: (validInput) => {
          if (validInput) {
            return true;
          }
          console.log("Please enter Intern's Github!: ");
          return false;
        },
      },
    ];
    let internAnswers = [];
    return inquirer.prompt(internQuestions).then((answers) => {
      internAnswers.push(answers);
      var intern = new Intern(
        `${answers.internName}`,
        `${answers.internId}`,
        `${answers.internEmail}`,
        `${answers.internGithhub}`,
        `${answers.internSchool}`
      );
      // console.log(intern);
      // console.log(allEmployees);
      allEmployees.push(intern);

      this.menuQuestions();
    });
  }
  menuQuestions() {
    const menuQuestions = {
      type: "list",
      name: "addRole",
      message:
        "Would you like to enter some information about an Enginner, a Intern, or finish?",
      choices: ["Engineer", "Intern", "Finish Template"],
    };
    let menuAnswers = [];
    inquirer.prompt(menuQuestions).then((answers) => {
      let option = answers.addRole;

      if (option === "Engineer") {
        console.log("RECIEVED ENGINEER OPTION");
        this.engineerQuestions();
      }
      if (option === "Intern") {
        console.log("RECIEVED INTERN");
        this.internQuestions();
      }
      if (option === "Finish Template") {
        //generate HTML
        generateHTML(allEmployees);
      }
    });
  }
}

module.exports = teamProfileGenerator;
