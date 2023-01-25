class Employee {
  // consturcts class based on values
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
// returns input for name
  getName() {
    return this.name;
  }
// returns input for ID
  getId() {
    return this.id;
  }
  // returns input for email
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
// exports class
module.exports = Employee;
