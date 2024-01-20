import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import background from "../achtergrondfoto.jpg";
import Header from "../Components/Header";


function OpdrachtInformatie() {
    var urlArray = window.location.pathname.split('/');
    const [opdracht, setOpdracht] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5155/api/Onderzoek/" + urlArray[2])
            .then((results) => { return results.json(); })
            //code to change the opdrachten array
            .then(data => { setOpdracht(data) })
    },
        []);

    function postSubscribe(decodedToken) {
        const id = decodedToken.id;
        const gebruikersnaam = decodedToken.name;
        //Moet modal/popup navigeerbaar maken met tab. volgens docent.
        // Boolean "opdracht gedaan" in ErvaringsDeskundigeOnderzoek/tussentabel zodat bedrijf kan zien wie klaar is met onderzoek.
        axios.post(` http://localhost:5155/api/ErvaringsDeskundige/AddOnderzoek/${urlArray[2]}`, {
            //id opdracht
            //id gebruiker    
            Id: id,
            gebruikersNaam: "string",
            wachtwoord: "string",
            emailAccount: "string",
            voornaam: "string",
            achternaam: "string",
            geboorteDatum: "2024-01-16",
            postCode: "string",
            telefoonNummer: "string",

            headers: {
                "Access-Control-Allow-Origin": "http://localhost:5155/api/",
                // "Access-Control-Allow-Origin": "https://wpr-i-backend.azurewebsites.net/api/",
                "Access-Control-Allow-Methods":
                    "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Custom-Header",
                "Content-Type": "application/json",
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function getGebruiker() {
        const token = sessionStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        postSubscribe(decodedToken);
    }

    const buttons = [
        { Naam: "Terug", href: "/Opdrachten" }
    ];

    const date = opdracht.datum.split('T');

    //blijkt dat gerealateerde objecten later worden opgevraagt?
    //werkt niet voor een of ander reden.
    // const bedrijfNaam = opdracht.uitvoerder.gebruikersNaam;

    return (
        <>
            <Header Titel={"Opdrachten"} Knoppen={buttons} />

            <div
                className="opdrachtenPagina"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="opdracht-component">
                    <div className="opdracht-wrapper">
                        <div className="opdracht-header">
                            <h1 className="opdracht-titel">{opdracht.titel}</h1>
                            <h2 className="opdracht-opdrachtgever">{"uitvoerder"}</h2>
                            {/* <h2 className="opdracht-opdrachtgever">{opdracht.uitvoerder.gebruikersNaam}</h2> */}
                        </div>
                        <div className="opdracht-details">
                            <strong className="opdracht-omschrijving">{"Beschijving opdracht:"}</strong>
                            <p className="opdracht-omschrijving">{opdracht.beschrijving}</p><br />
                            <strong className="opdracht-omschrijving">{"Datum opdracht:"}</strong>
                            <p className="opdracht-omschrijving">{date[0]}</p><br />
                            <strong className="opdracht-omschrijving">{"Locatie:"}</strong>
                            <p className="opdracht-omschrijving">{opdracht.locatie}</p><br />
                            <strong className="opdracht-omschrijving">{"Beloning:"}</strong>
                            <p className="opdracht-omschrijving">{opdracht.beloning}</p><br />
                            <strong className="opdracht-omschrijving">{"Soort onderzoek:"}</strong>
                            <p className="opdracht-omschrijving">{opdracht.soortOnderzoek}</p><br />
                            {/* <p className="opdracht-omschrijving">{opdracht.soortOnderzoek.opties}</p><br /> */}
                            <button className="opdracht-aanmelden" onClick={() => { getGebruiker() }}>Aanmelden</button>
                            <button className="opdracht-gedaan" onClick={() => { }}>Gedaan</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default OpdrachtInformatie;
