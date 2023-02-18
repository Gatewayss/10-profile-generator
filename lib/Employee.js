const manager = require('./Manager');
class Employee extends manager {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
        console.log(name, id, email 'nadfnskdf');
    }

    getName(name) {
        console.log(name);
    }

    getId(id) {
        console.log(id);
    }

    getEmail(email) {
        console.log(email);
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;
