const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, role, number) {
    super(name, id, email);
    this.role = role;
    this.number = number;
  }

  getRole() {
    return "manager";
  }

  getNumber() {
    return this.number;
  }
}

module.exports = Manager;
