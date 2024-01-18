import { Link, useLocation, useNavigate } from "react-router-dom";
import "./GeenPagina.css";
import Header from "../Components/Header";
import { useEffect } from "react";
import ReactGA from "react-ga4";


const headerButtons = [
  { Naam: "Bedrijven portaal", href: "/BedrijvenPortaal" },
  { Naam: "beheerdersportaal", href: "/" },
  { Naam: "inloggen", href: "/" },
];

function UnauthorizedPagina() {
  const navigate = useNavigate();
  const location = useLocation();
  //na 30 seconde zal de gebruiker sws terug gestuurd worden naar de vorige pagina
  useEffect(() => {
    document.title = 'Unauthorized'
    ReactGA.send({ hitType: "pageview", page: location.pathname, title: document.title });

    const home = setTimeout(() => {
      navigate(-1);
    }, 30000);

    return () => {
      clearTimeout(home);
    };
  }, []);

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
  );
}

export default UnauthorizedPagina;
