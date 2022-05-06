const Employee = require("./Employee");

class Manager extends Employee {
  constructor(
    name = "George MANAGER",
    id = 77,
    email = "saad.george@MANAGER.com",
    officeNumber = 3
  ) {
    super();
    this.name = name;
    this.id = id;
    this.officeNumber = officeNumber;
    this.email = email;
    console.log(officeNumber);

    this.getRole = function () {
      return "Manager";
    };
  }
  getOfficeNum() {
    console.log(this.officeNumber);
    return this.officeNumber;
  }
}
module.exports = Manager;
