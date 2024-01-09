import React from "react";
import Header from "../Components/Header";
import BedrijvenOpdracht from "../Components/BedrijvenOpdracht";
import BedrijvenBerichten from "../Components/BedrijvenBerichten";
import BedrijvenItem from "../Components/BedrijvenItem";
import "./BedrijvenPortaal.css";
import background from "../achtergrondfoto.jpg";
import { Link } from "react-router-dom";

const opdracht = [
  { title: 'Toegankelijkheid voor Mensen met Beperkingen', bedrijf: 'Accessibility Foundation', beschrijving: "Studie naar Kwaliteit van Leven bij Mensen met Beperkingen: Een diepgaand onderzoek naar de dagelijkse hindernissen en mogelijkheden tot verbetering. Het doel is waardevolle inzichten te vergaren ter bevordering van levenskwaliteit en inclusie voor deze individuen.", datum: "12-12-12", id: 1 },
  { title: 'Inclusie en Welzijn bij Mensen met Beperkingen', bedrijf: 'Bartiméus', beschrijving: "Onderzoek naar Levenskwaliteit bij Personen met een Beperking: Een analyse van sociale inclusie en dagelijkse uitdagingen, met het doel bij te dragen aan verbeterde maatschappelijke participatie en welzijn.", datum: "12-12-12", id: 2 },
  { title: 'Toegankelijkheidsbeoordeling 2023', bedrijf: 'Mediamarkt', beschrijving: "Deze enquête is ontworpen om inzicht te krijgen in uw ervaringen met de toegankelijkheid van onze producten/diensten/ruimtes. Neem alstublieft de tijd om de vragen eerlijk en gedetailleerd te beantwoorden. Uw input zal direct bijdragen aan het verbeteren van onze inspanningen op het gebied van inclusiviteit.", datum: "12-12-12", href: "/Opdrachten", id: 3 },
];

const listOpdrachten = opdracht.map((opdracht) => (
  <BedrijvenOpdracht key={opdracht.id} opdracht={opdracht} />
));

const berichten = [
  { onderwerp: "Bericht onderwerp", afzender: "Afzender", id: 1 },
  { onderwerp: "Vragen betreft onderzoek \"inclusie en welzijn\"", afzender: "Phil Collins", id: 2 }
];

const listBerichten = berichten.map((berichten) => (
  <BedrijvenBerichten key={berichten.id} berichten={berichten} />
));


const headerButtons = [
  { Naam: "Profiel updaten", href: "/BedrijvenPortaal/Bijwerken" },
  { Naam: "Opdracht plaatsen", href: "/BedrijvenPortaal/NieuweOpdracht" },
  { Naam: "Uitloggen", href: "/" },
];

const InboxButton =
  <Link to={""}>
    <div className="bedrijvenInbox">
      <p>Postvak IN: {berichten.length}</p>
    </div>
  </Link>
  ;

function BedrijvenPortaal() {
  return (
    <>
      <Header Titel={"Bedrijven portaal"} Knoppen={headerButtons} />
      <div
        className="bedrijvenportaal"
        style={{ backgroundImage: `url(${background})` }}
      >
        {BedrijvenItem("Open Opdrachten", listOpdrachten)}
        {BedrijvenItem("Berichten", InboxButton, listBerichten)}
        {BedrijvenItem("Chat", InboxButton, listBerichten)}
      </div>
    </>
  );
}

export default BedrijvenPortaal;
