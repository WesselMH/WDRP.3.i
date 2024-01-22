import { useEffect, useState } from "react";
import Header from "../Components/Header.jsx";
import "./Beheer.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import background from "./backgroundWithGradient.png";

// import { DeskundigePage } from './BeheerDeskundige'

const Knoppen = [
  { Naam: "Goed te keuren opdrachten", href: "" },
  { Naam: "Uitloggen", href: "/" },
];

function Beheer() {
    const navigate = useNavigate();


  const [authenticated, setauthenticated] = useState(
    sessionStorage.getItem("authenticated")
  );
  const [role, setRole] = useState(sessionStorage.getItem("role"));

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("authenticated");
    const loggedInUserrole = sessionStorage.getItem("role");

    if (loggedInUser) {
      setauthenticated(loggedInUser);
      setRole(loggedInUserrole);
    }
  }, [authenticated, role]);

  function ErvaringDeskundige () {
    navigate("/BeheerdersPortaal/Deskundigen")
  }
  function Opdrachten () {
    navigate("/BeheerdersPortaal/Opdrachten")
  }
  function Bedrijven () {
    navigate("/BeheerdersPortaal/Bedrijven")
  }
  // if (authenticated && role.includes("beheerder")) {
    return (
      <>
        {" "}
        <Header Titel={"Beheerderspagina"} Knoppen={Knoppen} />
        <div className="App" style={{ backgroundImage: `url(${background})` }}>
          <style>
            {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,200&family=Roboto:ital,wght@1,300&display=swap');
        `}
          </style>

          <div className="Blokjes">
            
            <button className="knop" onClick={ErvaringDeskundige}>Overzicht van ervaringsdeskundigen</button>
            <button className="knop" onClick={Bedrijven}>Overzicht van bedrijven</button>
            <button className="knop" onClick={Opdrachten}>Overzicht van opdrachten</button>
            {/* <Link
              className="knop"
              label={"Overzicht van bedrijven"}
              to={"/BeheerdersPortaal/Bedrijven"}
            />
            <Link
              className="knop"
              label={"Overzicht van opdrachten"}
              to={"/BeheerdersPortaal/Opdrachten"}
            /> */}
          </div>
        </div>
      </>
    );
  // } else {
  //   return <Navigate replace to="/Unauthorized" />;
  // }
}
export default Beheer;
