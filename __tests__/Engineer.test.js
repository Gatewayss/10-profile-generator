const Engineer = require("../lib/Engineer");
describe('Engineer class', () => {
    const testAnswers = { name: 'John', id: 12, email: 'nprtpn@gmail.com', github: 'Gatewayss' }
    const testEngineer = new Engineer(testAnswers.name, testAnswers.id, testAnswers.email, testAnswers.github)
    test('if testEmployee is a instance of employee class', () => {
        expect(testEngineer).toBeInstanceOf(Engineer)
    })
    it('should return the github username', () => {
        const expected = 'Gatewayss'
        const actual = testEngineer.getGithub()
        expect(actual).toEqual(expected)
    });
});