const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const template = require("./src/template");
const { run } = require("jest");
const Engineer = require("./lib/Engineer");
const team = [];

function runProgram() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "please enter a manager name",
        name: "name",
      },
      {
        type: "input",
        message: "please enter manager ID",
        name: "id",
      },
      {
        type: "input",
        message: "please enter manager email",
        name: "email",
      },
      {
        type: "input",
        message: "please enter office number",
        name: "number",
      },
    ])
    .then((answers) => {
      console.log(answers);
      let manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.number
      );
      console.log(manager);
      team.push(manager);

      menu();
    });
}

function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "would you like to add an Engineer or Intern?",
        name: "option",
        choices: ["Add Engineer", "Add Intern", "no"],
      },
    ])
    .then((answer) => {
      console.log(answer.option);
      switch (answer.option) {
        case "Add Engineer":
          addEngineer();
          break;
        case "Add Intern":
          addIntern();
          break;

        default:
          writeHtml();
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "please enter an engineer name",
        name: "name",
      },
      {
        type: "input",
        message: "please enter engineer ID",
        name: "id",
      },
      {
        type: "input",
        message: "please enter an email",
        name: "email",
      },
      {
        type: "input",
        message: "please enter a Github link",
        name: "github",
      },
    ])
    .then((answers) => {
      console.log(answers);
      let engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      console.log(engineer);
      team.push(engineer);
      menu();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "please enter an inter name",
        name: "name",
      },
      {
        type: "input",
        message: "please enter intern ID",
        name: "id",
      },
      {
        type: "input",
        message: "please enter intern email",
        name: "email",
      },
      {
        type: "input",
        message: "please enter a college name",
        name: "school",
      },
    ])
    .then((answers) => {
      console.log(answers);
      let intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      console.log(intern);
      team.push(intern);
      menu();
    });
}

function writeHtml() {
  fs.writeFile("dist/index.html", template(team), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("written");
    }
  });
}

runProgram();
