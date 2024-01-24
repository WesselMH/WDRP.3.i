// VoorPagina.jsx
import React, { useEffect, useState } from "react";
import "./VoorPagina.css";
import background from "./backgroundWithGradient.png";
import Login from "../Components/pop-ups/Login";
import Registreren from "../Components/pop-ups/Registreren/Registreren";
import GoogleRegistreren from "../Components/pop-ups/Registreren/GoogleRegistreren";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";


function VoorPagina() {
  const [loginOverlay, setLoginOverlay] = useState(false);
  const [registreerOverlay, setRegistreerOverlay] = useState(false);
  const [registreerGoogleOverlay, setRegistreerGoogleOverlay] = useState(false);
  const [googleUser, setGoogleUser] = useState();
  const [googleToken, setGoogleToken] = useState();
  // const location = useLocation();

  useEffect(() => {
    // ReactGA.send({ hitType: "pageview", page: location.pathname, title: "Hoofd Pagina" });
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title:"Hoofd Pagina" })
  })

  const handleOverlayLoginClick = () => {
    ReactGA.event({
      category: 'Button Click',
      action: 'Login Button Click',
      label: 'VoorPagina',
    });
    setLoginOverlay(!loginOverlay);
  };

  const handleOverlayRegistreerClick = () => {
    setRegistreerOverlay(!registreerOverlay);
  };

  const handleOverlayGoogleRegistreerClick = () => {
    ReactGA.event({
      category: 'Google Login Click',
      action: 'Login Button Click',
      label: 'VoorPagina',
    });
    setRegistreerGoogleOverlay(!registreerGoogleOverlay);
  };

  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,200&family=Roboto:ital,wght@1,300&display=swap');
        `}
        </style>

        {/* <nav className="navbar">
        <Link to="/BedrijvenPortaal" className="voorpagina-navbar-knop">
          BedrijvenPortaal
        </Link>

        <Link to="/BeheerdersPortaal" className="voorpagina-navbar-knop">
          Beheerdersportaal
        </Link>
      </nav> */}
        <div className="flex-center flex-direction-column">
          <h1 className="voorPagina-titel">
            Een beter online bestaan begint hier
          </h1>
          <h4 className="voorpagina-tekst-onder-titel">
            Doe mee aan uiteenlopende onderzoeken en geef ons inzicht in jouw
            ervaringen. Door jouw deelname help je ons niet alleen om jouw
            beperking beter te begrijpen, maar stellen we ons ook in staat om
            het internet toegankelijker te maken, speciaal voor jou.
          </h4>
        </div>

        <div className="button-container">
          {/* hierdoor werkt tab beter voor keyboard users*/}

          <button
            className="Voorpagina-Button"
            onClick={handleOverlayLoginClick}
          >
            Login
          </button>

          {/* <Link to={"/Login"} className="Voorpagina-Button">
          Login
        </Link> */}

          <button
            className="Voorpagina-Button"
            onClick={handleOverlayRegistreerClick}
          >
            Registreren
          </button>
        </div>
      </div>
      {loginOverlay && (
        <div className="overlay">
          <Login
            handleOverlayLoginClick={handleOverlayLoginClick}
            handleOverlayRegistreerClick={handleOverlayRegistreerClick}
            handleOverlayGoogleRegistreerClick={
              handleOverlayGoogleRegistreerClick
            }
            setGoogleUser={setGoogleUser}
            setGoogleToken={setGoogleToken}
          />
        </div>
      )}
      {registreerOverlay && (
        <div className="overlay">
          <Registreren
            handleOverlayRegistreerClick={handleOverlayRegistreerClick}
          />
        </div>
      )}
      {registreerGoogleOverlay && (
        <div className="overlay">
          <GoogleRegistreren
            handleOverlayGoogleRegistreerClick={
              handleOverlayGoogleRegistreerClick
            }
            googleUser={googleUser}
            googleToken={googleToken}
          />
        </div>
      )}
    </>
  );
}

export default VoorPagina;
