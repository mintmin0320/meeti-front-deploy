import '@testing-library/cypress/add-commands'

/**
 * 커스텀 커맨드
 */

Cypress.Commands.add('signin', () => {
  const email = 'hamin0320@naver.com';
  const password = '1234';

  cy.findByLabelText('ID').type(email);
  cy.findByLabelText('PW').type(password);
  cy.findByLabelText("로그인").click();

  cy.url().should("eq", `${Cypress.env('baseUrl')}/`);
  cy.findByText('일정').should('exist');
});

Cypress.Commands.add('signout', () => {
  cy.visit('/profile');

  cy.findByLabelText("로그아웃").click();

  cy.url().should("eq", `${Cypress.env('baseUrl')}/auth/sign-in`);
});

Cypress.Commands.add('assertUrl', (url) => {
  cy.url().should("eq", `${Cypress.env('baseUrl')}${url}`);
});

/**
 * 커스텀 쿼리
 */

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