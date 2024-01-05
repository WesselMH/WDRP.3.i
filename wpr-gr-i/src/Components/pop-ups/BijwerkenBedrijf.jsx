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

function BijwerkenBedrijf() {
  return (
    <>
      <div className="pop-up">
        <Link to={-1}>
          <button className="exit-button">x</button>
        </Link>
        <div className="titel">Bijwerken bedrijf profiel</div>
        <div className="input-holder">
          <div className="side-by-side">
            {invoerVelden}
            {/* als je een textarea wilt moet je inputType: textarea toevoegen in de array */}
          </div>
          <Link to={-1} className="full-size flex-center">
            <button className="confirm-button">Bijwerken</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BijwerkenBedrijf;
