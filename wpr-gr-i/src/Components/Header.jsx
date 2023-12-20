import "./Header.css";
import Logo from "../Accessibility props/Logo Icon/icon_accessibility.png";
import Knop from "./Button.jsx";
import { Link } from "react-router-dom";

function Header({ Titel, Knoppen }) {
  return (
    <header>
      <div className="inside-wrapper">
        <img className="logo" src={Logo} alt="Logo Accessibility" />
        <Link to={"/"} className="header-component Titel">
          {Titel}
        </Link>
      </div>
      <div className="inside-wrapper knoppen-wrapper">
        {Knoppen.map(function (Knoppen) {
          return (
            <>
              <Link to={Knoppen.href} className="button-component knop">
                {Knoppen.Naam}
              </Link>
              {/* <Knop label={Knoppen.Naam} href={Knoppen.href} css="knop"></Knop> */}

              {/* ik heb idd de knop weg gehaald dit zodat de focus maar 1x met tab er is en niet op de <a></a> en op de <button></button> als je in de dom kijkt */}
            </>
          );
        })}
      </div>
    </header>
  );
}
export default Header;
