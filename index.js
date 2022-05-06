//node index.js runs the applications

const teamProfileGenerator = require("./lib/teamProfileGenerator");
const inquirer = require("inquirer");
const newOne = new teamProfileGenerator();
newOne.initializeQuestions().then((answers) => {
  console.log(answers);
  inquirer
    .prompt({
      type: "list",
      name: "addRole",
      message:
        "Would you like to enter some information about an Enginner, a Intern, or finish?",
      choices: ["Engineer", "Intern", "Finish Template"],
    })
    .then((addRole) => {
      console.log(addRole);
    });
});
