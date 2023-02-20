const Intern = require('../lib/Intern')

describe('Intern class', () => {
    const testAnswers = { name: 'John', id: 12, email: 'nprtpn@gmail.com', school: 'Harvard'}
    const testIntern = new Intern(testAnswers.name, testAnswers.id, testAnswers.email, testAnswers.school)
    test('if testIntern is a instance of the Intern class', () => {
        expect(testIntern).toBeInstanceOf(Intern)
    })
    it('should return the school name', () => {
        const expected = 'Harvard' 
        const actual = testIntern.getSchool()
        expect(actual).toEqual(expected)
    })
    it('should return Intern as the job role', () => {
        const expected = 'Intern'
        const actual = testIntern.getRole()
        expect(actual).toEqual(expected)
    })
});