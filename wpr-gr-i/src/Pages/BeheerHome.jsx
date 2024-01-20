import { useEffect, useState } from "react";
import Header from "../Components/Header.jsx";
import "./Beheer.css";
import { Navigate, useNavigate } from "react-router-dom";
import background from "./backgroundWithGradient.png";
import { jwtDecode } from "jwt-decode";

// import { DeskundigePage } from './BeheerDeskundige'

const headerButtons = [
  { Naam: "Goed te keuren opdrachten", href: "" },
  { Naam: "Uitloggen", href: "/" },
];

function Beheer() {
  const navigate = useNavigate();

  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [role, setRole] = useState("");

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("token");
    // console.log("test");
    // console.log(loggedInUser);

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

  function ErvaringDeskundige() {
    navigate("/BeheerdersPortaal/Deskundigen");
  }
  function Opdrachten() {
    navigate("/BeheerdersPortaal/Opdrachten");
  }
  function Bedrijven() {
    navigate("/BeheerdersPortaal/Bedrijven");
  }

  if (token !== "null") {
    // console.log(token);
    // console.log(role);

    if (role.includes("beheerder")) {
      return (
        <>
          <Header Titel={"Beheerderspagina"} Knoppen={headerButtons} />
          <div
            className="App"
            style={{ backgroundImage: `url(${background})` }}
          >
            <style>
              {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,200&family=Roboto:ital,wght@1,300&display=swap');
          `}
            </style>

            <div className="Blokjes">
              <button className="knop" onClick={ErvaringDeskundige}>
                Overzicht van ervaringsdeskundigen
              </button>
              <button className="knop" onClick={Bedrijven}>
                Overzicht van bedrijven
              </button>
              <button className="knop" onClick={Opdrachten}>
                Overzicht van opdrachten
              </button>
            </div>
          </div>
        </>
      );
    } 
  } else {
    return <Navigate replace to="/Unauthorized" />;
    // console.log("p1");
    // return <>test</>;
  }
}
export default Beheer;
