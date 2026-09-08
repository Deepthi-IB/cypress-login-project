describe('My First Login Test', () => {

  it('TC-01 - Valid Login should succeed', () => {
    // Step 1: Open login page
    cy.visit('https://practicetestautomation.com/practice-test-login/');

    // Step 2: Type username
    cy.get('#username').type('student');

    // Step 3: Type password
    cy.get('#password').type('Password123');

    // Step 4: Click Login button
    cy.get('#submit').click();

    // Step 5: Verify login success
    cy.url().should('include', 'practicetestautomation.com/logged-in-successfully');
    cy.get('h1').should('contain.text', 'Logged In Successfully');
    cy.get('.post-title').should('be.visible');
  });

  it('TC-02 - Invalid password should show error', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
    
    cy.get('#username').type('student');
    cy.get('#password').type('wrongPassword');
    cy.get('#submit').click();

    // Verify error message
    cy.get('#error').should('be.visible');
    cy.get('#error').should('contain.text', 'Your password is invalid!');
  });

});