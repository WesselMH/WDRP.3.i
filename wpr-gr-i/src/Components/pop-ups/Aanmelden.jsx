import "./Pop-up.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const knoppen = [
  { Label: "Voornaam", InvoerVeld: "Vul hier je voornaam in." },
  { Label: "Achternaam", InvoerVeld: "Vul hier je achternaam in." },
  { Label: "Email", InvoerVeld: "Vul hier je email in." },
  { Label: "Wachtwoord", InvoerVeld: "Vul hier je wachtwoord in." },
  { Label: "Telefoonnummer", InvoerVeld: "Vul hier je telefoonnummer in." },
  { Label: "Hulpmiddelen", InvoerVeld: "Vul hier je hulpmiddelen in." },
  { Label: "Beperking", InvoerVeld: "Vul hier je beperking in." },
  { Label: "Geboortedatum", InvoerVeld: "Vul hier je geboorte datum in." },
  { Label: "Bevestig email", InvoerVeld: "Bevestig je email." },
  { Label: "Wachtwoord bevestigen", InvoerVeld: "Bevestig je wachtwoord." },
  { Label: "Postcode", InvoerVeld: "Vul hier je postcode in." },
  {
    Label: "Benadering",
    InvoerVeld: "Selecteer hier je benaderings voorkeur.",
  },
];

function Aanmelden() {
  return (
    <div className="pop-up x2">
      <h1>Registratie</h1>
      <Link to="/">
        <button className="exit-button">x</button>
      </Link>
      <div className="input-holder">
        <div className="side-by-side">
          <div className="input-groep">
            <div className="input-bundel">
              {knoppen.map(() => {})}
              <label for="naam">Volledige Naam </label>
              <input
                className="input-veld"
                type="text"
                id="naam"
                placeholder="Vul hier je naam in"
              ></input>
            </div>
          </div>

          <div className="input-groep">
            <div className="input-bundel">
              <label>Volledige Naam </label>
              <input
                className="input-veld"
                type="text"
                placeholder="Vul hier je naam in"
              ></input>
            </div>
          </div>
        </div>
        {/* ja robin hier moet een map funtie komen om te zorgen dat het gegenereed word */}
        <Link to="/" className="full-size flex-center">
          <button className="confirm-button">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Aanmelden;
