// const index = require('./index.js', __dirname)

function generateHTML(employees) {
    console.log(employees);
    return `
    <html>
        <head>
        </head>
        <body>
            <div>${employees[0].name}</div>
        </body>
    </html>
        
    `
}

module.exports = generateHTML