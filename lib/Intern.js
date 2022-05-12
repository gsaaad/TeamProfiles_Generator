//import Employee class to extend from

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school, gitHub) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.gitHub = gitHub;

    this.getRole = function () {
      return "Intern";
    };
  }
}

module.exports = Intern;
