import "./Pop-up.css";
import { Link } from "react-router-dom";

import InvoerVeld from "./Invoerveld";

const knoppen = [
  {
    label: "Voornaam",
    type: "text",
    placeholder: "Vul hier je voornaam in.",
    id: "naam",
    index: 0,
  },
];

function BijwerkenBedrijf() {
  return (
    <>
      <div className="pop-up">
        <Link to="/">
          <button className="exit-button">x</button>
        </Link>
        <div className="titel">Bijwerken bedrijf profiel</div>
        <div className="input-holder">
          <div className="side-by-side">
            <div className="input-bundel">
              <label className="" for="naam">
                Volledige Naam
              </label>
              <input
                className="input-veld "
                type="text"
                id="naam"
                placeholder="Vul hier je naam in"
                required
              ></input>
            </div>
            <div className="input-bundel">
              <label for="achternaam">Achternaam </label>
              <input
                className="input-veld"
                type="text"
                id="achternaam"
                placeholder="Vul hier je achternaam in"
              ></input>
            </div>

            <div className="input-bundel">
              <label for="beschrijving">Beschrijving</label>
              <textarea className="beschrijving" id="beschrijving"></textarea>
            </div>
            <div className="input-bundel">
              <label>Volledige Naam </label>
              <input
                className="input-veld"
                type="text"
                placeholder="Vul hier je naam in"
              ></input>
            </div>
            <div className="input-bundel">
              <label>Volledige Naam </label>
              <input
                className="input-veld"
                type="text"
                placeholder="Vul hier je naam in"
              ></input>
            </div>
          </div>
          {/* ja robin hier moet een map funtie komen om te zorgen dat het gegenereed word */}
          <Link to="/" className="full-size flex-center">
            <button className="confirm-button">Bijwerken</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BijwerkenBedrijf;
