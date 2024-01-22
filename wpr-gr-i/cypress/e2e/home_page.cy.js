/* global cy */
describe("Voor pagina", () => {
  beforeEach(() => {
    // cy.request({
    //   method: "post",
    //   url:
    //     Cypress.env("server_url") + "/AaaAccount/ervaringsdeskundige/aanmelden",
    //   body: {
    //     id: "",
    //     userName: "Gebruiker",
    //     gebruikersNaam: "Gebruiker",
    //     wachtwoord: "Test1/",
    //     EmailAccount: "Gebruiker@email.com",
    //     voornaam: "Test",
    //     achternaam: "Gebruiker",
    //     geboorteDatum: "2003-12-30",
    //     postCode: "1234 AB",
    //     telefoonNummer: "0612345678",
    //   },
    //   headers: {
    //     "Access-Control-Allow-Origin": "http://localhost:5155/api/",
    //     // "Access-Control-Allow-Origin": "https://wpr-i-backend.azurewebsites.net/api/",
    //     "Access-Control-Allow-Methods": "POST",
    //     "Access-Control-Allow-Headers": "Content-Type, Custom-Header",
    //     "Content-Type": "application/json",
    //   },
    // });
  });

  it("succesfully loads", () => {
    cy.visit("/");
  });
});
