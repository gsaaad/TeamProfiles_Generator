const inquirer = require("inquirer");

class teamProfileGenerator {
  constructor() {}
  initializeQuestions() {
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
    ];
    return inquirer.prompt(questions);
  }
}

module.exports = teamProfileGenerator;
