import { Link } from "react-router-dom";
import "./GeenPagina.css";
import Header from "../Components/Header";

const headerButtons = [
  { Naam: "Bedrijven portaal", href: "/BedrijvenPortaal" },
  { Naam: "beheerdersportaal", href: "/" },
  { Naam: "inloggen", href: "/" },
];

function UnauthorizedPagina() {
  return (
    <>
      <Header Titel={""} Knoppen={headerButtons} />
      <div className="geen-wrapper">
        <div className="code">401</div>
        <p>
          Sorry, u bent niet authorized om deze pagina te bezoeken. We helpen u
          terug naar onze <Link to={"/"}>home pagina</Link>
        </p>
      </div>
    </>
  )
}

export default UnauthorizedPagina;
