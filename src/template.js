// const index = require('./index.js', __dirname)

function generateHTML(employees) {
console.log(employees);
    return `
    <html>
        <head>
        </head>
        <body>
            <div>${employees}</div>
        </body>
    </html>
        
    `
}

module.exports = generateHTML