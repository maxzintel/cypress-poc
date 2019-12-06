/// <reference types="Cypress" />
describe('First Test', () => {
  it('Visit Website', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  });
  it('Get CSS element', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  });
});
