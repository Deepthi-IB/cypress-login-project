class LoginPage {
  visit() {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
  }

  enterUsername(username) {
    cy.get('#username').clear().type(username);
  }

  enterPassword(password) {
    cy.get('#password').clear().type(password);
  }

  clickLogin() {
    cy.get('#submit').click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default LoginPage;