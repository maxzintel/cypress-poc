/// <reference types="Cypress" />
import { env } from '../../lib/env/env'

const fullUrl = `https://${env.env}.${env.brand}${env.baseUrl}${env.countryExtended}/${env.countryShort}/${env.name}/${env.garage}`
describe('First Screen', () => {
  beforeEach(() => {
    cy.visit(`${fullUrl}`, {
      auth: {
        username: `${env.gUser}`,
        password: `${env.gPass}`
      }
    });
  });

  it('Click Button', () => {
    cy.contains('').click()
  });
});

xdescribe('First Test', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
  });
  it('Visit Website', () => {
    cy.url().should('include', '/commands/actions')
  });
  it('Get CSS element', () => {
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  });
});
