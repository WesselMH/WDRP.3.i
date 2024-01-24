/* eslint-disable no-undef */
describe('template spec', () => {
    it('passes', () => {
      cy.visit('/')
  
      cy.contains("Login").click();
      cy.get(`[data-cy="Gebruikersnaam"]`).type("Beheerder");
      cy.get(`[data-cy="Wachtwoord"]`).type("Beheerder1/");
      cy.get(`[data-cy="Login"]`).click()
    })
  })