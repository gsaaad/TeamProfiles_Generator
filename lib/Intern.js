//import Employee class to extend from

const Employee = require("./Employee");

class Intern extends Employee {
  constructor() {
    super();

    this.getRole = function () {
      var role = "Intern";
      return role;
    };
    this.getRole();
  }
}

module.exports = Intern;
