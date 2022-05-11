//Employee must have these properties and methods
//name, id, email
// getName(), getID(), getEmail() , getRole()

class Employee {
  constructor(name, id, email, officeNumber, gitHub) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    this.gitHub = gitHub;
  }
  //! you can switch these console.logs to returns when you test
  getName() {
    console.log(this.name, "This is, this.name");
    return this.name;
  }
  getId() {
    console.log(this.id, "This is, this.ID");
    return this.id;
  }
  getEmail() {
    console.log(this.email, "This is, this.email");
    return this.email;
  }
  getGithub() {
    console.log(this.gitHub, "This is, This.gitHub");
  }
}

module.exports = Employee;
