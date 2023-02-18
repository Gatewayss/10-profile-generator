class Manager {
    constructor(name, id, email, number) {
        this.name = name
        this.id = id
        this.email = email
        this.number = number 
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

    officeNumber(number) {
        console.log(number);
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager