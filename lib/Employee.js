//Employee must have these properties and methods
//name, id, email
// getName(), getID(), getEmail() , getRole()

class Employee {
  constructor(
    name = "George",
    id = 222,
    email = "saad.george@live.com",
    role = "Employee"
  ) {
    this.name = name;
    this.role = role;
    this.id = id;
    this.email = email;
  }
  //! you can switch these console.logs to returns when you test
  getName() {
    console.log(this.name, "This is, this.name");
    return this.name;
  }
  getEmail() {
    console.log(this.email, "This is, this.email");
    return this.email;
  }
  getId() {
    console.log(this.id, "This is, this.ID");
    return this.id;
  }
  getRole() {
    console.log(this.role, "THIS IS ROLESSS");
    return this.role;
  }
}

// class Manager extends Employee {
//     constructor(officeNumber = ''){
//         this.officeNumber = officeNumber
//     getRole() = function () {
//         console.log("Manager");
//     }}
// }

// class Engineer extends Employee {
//     constructor(gitUsername = '') {
//         this.gitUsername = gitUsername

//         getGithub() = function (){
//             console.log(this.gitUsername);

//             getRole = function () {
//                 console.log("Engineer");
//             }
//         }
//     }
// }

module.exports = Employee;
