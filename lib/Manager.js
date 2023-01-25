const Employee = require("./Employee");
// Manager pulls from employee
class Manager extends Employee {
  constructor(name, id, email, number) {
    // grabs from employye data
    super(name, id, email);
    this.number = number;
  }

  getRole() {
    return "Manager";
  }
  // returns nubmer inout
  getNumber() {
    return this.number;
  }
}
// exports class
module.exports = Manager;
