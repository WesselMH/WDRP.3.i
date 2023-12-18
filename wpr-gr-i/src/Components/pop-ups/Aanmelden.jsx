import "./Pop-up.css";
import Button from "../Button";
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
  {
    label: "Achternaam",
    type: "text",
    placeholder: "Vul hier je achternaam in.",
    id: "achternaam",
    index: 1,
  },
  {
    label: "Email",
    type: "text",
    placeholder: "Vul hier je email in.",
    id: "naam",
    index: 2,
  },
  {
    label: "Wachtwoord",
    type: "text",
    placeholder: "Vul hier je wachtwoord in.",
    id: "naam",
    index: 3,
  },
  {
    label: "Telefoonnummer",
    type: "text",
    placeholder: "Vul hier je telefoonnummer in.",
    id: "naam",
    index: 4,
  },
  {
    label: "Hulpmiddelen",
    type: "text",
    placeholder: "Vul hier je hulpmiddelen in.",
    id: "naam",
    index: 5,
  },
  {
    label: "Beperking",
    type: "text",
    placeholder: "Vul hier je beperking in.",
    id: "naam",
    index: 6,
  },
  {
    label: "Geboortedatum",
    type: "text",
    placeholder: "Vul hier je geboorte datum in.",
    id: "naam",
    index: 7,
  },
  {
    label: "Bevestig email",
    type: "text",
    placeholder: "Bevestig je email.",
    id: "naam",
    index: 8,
  },
  {
    label: "Wachtwoord bevestigen",
    type: "text",
    placeholder: "Bevestig je wachtwoord.",
    id: "naam",
    index: 9,
  },
  {
    label: "Postcode",
    type: "text",
    placeholder: "Vul hier je postcode in.",
    id: "naam",
    index: 10,
  },
  {
    label: "Benadering",
    type: "text",
    placeholder: "Selecteer hier je benaderings voorkeur.",
    id: "naam",
    index: 11,
  },
];

const invoerVelden = knoppen.map((knop) => {
  return (
    <InvoerVeld
      key={knop.index}
      label={knop.label}
      className="input-veld"
      type={knop.type}
      placeholder={knop.placeholder}
      id={knop.id}
    />
  );
});

function Aanmelden() {
  return (
    <div className="pop-up">
      <Link to="/">
        <button className="exit-button">x</button>
      </Link>
      <div className="titel">Registratie</div>
      <div className="input-holder">
        <div className="side-by-side">{invoerVelden}</div>
        <Link to="/" className="full-size flex-center">
          <button className="confirm-button">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Aanmelden;
