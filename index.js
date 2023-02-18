const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');


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

const teamMemberTypeQuestion = [
    {
        name: 'memberType',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'None'],
        type: 'list'
    }
]

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

function jobTitle(answers) {
    switch (answers.memberType) {
        case 'Engineer':
            inquirer.prompt(engineerQuestions)
                .then((answers) => {
                    const { engineerName, engineerId, engineerEmail, github } = answers
                    new Engineer(engineerName, engineerId, engineerEmail, github)
                    teamMemberType()
                })
            break;
        case 'Intern':
            inquirer.prompt(internQuestions)
                .then((answers) => {
                    const { internName, internId, internEmail, school } = answers
                    new Intern(internName, internId, internEmail, school)
                    teamMemberType()
                })
            break;
        default: return console.log("No more employees were added.");
    }
}

function teamMemberType() {
    return inquirer.prompt(teamMemberTypeQuestion)
        .then((answers) => {
            jobTitle(answers)
        })
}

function init() {
    return inquirer.prompt(managerQuestions)
        .then((answers) => {
            const { managerName, managerId, managerEmail, managerNumber } = answers
            newTeamManager = new Manager(managerName, managerId, managerEmail, managerNumber)
            teamMemberType()
        })
};

init();
