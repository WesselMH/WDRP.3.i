import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./BedrijvenPortaal.css";
import background from "./backgroundWithGradient.png";
import { Link, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const opdracht = [
  { title: "Opdracht 1", bedrijf: "Mediamarkt", id: 1 },
  { title: "Opdracht 2", bedrijf: "Microsoft", id: 2 },
  { title: "Opdracht 3", bedrijf: "Albert Heijn", id: 3 },
  { title: "Opdracht 4", bedrijf: "Albert Heijn", id: 4 },
  { title: "Opdracht 5", bedrijf: "Albert Heijn", id: 5 },
  { title: "Opdracht 6", bedrijf: "Albert Heijn", id: 6 },
  { title: "Opdracht 7", bedrijf: "Albert Heijn", id: 7 },
  { title: "Opdracht 8", bedrijf: "Albert Heijn", id: 8 },
  { title: "Opdracht 9", bedrijf: "Albert Heijn", id: 9 },
  { title: "Opdracht 10", bedrijf: "Albert Heijn", id: 10 },
];

const listOpdrachten = opdracht.map((opdracht) => (
  <Link to={opdracht.href}>
    <li key={opdracht.id}>
      <strong>{opdracht.title}</strong>
      <p>{opdracht.bedrijf}</p>
    </li>
  </Link>
));

const headerButtons = [
  { Naam: "Profiel updaten", href: "/BedrijvenPortaal/Bijwerken" },
  { Naam: "Opdracht plaatsen", href: "/BedrijvenProtaal/NieuweOpdracht" },
  { Naam: "Uitloggen", href: "/" },
];

function BedrijvenPortaal() {
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
      // console.log(loggedInUserrole);
      // setToken(loggedInUser);
      setRole(loggedInUserrole);
    }
    // console.log(role);
  }, []);

  // console.log(token, role);

  if (token !== "null") {
    if (role.includes("bedrijf")) {
      return (
        <>
          <Header Titel={"Bedrijven portaal"} Knoppen={headerButtons} />
          <div
            className="bedrijvenportaal"
            style={{ backgroundImage: `url(${background})` }}
          >
            <ul className="listOpdracht">
              <h2>Open Opdrachten</h2>
              {listOpdrachten}
            </ul>
          </div>
        </>
      );
    } 
  } else {
    return <Navigate replace to="/Unauthorized" />;
  }
}

export default BedrijvenPortaal;
