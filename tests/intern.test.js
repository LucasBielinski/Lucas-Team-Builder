const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

// tests getSchool function, tests to see if each constructer returns correctly
describe("getSchool", () => {
  it("should return user input for school", () => {
    const intern = new Intern("name", "id", "email", "school");
    const name = intern.getName("name");
    const id = intern.getId("id");
    const email = intern.getEmail("email");
    const school = intern.getSchool("school");
    expect(name).toBe("name");
    expect(id).toBe("id");
    expect(email).toBe("email");
    expect(school).toBe("school");
  });
});
