const Employee = "./Employee";

class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    super(name, id, email);
    this.role = role;
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getgithub() {
    return this.github;
  }
}

module.exports = Engineer;
