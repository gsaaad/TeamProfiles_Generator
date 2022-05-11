//node index.js runs the applications

const teamProfileGenerator = require("./lib/teamProfileGenerator");

var EmployeesArray = [];

const newOne = new teamProfileGenerator();

// newOne.initializeQuestions().then((answers) => {
//   console.log(answers);
//   EmployeesArray.push(answers);

//   newOne.menuQuestions().then((addRole) => {
//     let roleAnswer = addRole.addRole;

//     if (roleAnswer === "Engineer") {
//       newOne.engineerQuestions().then((engAnswers) => {
//         console.log(engAnswers);
//         newOne.menuQuestions();
//       });
//     }

//     if (roleAnswer === "Intern") {
//       newOne.internQuestions().then((internAnswers) => {
//         console.log(internAnswers);
//         newOne.menuQuestions();
//       });
//     } else {
//       return;
//     }
//   });
newOne.managerQuestions();

// let initialAnswers = answers;
// console.log(initialAnswers);
// let engineerAnswers = engAnswers;
// console.log(engineerAnswers);
// let internAnswers = internAnswers;
// console.log(internAnswers);
// });
