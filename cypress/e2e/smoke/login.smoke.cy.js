import loginData from '../../fixtures/loginData.json';
import ReqresLoginPage from '../pages/ReqresLoginPage';

describe('Smoke - Login API', () => {
  const page = new ReqresLoginPage();

  it('SMOKE-01 - Valid API Login returns token', () => {
    page.loginViaAPI(loginData.validUser.email, loginData.validUser.password)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
        cy.log('Token: ' + response.body.token);
      });
  });

  it('SMOKE-02 - Home page loads', () => {
    page.visit();
    page.verifyHomePage();
  });
});