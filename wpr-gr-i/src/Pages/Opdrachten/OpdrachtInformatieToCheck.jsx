import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import background from "../../achtergrondfoto.jpg";
import Header from "../../Components/Header";

function OpdrachtInformatieToCheck() {
  var urlArray = window.location.pathname.split("/");
  const [opdracht, setOpdracht] = useState([]);
  const [error, setError] = useState();
  const navigate = useNavigate();

  async function getOnderzoek() {
    await axios.get(`http://wpr-i-backend.azurewebsites.net/api/Onderzoek/${urlArray[2]}`).then(
      (response) => {
        // console.log(response.data);
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
    //feedback docent
    //Moet navigeerbaar maken met tab.
    // Boolean "opdracht gedaan" in ErvaringsDeskundigeOnderzoek/tussentabel zodat bedrijf kan zien wie klaar is met onderzoek.
    axios
      .put(
        ` http://wpr-i-backend.azurewebsites.net/api/ErvaringsDeskundige/AddOnderzoek/${urlArray[2]}`,
        null,
        {
          headers: {
            // "Access-Control-Allow-Origin": "http://localhost:5155/api/",
            "Access-Control-Allow-Origin": "https://wpr-i-backend.azurewebsites.net/api/",
            "Access-Control-Allow-Methods": "Put",
            "Access-Control-Allow-Headers": "Content-Type, Custom-Header",
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then(function (response) {
        // console.log(response);
        navigate("/Opdrachten");
      })
      .catch(function (error) {
        console.log(error);
        setError(error.response.data);
      });
  }

  const buttons = [{ Naam: "Terug", href: -1 }];

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
                    // postSubscribe();
                  }}
                >
                  Goedkeuren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpdrachtInformatieToCheck;
