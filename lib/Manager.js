const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber, gitHub) {
    super();
    this.name = name;
    this.id = id;
    this.officeNumber = officeNumber;
    this.email = email;
    this.gitHub = gitHub;

    this.getRole = function () {
      return "Manager role!";
    };
  }
  getOfficeNum = function () {
    return this.officeNumber;
  };
}

module.exports = Manager;
