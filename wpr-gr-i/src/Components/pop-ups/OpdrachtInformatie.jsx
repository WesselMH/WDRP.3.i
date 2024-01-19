import React from "react";
import "./Pop-up.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


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
    
    function postSubscribe(decodedToken)
     {  
        const id = decodedToken.id;
        const gebruikersnaam = decodedToken.name;
         //Moet modal/popup navigeerbaar maken met tab. volgens docent.
         // Boolean "opdracht gedaan" in ErvaringsDeskundigeOnderzoek/tussentabel zodat bedrijf kan zien wie klaar is met onderzoek.
        axios.post(` http://localhost:5155/api/ErvaringsDeskundige/AddOnderzoek/${urlArray[2]}`  , {
        //id opdracht
        //id gebruiker    
        Id: id,
        gebruikersNaam:"string",
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

    function getGebruiker(){
        const token = sessionStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        postSubscribe(decodedToken);
    }       
    
    return (
        <>
            <div className="overlay">
                <div className="pop-up">
                    <Link className="exit-button" to="/Opdrachten">
                        x
                    </Link>
                    <div className="opdracht-header">
                        <h1 className="opdracht-titel">{opdracht.titel}</h1>
                        {/* <h2 className="opdracht-opdrachtgever">{opdracht.uitvoerder.gebruikersNaam}</h2> */}
                        <h2 className="opdracht-opdrachtgever">uitvoerder</h2>
                    </div>
                    <p className="opdracht-omschrijving">{opdracht.beschrijving}</p>
                    <p className="opdracht-omschrijving">{opdracht.datum}</p>
                    <p className="opdracht-omschrijving">{opdracht.locatie}</p>
                    <p className="opdracht-omschrijving">{opdracht.beloning}</p>
                    <p className="opdracht-omschrijving">{opdracht.soortoOnderzoek}</p>
                    <p className="opdracht-omschrijving">{opdracht.soortoOnderzoek}</p>

                    <button onClick={() => {getGebruiker()}}>Aanmelden</button>
                    <button onClick={() => {}}>Gedaan</button>


                </div>
            </div>
        </>
    )
};

export default OpdrachtInformatie;
