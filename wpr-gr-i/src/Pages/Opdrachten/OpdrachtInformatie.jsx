import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import background from "../../achtergrondfoto.jpg";
import Header from "../../Components/Header";

function OpdrachtInformatie() {
  var urlArray = window.location.pathname.split("/");
  const [opdracht, setOpdracht] = useState([]);
  const [error, setError] = useState();

  async function getOnderzoek() {
    // await fetch("http://localhost:5155/api/Onderzoek/" + urlArray[2])
    //   .then((results) => {
    //     return results.json();
    //   })
    //   //code to change the opdrachten array
    //   .then((data) => {
    //     setOpdracht(data);

    //     console.table(opdracht);
    //   });
    await axios.get(`http://localhost:5155/api/Onderzoek/${urlArray[2]}`).then(
      (response) => {
        console.log(response.data);
        setOpdracht(response.data);
      },
      (error) => {
        console.log(error.response.data);
        const errorMessage = error.response.data;
        setError(errorMessage.title + " " + errorMessage.status);
      }
    );
  }

  useEffect(() => {
    getOnderzoek();
  }, []);

  function postSubscribe() {
    const token = sessionStorage.getItem("token");
    const decodedToken = jwtDecode(token);

    const id = decodedToken.id;
    const gebruikersnaam = decodedToken.name;
    //feedback docent
    //Moet navigeerbaar maken met tab.
    // Boolean "opdracht gedaan" in ErvaringsDeskundigeOnderzoek/tussentabel zodat bedrijf kan zien wie klaar is met onderzoek.
    axios
      .post(
        ` http://localhost:5155/api/ErvaringsDeskundige/AddOnderzoek/${urlArray[2]}`,
        {
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
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Custom-Header",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setError(error.response.data);
      });
  }

  const buttons = [{ Naam: "Terug", href: "/Opdrachten" }];

  // var date = opdracht?.datum?.split('T');

  return (
    <>
      <Header Titel={"Opdrachten"} Knoppen={buttons} />

      <div
        className="opdrachtenPagina"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="opdrachten-wrapper">
          <div className="opdracht">
            <div className="opdracht-header">
              <h1 className="opdracht-titel">{opdracht.titel}</h1>
              <h2 className="opdracht-opdrachtgever">
                {opdracht &&
                  opdracht.uitvoerder &&
                  opdracht.uitvoerder.gebruikersNaam}
              </h2>
              {/* <h2 className="opdracht-opdrachtgever">{opdracht?.uitvoerder?.gebruikersNaam}</h2> */}
            </div>

            <div className="opdracht-details">
              <div>
                <div>
                  <h3 className="opdracht-omschrijving">
                    {"Beschijving opdracht:"}
                  </h3>
                  <p className="opdracht-omschrijving">
                    {opdracht.beschrijving}
                  </p>
                </div>

                <div>
                  <h3 className="opdracht-omschrijving">{"Datum opdracht:"}</h3>
                  <p className="opdracht-omschrijving">{opdracht.datum}</p>
                </div>

                <div>
                  {/* <p className="opdracht-omschrijving">{date[0]}</p><br /> */}
                  <h3 className="opdracht-omschrijving">{"Locatie:"}</h3>
                  <p className="opdracht-omschrijving">{opdracht.locatie}</p>
                </div>

                <div>
                  <h3 className="opdracht-omschrijving">{"Beloning:"}</h3>
                  <p className="opdracht-omschrijving">{opdracht.beloning}</p>
                </div>

                <div>
                  <h3 className="opdracht-omschrijving">
                    {"Soort onderzoek:"}
                  </h3>
                  {/* <p className="opdracht-omschrijving">{opdracht && opdracht.soortOnderzoek && opdracht.soortOnderzoek.opties}</p><br /> */}
                  <p className="opdracht-omschrijving">
                    {opdracht.soortOnderzoek?.opties}
                  </p>
                </div>
              </div>

              <p className="opdracht-error">{error}</p>

              <div className="full-size flex-center">
                <button
                  className="confirm-button"
                  onClick={() => {
                    postSubscribe();
                  }}
                >
                  Aanmelden
                </button>

                <button className="confirm-button" onClick={() => {}}>
                  Gedaan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpdrachtInformatie;
