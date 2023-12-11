import React from "react";
import Header from "../Components/Header";
import "./bedrijvenportaal.css";
import background from "./backgroundWithGradient.png";

const opdracht = [
    { title: 'Opdracht 1', bedrijf:'Mediamarkt', id: 1 },
    { title: 'Opdracht 2', bedrijf:'Microsoft', id: 2 },
    { title: 'Opdracht 3', bedrijf:'Albert Heijn', id: 3 },
  ];

  const listOpdrachten = opdracht.map(opdracht =>
    <li key={opdracht.id}>
      <strong>{opdracht.title}</strong>
      <p>{opdracht.bedrijf}</p>
    </li>
  );  

function BedrijvenPortaal() {
    return (
        <div className="bedrijvenportaal" style={{ backgroundImage: `url(${background})` }}>
            <Header Titel={"Bedrijvenportaal"} Knop1={"Profiel Updaten"} Knop2={"Opdracht Plaatsen"} />
            <ul className="listOpdracht">{listOpdrachten}</ul>
        </div>
    )
}



export default BedrijvenPortaal;