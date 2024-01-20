import "./Header.css";
import Logo from "../Accessibility props/Logo Icon/icon_accessibility.png";
import { Link } from "react-router-dom";
import Loguit from "../Loguit";

function Header({ Titel, Knoppen }) {
  return (
    <header>
      <div className="inside-wrapper">
        <Link to={"/"} className="img-wrapper">
          <img className="logo" src={Logo} alt="Terug naar Voor pagina" />
        </Link>
        <div className="header-component Titel">{Titel}</div>
      </div>
      <nav className="inside-wrapper knoppen-wrapper">
        {Knoppen.map(function (Knoppen) {
          return (
            <>
              {/* dit is een if statement in react component */}
              {Knoppen.Naam === "Uitloggen" ? (
                <Link
                  to={Knoppen.href}
                  className="button-component knop"
                  onClick={Loguit}
                  aria-label="Uitloggen"
                >
                  {Knoppen.Naam}
                </Link>
              ) : (
                <Link to={Knoppen.href} className="button-component knop" aria-label={Knoppen.aria_label}>
                  {Knoppen.Naam}
                </Link>
              )}
            </>
          );
        })}
      </nav>
    </header>
  );
}
export default Header;
