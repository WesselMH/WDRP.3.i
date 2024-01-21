import React from "react";
import "./OpdrachtenPagina.css";
import background from "../../achtergrondfoto.jpg";
import Header from "../../Components/Header";
import Opdracht from "../../Components/Opdracht";

const opdrachten = [
  {
    title: "Toegankelijkheidsbeoordeling 2023",
    bedrijf: "Mediamarkt",
    beschrijving:
      "Deze enquête is ontworpen om inzicht te krijgen in uw ervaringen met de toegankelijkheid van onze producten/diensten/ruimtes. Neem alstublieft de tijd om de vragen eerlijk en gedetailleerd te beantwoorden. Uw input zal direct bijdragen aan het verbeteren van onze inspanningen op het gebied van inclusiviteit.",
    datum: "12-12-12",
    id: 1,
  },
  {
    title: "Inclusie en Welzijn bij Mensen met Beperkingen",
    bedrijf: "Bartiméus",
    beschrijving:
      "Onderzoek naar Levenskwaliteit bij Personen met een Beperking: Een analyse van sociale inclusie en dagelijkse uitdagingen, met het doel bij te dragen aan verbeterde maatschappelijke participatie en welzijn.",
    datum: "12-12-12",
    id: 2,
  },
  {
    title: "Toegankelijkheid voor Mensen met Beperkingen",
    bedrijf: "Accessibility Foundation",
    beschrijving:
      "Studie naar Kwaliteit van Leven bij Mensen met Beperkingen: Een diepgaand onderzoek naar de dagelijkse hindernissen en mogelijkheden tot verbetering. Het doel is waardevolle inzichten te vergaren ter bevordering van levenskwaliteit en inclusie voor deze individuen.",
    datum: "12-12-12",
    id: 3,
  },
  {
    title: "Multimedia Toegankelijkheidsbeoordeling 2023",
    bedrijf: "Albert Heijn",
    beschrijving:
      "Een internet interview om inzicht te krijgen in uw ervaringen met de toegankelijkheid van onze multimediacontent, platforms en services. ",
    datum: "12-12-12",
    id: 4,
  },
];

function OpdrachtenBox() {
  return (
    <>
      {opdrachten.map((opdracht) => (
        <Opdracht key={opdracht.id} opdracht={opdracht} />
      ))}
    </>
  );
}

const buttons = [
  { Naam: "Beschikbare Opdrachten", href: "/iest" },
  { Naam: "Uitloggen", href: "/" },
];

function OpdrachtenPagina() {
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
