import React from "react";
import "./OpdrachtenPagina.css";
import { useEffect, useState } from "react";
import background from "../../achtergrondfoto.jpg";
import Header from "../../Components/Header";
import Opdracht from "../../Components/Opdracht";
import axios from "axios";
import ReactGA from 'react-ga4'


const buttons = [
  { Naam: "terug", href: "/opdrachtenaangemeld" },
  { Naam: "Homeportaal", href: "/HomePortaal" },
  { Naam: "Uitloggen", href: "/" },
];

function OpdrachtenPagina() {
  const [opdrachten, setOpdrachten] = useState([]);

  function OpdrachtenBox() {
    return (
      <>
        {opdrachten.map((opdracht) => (
          <Opdracht key={opdracht.id} opdracht={opdracht} />
        ))}
      </>
    );
  }

  const getOnderzoeken = async () => {
    await axios
      .get("http://localhost:5155/api/Onderzoek", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then(
        (response) => {
          // console.log(response)
          setOpdrachten(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  //word geladen als de component eerst laad.
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title:"Opdracht Pagina" })

    getOnderzoeken();
  }, []);

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
