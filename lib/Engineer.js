const Employee = require("./Employee");
// pulls from employee
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // grabs values from employee
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  // returns input for Github
  getgithub() {
    return this.github;
  }
}

// exports class
module.exports = Engineer;
