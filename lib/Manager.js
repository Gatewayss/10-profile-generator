const Employee = require("./Employee");
class Manager extends Employee{
    constructor(name, id, email, number) {
        super(name, id, email)
        this.number = number 
    }

    officeNumber() {
        return this.number
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager