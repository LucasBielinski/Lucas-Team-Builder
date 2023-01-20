const inquirer = require("inquirer");
const fs = require("fs");
const manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const intern = require("./lib/Intern");
const { run } = require("jest");
const team = [];
function runProgram() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "please enter a manager name",
        name: "name",
      },
      //   {
      //     type: "input",
      //     message: "please enter manager ID",
      //     name: "id",
      //   },
      //   {
      //     type: "input",
      //     message: "please enter manager email",
      //     name: "id",
      //   },
      //   {
      //     type: "input",
      //     message: "please enter number",
      //   },
    ])
    .then((answers) => {
      console.log(answers);

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
  console.log("test");
  menu();
}

function addIntern() {
  console.log("caught");
  menu();
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
