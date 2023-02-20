// Import the inquirer library and the Manager, Engineer, and Intern classes
const fs = require('fs');
// const { writeToFile } = require('./src/template');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const generateHTML = require('./src/template');
const employees = [];

// Questions for the team manager
const managerQuestions = [
    {
        name: 'managerName',
        message: "What is the team manager's name?",
        type: 'input'
    },
    {
        name: 'managerId',
        message: "What is the team manager's ID?",
        type: 'input'
    },
    {
        name: 'managerEmail',
        message: "What is the team manager's email address?",
        type: 'input'
    },
    {
        name: 'managerNumber',
        message: "What is the team member's office number?",
        type: 'input'
    },
];

// Team member type question
const teamMemberTypeQuestion = [
    {
        name: 'memberType',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'None'],
        type: 'list'
    }
]

// Questions for engineers
const engineerQuestions = [
    {
        name: 'engineerName',
        message: "What is the engineers name?",
        type: 'input'
    },
    {
        name: 'engineerId',
        message: "What is the engineers ID?",
        type: 'input'
    },
    {
        name: 'engineerEmail',
        message: "What is the engineers email address?",
        type: 'input'
    },
    {
        name: 'github',
        message: 'What is their github username?',
        type: 'input'
    }
];

// Questions for interns
const internQuestions = [
    {
        name: 'internName',
        message: "What is the interns name?",
        type: 'input'
    },
    {
        name: 'internId',
        message: "What is the interns ID?",
        type: 'input'
    },
    {
        name: 'internEmail',
        message: "What is the interns email address?",
        type: 'input'
    },
    {
        name: 'school',
        message: 'Which school did they attend?',
        type: 'input'
    }
];

// Function that prompts the user for information about the next team member
function jobTitle(answers) {
    switch (answers.memberType) {
        case 'Engineer':
            // If the user wants to add an engineer, prompt for engineer questions
            inquirer.prompt(engineerQuestions)
                .then((answers) => {
                    // Create a new instance of the Engineer class with the provided answers
                    const { engineerName, engineerId, engineerEmail, github } = answers
                    const newEngineer = new Engineer(engineerName, engineerId, engineerEmail, github)
                    // Adds new engineer to array 
                    employees.push(newEngineer)
                    // Prompt for information about the next team member
                    teamMemberType()
                })
            break;
        case 'Intern':
            // If the user wants to add an intern, prompt for intern questions
            inquirer.prompt(internQuestions)
                .then((answers) => {
                    // Create a new instance of the Intern class with the provided answers
                    const { internName, internId, internEmail, school } = answers
                    const newIntern = new Intern(internName, internId, internEmail, school)
                    // Adds new intern to array 
                    employees.push(newIntern)
                    // Prompt for information about the next team member
                    teamMemberType()
                })
            break;
        default: 
        // Once user is done adding employees the html file is rendered 
        console.log("\nNo more employees were added.\n");
        const text = generateHTML(employees)
        writeToFile('./dist/index.html', text)
        
    }
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("\nFile written successfully\n");
        }
    })
};

// Takes the team member type tp trigger the correct questions
function teamMemberType() {
    return inquirer.prompt(teamMemberTypeQuestion)
        .then((answers) => {
            jobTitle(answers)
        })
}

// Starts applications with team manager questions
function init() {
    return inquirer.prompt(managerQuestions)
        .then((answers) => {
            const { managerName, managerId, managerEmail, managerNumber } = answers
            // Creates a instance of a the manager class with the provided answers
            newTeamManager = new Manager(managerName, managerId, managerEmail, managerNumber)
            // Adds teams manager to array
            employees.push(newTeamManager)
            // Passes new employee array to be generated 
            // generateHTML(employees)
            // Prompts the team member type they wish to add 
            teamMemberType()
        })
};

module.exports = employees

init();
