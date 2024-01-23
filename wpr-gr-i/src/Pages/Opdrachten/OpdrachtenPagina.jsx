import React from "react";
import "./OpdrachtenPagina.css";
import { useEffect, useState } from "react";
import background from "../../achtergrondfoto.jpg";
import Header from "../../Components/Header";
import Opdracht from "../../Components/Opdracht";

const buttons = [
  { Naam: "Aangemelde Opdrachten", href: "/opdrachtenaangemeld" },
  { Naam: "Homeportaal", href: "/HomePortaal" },
  { Naam: "Uitloggen", href: "/" },
];

function OpdrachtenPagina() {
  const [opdrachten, setOpdrachten] = useState([]);

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
    fetch("http://localhost:5155/api/Onderzoek")
      .then((results) => {
        return results.json();
      })
      //code to change the opdrachten array
      .then((data) => {
        setOpdrachten(data);
      });
  }, []);



  //   {
  //     //Title, typeopdracht, omschrijving, datum, locatie
  //      "titel": "Dit is een titel",
  //      "beschrijving":"omschrijving",
  //      "locatie":"",
  //      "datum":"2024-01-14",
  //      "soortOnderzoek":{
  //          "id":"",
  //          "opties":"optie"
  //      }
  //  }

  return (
    <div>
      <Header Titel={"Opdrachten"} Knoppen={buttons} />
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

export default OpdrachtenPagina;