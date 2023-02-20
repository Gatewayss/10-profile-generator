function generateHTML(employees) {
    let html = `
    <html>
      <head>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <header>
        <div class="header">
          <h1>Our Team</h1>
        </div>
        </header>
  `;

    employees.forEach(employee => {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();

        html += `
      <div class="card">
        <h2>${name}</h2>
        <p>${role}</p>
        <p>ID: ${id}</p>
        <p>Email: ${email}</p>
        `

        switch(role) {
            case 'Manager': const number = employee.officeNumber();
                html += `<p>Number: ${number}</p></div>`
                break;
            case 'Engineer': const github = employee.getGithub();
                html += `<p>Github: ${github}</p></div>`
                break;
            case 'Intern': const school = employee.getSchool();
                html += `<p>School: ${school}</p></div>`
                break;
            default: html += ''
        };
    });

    html += `
    </body>
    </html>
  `;

    return html;
}

module.exports = generateHTML