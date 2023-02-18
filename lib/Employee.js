class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
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
