import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link, Navigate } from "react-router-dom";
import background from "./backgroundWithGradient.png";
import "./HomePortaal.css";
import { jwtDecode } from "jwt-decode";

const headerButtons = [
  { Naam: "Profiel updaten", href: "/BedrijvenPortaal/Bijwerken" },
  { Naam: "Uitloggen", href: "/" },
];

function HomePortaal() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [role, setRole] = useState("");

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("token");

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
              <Link to="/opdrachten" className="HomePortaal-Button">
                Opdrachten
              </Link>
              <Link to="" className="HomePortaal-Button">
                Afgeronde opdrachten
              </Link>
              <Link to="" className="HomePortaal-Button">
                Chat
              </Link>
            </div>
            <div className="Newsfeed">
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
