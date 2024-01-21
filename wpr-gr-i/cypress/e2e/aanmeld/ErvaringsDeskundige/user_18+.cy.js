/* eslint-disable no-undef */
describe("Aanmelden van een gebruiker 18+", () => {
  it("aanmelden gebruiker 18+", () => {
    cy.visit("/");

    cy.contains("Registreren").click();
    cy.get(`[data-cy=1]`).click();
    
    cy.contains("Bevestig account keuze").click()

    cy.contains("Ga verder").click();
    // cy.contains("Ga verder").click();
    // cy.get(`[data-cy="Voornaam"]`).type("Test");
    // cy.get(`[data-cy="Achternaam"]`).type("Gebruiker");
    // cy.get(`[data-cy="Wachtwoord"]`).type("Test1/");
    // cy.get(`[data-cy="bevestigWachtwoord"]`).type("Test1/");
    // cy.get(`[data-cy="EmailAccount"]`).type("Test@email.com");
    // cy.get(`[data-cy="bevestigEmail"]`).type("Test@email.com");
    cy.get(`[data-cy="geboorteDatum"]`).type("2003-02-28");
    cy.get(`[data-cy="PostCode"]`).type("1234 AB");
    // cy.get(`[data-cy="TelefoonNummer"]`).type("0612345678");

    cy.get(`[data-cy="progressBar"]`).should('have.value', 1)

    cy.contains("Registreer");
  });
});
