import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link, Navigate, useLocation } from "react-router-dom";
import background from "./backgroundWithGradient.png";
import "./HomePortaal.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ReactGA from 'react-ga4'

const headerButtons = [
  { Naam: "Profiel updaten", href: "/BedrijvenPortaal/Bijwerken" },
  { Naam: "Uitloggen", href: "/" },
];

function HomePortaal() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [role, setRole] = useState("");
  const location = useLocation();

  const [userData, SetUserData] = useState("");
 
  const chatButtonHandler = () => {
    ReactGA.event({
      category: 'Button Click',
      action: 'Chat Button Click',
      label: 'HomePortaal',
    });
  };

  const AfgerondeButtonHandler = () => {
    ReactGA.event({
      category: 'Button Click',
      action: 'Afgeronde Opdrachten Button Click',
      label: 'HomePortaal',
    });
  }

  const userInfo = async () => {
    await axios
      .get("http://wpr-i-backend.azurewebsites.net/api/ErvaringsDeskundige/user/getMyInfo", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then(
        (response) => {
          console.log(response.data);
          SetUserData(JSON.stringify(response.data))
        },
        (error) => {
          console.log(error);
          console.log(error.response);
        }
      );
  };

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("token");
    ReactGA.send({ hitType: "pageview", page: location.pathname, title: "Home Portaal" });
    if (loggedInUser !== "null") {
      const loggedInUserrole =
        jwtDecode(loggedInUser)[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];
      // console.log(loggedInUserrole);
      // setToken(loggedInUser);
      setRole(loggedInUserrole);
    }
  }, []);

  if (token !== "null") {
    if (role.includes("ervaringsDeskundige")) {
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
              <Link to="/opdrachtenaangemeld" className="HomePortaal-Button" aria-label="Opdrachten knop">
                Opdrachten
              </Link>
              <Link to="" className="HomePortaal-Button" aria-label="Afgeronde opdrachten knop" onClick={AfgerondeButtonHandler}>
                Afgeronde opdrachten
              </Link>
              <Link to="" className="HomePortaal-Button" aria-label="Chat knop" onClick={chatButtonHandler}>
                Chat
              </Link>
            </div>
            <button onClick={userInfo}>click me voor user info</button>
            <p>{userData}</p>
            <div className="Newsfeed" aria-label="Nieuws feed">
              <iframe
                width="850"
                height="1600"
                src="https://rss.app/embed/v1/list/nzu1XvGKmPML2e10"
                frameborder="0"
                title="Nieuws feed"
              ></iframe>
            </div>
          </div>
        </>
      );
    }
  } else {
    return <Navigate replace to="/Unauthorized" />;
  }
}
export default HomePortaal;
