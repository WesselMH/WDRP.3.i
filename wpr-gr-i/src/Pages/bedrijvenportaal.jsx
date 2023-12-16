import React from "react";
import Header from "../Components/Header";
import "./BedrijvenPortaal.css";
import background from "./backgroundWithGradient.png";

const opdracht = [
  { title: 'Opdracht 1', bedrijf: 'Mediamarkt', id: 1 },
  { title: 'Opdracht 2', bedrijf: 'Microsoft', id: 2 },
  { title: 'Opdracht 3', bedrijf: 'Albert Heijn', id: 3 },
  { title: 'Opdracht 4', bedrijf: 'Albert Heijn', id: 4 },
  { title: 'Opdracht 5', bedrijf: 'Albert Heijn', id: 5 },
  { title: 'Opdracht 6', bedrijf: 'Albert Heijn', id: 6 },
  { title: 'Opdracht 7', bedrijf: 'Albert Heijn', id: 7 },
  { title: 'Opdracht 8', bedrijf: 'Albert Heijn', id: 8 },
  { title: 'Opdracht 9', bedrijf: 'Albert Heijn', id: 9 },
  { title: 'Opdracht 10', bedrijf: 'Albert Heijn', id: 10 },
];

const listOpdrachten = opdracht.map(opdracht =>
  <a href="/#">
    <li key={opdracht.id}>
      <strong>{opdracht.title}</strong>
      <p>{opdracht.bedrijf}</p>
    </li>
  </a>
);

const headerButtons = [
  { Naam: "Profiel updaten", href: "/BedrijvenProtaal/Update" },
  { Naam: "Opdracht plaatsen", href: "/BedrijvenProtaal/NieuweOpdracht" },
  { Naam: "Uitloggen", href: "/" },
];


function BedrijvenPortaal() {
  return (
    <div>
      <Header Titel={"Bedrijven portaal"} Knoppen={headerButtons} />
      <div className="bedrijvenportaal" style={{ backgroundImage: `url(${background})` }}>
        <ul className="listOpdracht">
          <h2>Open Opdrachten</h2>
          {listOpdrachten}
        </ul>
      </div>
    </div>
  )
}



export default BedrijvenPortaal;