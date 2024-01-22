/* eslint-disable no-undef */
describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    cy.contains("Login").click();
    cy.get(`[data-cy="Gebruikersnaam"]`).type("Gebruiker");
    cy.get(`[data-cy="Wachtwoord"]`).type("Gebruiker1/");
    cy.get(`[data-cy="Login"]`).click()

    cy.contains("HomePortaal");
  });
});
