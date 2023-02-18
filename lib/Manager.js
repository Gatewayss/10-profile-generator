const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, number) {
        super(name, id, email)
        this.number = number 
        console.log(name, id, email, number);
    }

    officeNumber(number) {
        console.log(number);
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager