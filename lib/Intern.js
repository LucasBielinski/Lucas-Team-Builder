const Employee = require("./Employee");
// pulls from Employee
class Intern extends Employee {
  constructor(name, id, email, school) {
    // pulls values from employee
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  // returns input for school
  getSchool() {
    return this.school;
  }
}
// exports class
module.exports = Intern;
