import LoginPage from './pages/LoginPage';

describe('Login with POM', () => {
  const loginPage = new LoginPage();

  it('Valid login with POM', () => {
    loginPage.visit();
    loginPage.login('student', 'Password123');
    cy.get('h1').should('contain.text', 'Logged In Successfully');
  });
});