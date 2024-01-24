// VoorPagina.jsx
import React, { useEffect, useState } from "react";
import "./VoorPagina.css";
import background from "./backgroundWithGradient.png";
import Login from "../Components/pop-ups/Login";
import Registreren from "../Components/pop-ups/Registreren/Registreren";
import GoogleRegistreren from "../Components/pop-ups/Registreren/GoogleRegistreren";
import ReactGA from "react-ga4";


function VoorPagina() {
  const [loginOverlay, setLoginOverlay] = useState(false);
  const [registreerOverlay, setRegistreerOverlay] = useState(false);
  const [registreerGoogleOverlay, setRegistreerGoogleOverlay] = useState(false);
  const [googleUser, setGoogleUser] = useState();
  const [googleToken, setGoogleToken] = useState();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title:"Hoofd Pagina" })
  })

  const handleOverlayLoginClick = () => {
    // Track login button click event
    ReactGA.event({
      category: 'Button Click',
      action: 'Login Button Click',
      label: 'VoorPagina',
    });

    setLoginOverlay(!loginOverlay);

    window.gtag('set', { 'dimension1': 'Logged In' }); 
  };

  const handleOverlayRegistreerClick = () => {
    setRegistreerOverlay(!registreerOverlay);
  };

  const handleOverlayGoogleRegistreerClick = () => {
    // Track Google login button click event
    ReactGA.event({
      category: 'Button Click',
      action: 'Google Login Button Click',
      label: 'VoorPagina',
    });

    // Assume the user is logged in after successful Google login
    setRegistreerGoogleOverlay(!registreerGoogleOverlay);

    // Track user login status in Google Analytics 4 custom dimension using gtag
    window.gtag('set', { 'dimension1': 'Logged In' }); // Use the appropriate dimension index
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
