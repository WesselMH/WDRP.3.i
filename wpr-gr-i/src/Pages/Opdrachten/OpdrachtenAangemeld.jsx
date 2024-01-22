import React from "react";
import "./OpdrachtenPagina.css";
import { useEffect, useState } from "react";
import background from "../../achtergrondfoto.jpg";
import Header from "../../Components/Header";
import Opdracht from "../../Components/Opdracht";
import { jwtDecode } from "jwt-decode";


const buttons = [
  { Naam: "Alle Opdrachten", href: "/opdrachten" },
  { Naam: "Homeportaal", href: "/HomePortaal" },
  { Naam: "Uitloggen", href: "/" },
];

function OpdrachtenAangemeld() {

  const [opdrachten, setOpdrachten] = useState([]);
  const loggedInUser = sessionStorage.getItem("token");
  const loggedInUserrole = jwtDecode(loggedInUser)
  const userId = loggedInUserrole.id;
  console.log(userId);

  function OpdrachtenBox() {
    return (
      <>
        {opdrachten.map((opdracht) => (
            <Opdracht key={opdracht.id} opdracht={opdracht} />
        ))}
      </>
    );
  }

  //word geladen als de component eerst laad.
  useEffect(() => {
    fetch(`http://localhost:5155/api/ErvaringsDeskundige/Onderzoeken?id=${userId}`)
      .then((results) => {
        return results.json();
      })
      //code to change the opdrachten array
      .then((data) => {
        setOpdrachten(data);
      });
  }, []);

  return (
    <div>
      <Header Titel={"Aangemelde Opdrachten"} Knoppen={buttons} />
      <div
        className="opdrachtenPagina"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="opdrachten-wrapper">
          <ul>
            <OpdrachtenBox />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OpdrachtenAangemeld;
