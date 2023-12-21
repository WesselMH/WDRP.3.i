import { Link } from "react-router-dom";
import "./GeenPagina.css";
import Header from "../Components/Header";

const headerButtons = [
  { Naam: "Bedrijven portaal", href: "/BedrijvenPortaal" },
  { Naam: "beheerdersportaal", href: "/" },
  { Naam: "inloggen", href: "/" },
];

function GeenPagina() {
  return (
    <>
      <Header Titel={""} Knoppen={headerButtons} />
      <div className="geen-wrapper">
        <div className="code">404</div>
        <p>
          Sorry, de pagina die u probeerd te bezoek bestaat niet. We helpen u
          terug naar onze <Link to={"/"}>home pagina</Link>
        </p>
      </div>
    </>
  );
}

export default GeenPagina;
