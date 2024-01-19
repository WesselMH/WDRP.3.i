/* eslint-disable no-undef */
describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.contains("Registreren").click();
    cy.get(`[data-cy=2]`).click();

    cy.contains("Bevestig account keuze").click();
    cy.contains("Ga verder").click();

    cy.get(`[data-cy="EmailAccount"]`).type("Test@email.com");
    cy.get(`[data-cy="URL"]`).type("YouTube.com");
    cy.get(`[data-cy="Wachtwoord"]`).type("Test1/");
    cy.get(`[data-cy="bevestigWachtwoord"]`).type("Test1/");
    cy.get(`[data-cy="Locatie"]`).type("Dit is een locatie");
    cy.get(`[data-cy="Informatie"]`).type("Dit is informatie");

    cy.get(`[data-cy="progressBar"]`).should("have.value", 1);
    cy.contains("Registreer").click();
    cy.contains("Loading");
  });
});
