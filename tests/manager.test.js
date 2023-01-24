const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("getNumber", () => {
  it("should return user input for the office number", () => {
    const manager = new Manager("name", "id", "email", "number");
    const name = manager.getName("name");
    const id = manager.getId("id");
    const email = manager.getEmail("email");
    const number = manager.getNumber("number");
    expect(name).toBe("name");
    expect(id).toBe("id");
    expect(email).toBe("email");
    expect(number).toBe("number");
  });
});
