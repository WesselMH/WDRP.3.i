import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link, Navigate } from "react-router-dom";
import background from "./backgroundWithGradient.png";
import "./HomePortaal.css";
import ReactGA from 'react-ga4'
import { useLocation } from 'react-router-dom'


const headerButtons = [
  { Naam: "Profiel updaten", href: "/BedrijvenPortaal/Bijwerken" },
  { Naam: "Uitloggen", href: "/" },
];

function HomePortaal() {
  const location = useLocation();
  useEffect(() => {
    document.title = 'HomePortaal'
    // Track page view
    ReactGA.send({ hitType: "pageview", page: location.pathname, title: document.title });

  }, []);

  const trackOpdrachtenButtonClick = () => {
    ReactGA.event({
      category: 'Button Click',
      action: 'Opdrachten Button Click',
      label: 'HomePortaal',
    });
  };

  const trackAfgerondeOpdrachtenButtonClick = () => {
    ReactGA.event({
      category: 'Button Click',
      action: 'Afgeronde Opdrachten Button Click',
      label: 'HomePortaal',
    });
  };
  //   const [authenticated, setauthenticated] = useState(
  //     sessionStorage.getItem("authenticated")
  //   );
  //   const [role, setRole] = useState(sessionStorage.getItem("role"));

  //   useEffect(() => {
  //     const loggedInUser = sessionStorage.getItem("authenticated");
  //     const loggedInUserrole = sessionStorage.getItem("role");

  //     if (loggedInUser) {
  //       setauthenticated(loggedInUser);
  //       setRole(loggedInUserrole);
  //     }
  //   }, [authenticated, role]);

  // if (authenticated && role.includes("ervaringsDeskundige")) {
  return (
    <>
      <Header Titel={"HomePortaal"} Knoppen={headerButtons}></Header>
      <div
        className="HomePortaal"
        style={{ backgroundImage: `url(${background})` }}
      >
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        </style>
        <div className="HomePortaal-Button-Container">
          <Link to="/opdrachten" className="HomePortaal-Button" onClick={trackOpdrachtenButtonClick}>
            Opdrachten
          </Link>
          <Link to="" className="HomePortaal-Button" onClick={trackAfgerondeOpdrachtenButtonClick}>
            Afgeronde opdrachten
          </Link>
        </div>
        <div className="Newsfeed">
          <iframe
            width="850"
            height="1600"
            src="https://rss.app/embed/v1/list/nzu1XvGKmPML2e10"
            frameborder="0"
          ></iframe>{" "}
        </div>
      </div>
    </>
  );
}
// else {
//   return <Navigate replace to="/Unauthorized" />;
// }
// }
export default HomePortaal;
