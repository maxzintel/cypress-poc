/// <reference types="Cypress" />
describe('First Test', () => {
  it('Visit Website', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  });
});
