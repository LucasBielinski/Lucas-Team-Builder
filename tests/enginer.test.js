const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("getgithub", () => {
  it("should return user input for github", () => {
    const engineer = new Engineer("name", "id", "email", "github");
    const name = engineer.getName("name");
    const id = engineer.getId("id");
    const email = engineer.getEmail("email");
    const github = engineer.getgithub("githuv");
    expect(name).toBe("name");
    expect(id).toBe("id");
    expect(email).toBe("email");
    expect(github).toBe("github");
  });
});
