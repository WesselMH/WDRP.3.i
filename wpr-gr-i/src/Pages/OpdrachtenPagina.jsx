import React from "react";
import "./OpdrachtenPagina.css";
import background from "../achtergrondfoto.jpg";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Opdracht from "../Components/Opdracht";

function OpdrachtenBox({ opdrachten }) {

  return (
    <>
      {opdrachten.map((opdracht) => (
        <Link to={opdracht.id}>
          <Opdracht key={opdracht.id} opdracht={opdracht} />
        </Link>
      ))}
    </>
  );
}

const buttons = [
  { Naam: "Beschikbare Opdrachten", href: "/iest" },
  { Naam: "Uitloggen", href: "/" },
];

function OpdrachtenPagina() {

  const [opdrachten, setOpdrachten] = useState([]);

  //word geladen als de component eerst laad.
  useEffect(() => {
    fetch("http://localhost:5155/api/Onderzoek")
      .then((results) => { return results.json(); })
      //code to change the opdrachten array
      .then(data => { setOpdrachten(data) })
  },
    []);

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
            <OpdrachtenBox opdrachten={opdrachten} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OpdrachtenPagina;
