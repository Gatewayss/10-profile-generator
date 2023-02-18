const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

inquirer
  const questions = [
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
    {
        name: 'memberType', 
        message: 'What type of team member would you like to add?', 
        choices: ['Engineer', 'Intern', 'None'],
        type: 'list'
    }
  ];

  function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const { managerName, managerId, managerEmail, managerNumber } = answers
            newTeamManager = new Manager( managerName, managerId, managerEmail, managerNumber )
            console.log(newTeamManager);
        })
};

init();
  