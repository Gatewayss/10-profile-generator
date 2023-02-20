const Manager = require('../lib/Manager')

describe('Manager class', () => {
    const testAnswers = { name: 'John', id: 12, email: 'nprtpn@gmail.com', number: 6512232222 }
    const testManager = new Manager(testAnswers.name, testAnswers.id, testAnswers.email, testAnswers.number)
    test('if testManager is a instance of the Manager class', () => {
        expect(testManager).toBeInstanceOf(Manager)
    })
    it('should return the phone number', () => {
        const expected = 6512232222
        const actual = testManager.officeNumber()
        expect(actual).toEqual(expected)
    })
    it('should return Manager as the job role', () => {
        const expected = 'Manager'
        const actual = testManager.getRole()
        expect(actual).toEqual(expected)
    })
});