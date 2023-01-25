const Employee = require("../lib/Employee");

// tests getName function, tests to see if each constructer returns correctly
describe("getName", () => {
  it("should return user input for name", () => {
    const employee = new Employee("name", "id", "email");
    const name = employee.getName();
    const id = employee.getId();
    const email = employee.getEmail();
    expect(name).toBe("name");
    expect(id).toBe("id");
    expect(email).toBe("email");
  });
});
