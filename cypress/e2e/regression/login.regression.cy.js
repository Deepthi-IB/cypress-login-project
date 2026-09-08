import loginData from '../../fixtures/loginData.json';

describe('Regression - Login API Negative Cases', () => {

  it('REG-01 - Invalid password should fail', () => {
    cy.apiLogin(loginData.invalidUser.email, loginData.invalidUser.password)
      .then((res) => {
        expect(res.status).to.eq(400);
        // reqres returns "Only defined users succeed registration" sometimes
        // So we check status only, not exact message
        expect(res.body).to.have.property('error');
      });
  });

  it('REG-02 - Missing password should fail', () => {
    cy.apiLogin(loginData.missingPassword.email, '')
      .then((res) => {
        expect(res.status).to.eq(400);
        expect(res.body.error).to.eq('Missing password');
      });
  });

  it('REG-03 - Missing email should fail', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      headers: { 'x-api-key': 'reqres-free-v1' },
      body: { password: 'cityslicka' },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(400);
    });
  });
});