import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import BedrijvenOpdracht from "../../Components/BedrijvenOpdracht";
import BedrijvenBerichten from "../../Components/BedrijvenBerichten";
import BedrijvenItem from "../../Components/BedrijvenItem";
import "./BedrijvenPortaal.css";
import background from "../backgroundWithGradient.png";
import { Link, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// const opdracht = [
//   { title: 'Toegankelijkheid voor Mensen met Beperkingen', bedrijf: 'Accessibility Foundation', beschrijving: "Studie naar Kwaliteit van Leven bij Mensen met Beperkingen: Een diepgaand onderzoek naar de dagelijkse hindernissen en mogelijkheden tot verbetering. Het doel is waardevolle inzichten te vergaren ter bevordering van levenskwaliteit en inclusie voor deze individuen.", datum: "12-12-12", id: 1 },
//   { title: 'Inclusie en Welzijn bij Mensen met Beperkingen', bedrijf: 'Bartiméus', beschrijving: "Onderzoek naar Levenskwaliteit bij Personen met een Beperking: Een analyse van sociale inclusie en dagelijkse uitdagingen, met het doel bij te dragen aan verbeterde maatschappelijke participatie en welzijn.", datum: "12-12-12", id: 2 },
//   { title: 'Toegankelijkheidsbeoordeling 2023', bedrijf: 'Mediamarkt', beschrijving: "Deze enquête is ontworpen om inzicht te krijgen in uw ervaringen met de toegankelijkheid van onze producten/diensten/ruimtes. Neem alstublieft de tijd om de vragen eerlijk en gedetailleerd te beantwoorden. Uw input zal direct bijdragen aan het verbeteren van onze inspanningen op het gebied van inclusiviteit.", datum: "12-12-12", href: "/Opdrachten", id: 3 },
// ];

function listOpdrachten(opdrachten) {
  console.log("listOpdrachten");

  console.log(opdrachten);
  return opdrachten.map((opdracht) => (
    <BedrijvenOpdracht key={opdracht.id} opdracht={opdracht} />
  ));
}

const berichten = [
  { onderwerp: "Bericht onderwerp", afzender: "Afzender", id: 1 },
  {
    onderwerp: 'Vragen betreft onderzoek "inclusie en welzijn"',
    afzender: "Phil Collins",
    id: 2,
  },
];

const listBerichten = berichten.map((berichten) => (
  <BedrijvenBerichten key={berichten.id} berichten={berichten} />
));

const headerButtons = [
  { Naam: "Profiel updaten", href: "/BedrijvenPortaal/Bijwerken" },
  { Naam: "Opdracht plaatsen", href: "/BedrijvenPortaal/OpdrachtPlaatsen" },
  { Naam: "Tracking info", href: "/Clickstream" },
  { Naam: "Uitloggen", href: "/" },
];

const InboxButton = (
  <Link to={""} className="full-size">
    <div className="bedrijvenInbox">
      <p>Postvak IN: {berichten.length}</p>
    </div>
  </Link>
);
function BedrijvenPortaal() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [role, setRole] = useState("");
  const [plaatsenOverlay, setPlaatsenOverlay] = useState(false);
  const [opdrachten, setOpdrachten] = useState([]);

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

  useEffect(() => {
    async function getOnderzoek() {
      console.log("getOnderzoek");
      await fetch("http://localhost:5155/api/Onderzoek/")
        .then((results) => {
          return results.json();
        })
        //code to change the opdrachten array
        .then((data) => {
          setOpdrachten(data);
        });
    }
    getOnderzoek();
  }, []);

  const handleOverlayPlaatsenClick = () => {
    setPlaatsenOverlay(!plaatsenOverlay);
  };

  // console.log(token, role);

  if (token !== "null") {
    if (role.includes("bedrijf")) {
      return (
        <>
          <Header Titel={"Bedrijven portaal"} Knoppen={headerButtons} />
          <div
            className="App bedrijvenportaal"
            style={{ backgroundImage: `url(${background})` }}
          >
            {BedrijvenItem("Open Opdrachten", listOpdrachten(opdrachten))}
            {BedrijvenItem("Berichten", InboxButton, listBerichten)}
            {BedrijvenItem("Chat", InboxButton, listBerichten)}
          </div>
        </>
      );
    }
  } else {
    return <Navigate replace to="/Unauthorized" />;
  }
}
export default BedrijvenPortaal;
