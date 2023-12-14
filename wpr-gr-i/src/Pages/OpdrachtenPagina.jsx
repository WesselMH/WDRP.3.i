import React from "react";
import "./OpdrachtenPagina.css";
import background from "./backgroundWithGradient.png";
import Header from "../Components/Header";

const opdracht = [
  { title: 'Opdracht 1', bedrijf: 'Mediamarkt', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 1 },
  { title: 'Opdracht 2', bedrijf: 'Microsoft', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 2 },
  { title: 'Opdracht 3', bedrijf: 'Albert Heijn', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 3 },
  { title: 'Opdracht 4', bedrijf: 'Albert Heijn', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 4 },
  { title: 'Opdracht 5', bedrijf: 'Albert Heijn', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 5 },
  { title: 'Opdracht 6', bedrijf: 'Albert Heijn', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 6 },
  { title: 'Opdracht 7', bedrijf: 'Albert Heijn', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 7 },
  { title: 'Opdracht 8', bedrijf: 'Albert Heijn', beschrijving: "Een internet interview over ervaring", datum: "12-12-12", id: 8 }

];

const listOpdrachten = opdracht.map(opdracht =>
  <a href="/#">
    <li key={opdracht.id}>
      <h3>{opdracht.title}</h3>
      <p>{opdracht.bedrijf}</p>
      <p>{opdracht.beschrijving}</p>
      <p>{opdracht.datum}</p>
    </li>
  </a>
);

let buttons = [
  { label: "Terug naar home", href: "/#" },
  { label: "Voeg toe", href: "/#" },
  { label: "Voeg toe", href: "/#" },
];

function OpdrachtenPagina() {
  return (
    <div>
      <Header Titel={"Opdrachten"} Knoppen={buttons} />
      <div className="OpdrachtenPagina" style={{ backgroundImage: `url(${background})` }}>
        <ul className="listOpdracht">
          <div className="listOpdrachtHeader">
            <strong>Titel</strong>
            <strong>Bedrijf</strong>
            <strong>Beschrijving</strong>
            <strong>Datum gepost</strong>
          </div>
          {listOpdrachten}
        </ul>
      </div>
    </div>
  );
}

export default OpdrachtenPagina;