function generateHTML(employees) {
    let html = `
    <html>
      <head></head>
      <body>
        <div>
          <h1>Our Team</h1>
        </div>
  `;

    employees.forEach(employee => {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();

        html += `
      <div>
        <h2>${name}</h2>
        <p>${role}</p>
        <p>ID: ${id}</p>
        <p>Email: ${email}</p>
        `

        switch(role) {
            case 'Manager': const number = employee.officeNumber();
                html += `<p>Number: ${number}</p>`
                break;
            case 'Engineer': const github = employee.getGithub();
                html += `<p>Github: ${github}</p>`
                break;
            case 'Intern': const school = employee.getSchool();
                html += `<p>School: ${school}</p>`
                break;
            default: html += ''
        };
    });

    html += `
        </div>
    </body>
    </html>
  `;
  
    return html;
}

module.exports = generateHTML