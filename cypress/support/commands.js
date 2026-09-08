// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('apiLogin', (email, password) => {
  return cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/login',
    headers: {
      'x-api-key': 'reqres-free-v1'
    },
    body: {
      email: email,
      password: password
    },
    failOnStatusCode: false
  });
});

Cypress.Commands.add('uiLogin', (email, password) => {
    cy.visit('/');
    // Note: reqres.in UI does not have real UI login, 
    // so we will navigate and show API + UI sync concept
    cy.contains('Log in').should('be.visible');
});