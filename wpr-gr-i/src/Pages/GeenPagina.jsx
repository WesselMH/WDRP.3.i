import { Link, useNavigate } from "react-router-dom";
import "./GeenPagina.css";
import Header from "../Components/Header";
import { useEffect } from "react";

const headerButtons = [
  { Naam: "Bedrijven portaal", href: "/BedrijvenPortaal" },
  { Naam: "beheerdersportaal", href: "/" },
  { Naam: "inloggen", href: "/Login" },
];

function GeenPagina() {
  const navigate = useNavigate();

  //na 30 seconde zal de gebruiker sws terug gestuurd worden naar de voor pagina
  useEffect(() => {
    const terug = setTimeout(() => {
      navigate("/");
    }, 30000);

    return () => {
      clearTimeout(terug);
    };
  }, []);

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
