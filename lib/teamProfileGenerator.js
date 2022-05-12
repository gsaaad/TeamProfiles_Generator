const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Manager = require("./Manager");

var allEmployees = [];

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

      return manager;
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
      console.log(answers);
      menuAnswers.push(answers);
    });
    return menuAnswers;
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
      var engineer = new Engineer(clg);

      allEmployees.push(engineer);
      console.log(allEmployees);
    });
  }
  internQuestions() {
    const internQuestions = [
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
    return inquirer.prompt(internQuestions);
  }
}

module.exports = teamProfileGenerator;
