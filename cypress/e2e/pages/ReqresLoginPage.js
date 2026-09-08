class ReqresLoginPage {
  visit() {
    cy.visit('/');
  }

  verifyHomePage() {
    //cy.get('h1').should('contain.text', 'ReqRes');
    cy.get('h1').should('contain.text', 'The reliable test API');
    //cy.contains('Log in').should('exist');
  }

  // For API test
  loginViaAPI(email, password) {
    return cy.apiLogin(email, password);
  }
}
export default ReqresLoginPage;