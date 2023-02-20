const Employee = require("../lib/Employee");

describe('Employee class', () => {
    const testAnswers = { name: 'John', id: 12, email: 'nprtpn@gmail.com' }
    const testEmployee = new Employee(testAnswers.name, testAnswers.id, testAnswers.email)
    test('if testEmployee is a instance of employee class', () => {
        expect(testEmployee).toBeInstanceOf(Employee)
    })
    it('should return the name', () => {
        const expected = 'John'
        const actual = testEmployee.getName()
        expect(actual).toEqual(expected)
    });
    it('should return the id', () => {
        const expected = 12
        const actual = testEmployee.getId()
        expect(actual).toEqual(expected)
    });
    it('should return the email address', () => {
        const expected = 'nprtpn@gmail.com'
        const actual = testEmployee.getEmail()
        expect(actual).toEqual(expected)
    })
    it('should return the correct job role', () => {
        const expected = 'Employee'
        const actual = testEmployee.getRole() 
        expect(actual).toEqual(expected)
    }) 
});