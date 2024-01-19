/* eslint-disable no-undef */
describe("Veranderende leeftijd user", () => {
  it("test verwijder voogd", () => {
    cy.visit("/");

    cy.contains("Registreren").click();
    cy.get(`[data-cy=1]`).click();

    cy.contains("Bevestig account keuze").click()

    cy.contains("Ga verder").click();
    // cy.contains("Ga verder").click();
    
    cy.get(`[data-cy="geboorteDatum"]`).type("2023-02-28");
    cy.get(`[data-cy="PostCode"]`).type("1234 AB");
    cy.get(`[data-cy="progressBar"]`).should('not.have.value', 1)
    
    cy.get(`[data-cy="geboorteDatum"]`).type("2003-02-28");
    cy.get(`[data-cy="TelefoonNummer"]`).type("0612345678");
    cy.get(`[data-cy="progressBar"]`).should('have.value', 1)



    cy.contains("Registreer");
  });
});
