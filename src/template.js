// takes in team[i]
function renderCard(employee) {
  // builds out common parts of the card
  var baseCard = `<div class="col-sm-8 col-lg-3">
    <div class="card">
    <div class="card-body">
    <h2 class="card-text"> ${employee.getRole()}</h2>
    <p class="card-text"> name: ${employee.name} </p>
    <p class="card-text"> ID: ${employee.id}</p>
    <p>Emaill: <a class="card-text" href="mailto:${employee.email}"> ${
    employee.email
  }</a></p>`;
  // if card is diffrent role, builds out parts of the card and adds the base to it and builds upon it
  switch (employee.getRole()) {
    case "Manager":
      baseCard += `<p class="card-text"> Office Number: ${employee.number}</p>`;
      break;
    case "Engineer":
      baseCard += `<a class="card-text" href="${employee.github}" target="_blank" rel="noopener noreferrer"> Employee GitHub </a>`;
      break;
    default:
      baseCard += `<p class="card-text"> School: ${employee.school}</p>`;
      break;
  }
  // builds upon cards by adding an end
  baseCard += ` </div></div></div>`;
  // returns card
  return baseCard;
}
// takes in team ingo
function template(team) {
  console.log(team);

  //in order to access them we must access their index team[I]
  // sets cards to blank
  var cards = "";
  for (let i = 0; i < team.length; i++) {
    // builds out cards
    cards += renderCard(team[i]);
  }

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./style.css"/>
      <title>Team Building</title>
  </head>
  <body>

  <header class="text-center p-2">
  <div class="page-header mt-2">
    <h1>Introducing the Team!</h1>
  </div>
</header>

<section class="mt-3 mb-2 container">
<div class="row">
${cards}

  </div>
</section>
      
  </body>
  </html>`;
}

module.exports = template;
