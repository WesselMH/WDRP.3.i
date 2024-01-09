import InvoerVeld from "./Invoerveld";
import "./Pop-up.css";
import { Link } from "react-router-dom";

const knoppen = [
  {
    label: "Voornaam",
    type: "text",
    placeholder: "Vul hier je voornaam in.",
    id: "naam",
    index: 0,
  },
  {
    label: "Voornaam",
    type: "textarea",
    placeholder: "Vul hier je voornaam in.",
    id: "naam",
    index: 0,
  },
];

const invoerVelden = knoppen.map((knop) => {
  return (
    <InvoerVeld
      key={knop.index}
      inputType={knop.inputType}
      label={knop.label}
      className="input-veld"
      type={knop.type}
      placeholder={knop.placeholder}
      id={knop.id}
    />
  );
});

function Bijwerken() {
  return (
    <>
      <div className="pop-up">
        <Link to={-1} className="exit-button">
          x
        </Link>
        <div className="Titel">Bijwerken</div>
        <div className="input-holder">
          <div className="side-by-side">{invoerVelden}</div>
          <Link to={-1} className="full-size flex-center">
            <button className="confirm-button">Bijwerken</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Bijwerken;
