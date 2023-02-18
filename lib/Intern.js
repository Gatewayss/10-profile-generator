const Employee = require('./Employee')
class Intern extends Employee {
    constructor(name, id, email, school){
        super (name, id, email) 
        this.school = school 
        // console.log(name, id, email, school);
    }

    getSchool(school) {
        console.log(school);
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;