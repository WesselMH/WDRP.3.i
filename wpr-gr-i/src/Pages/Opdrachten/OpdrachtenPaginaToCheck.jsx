import React from "react";
import "./OpdrachtenPagina.css";
import { useEffect, useState } from "react";
import background from "../../achtergrondfoto.jpg";
import Header from "../../Components/Header";
import Opdracht from "../../Components/Opdracht";
import axios from "axios";

const buttons = [
  { Naam: "terug", href: "/BeheerdersPortaal" },
  { Naam: "Uitloggen", href: "/" },
];

function OpdrachtenPaginaToCheck() {
  const [opdrachten, setOpdrachten] = useState([]);

  function OpdrachtenBox() {
    return (
      <>
        {opdrachten.map((opdracht) => (
          <Opdracht key={opdracht.id} opdracht={opdracht} type={"ToCheck"} />
        ))}
      </>
    );
  }

  const getOnderzoeken = async () => {
    await axios
      .get("http://wpr-i-backend.azurewebsites.net/api/Onderzoek/ToCheck", {
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

export default OpdrachtenPaginaToCheck;
