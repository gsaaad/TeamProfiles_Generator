const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    this.gitHub = gitHub;
    this.getRole = function () {
      return "Engineer";
    };
  }

  getOfficeNum() {
    console.log(this.officeNumber);
  }
}

module.exports = Engineer;
