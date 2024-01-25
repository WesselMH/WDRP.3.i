import React from "react";
import "./OpdrachtenPagina.css";
import { useEffect, useState } from "react";
import background from "../../achtergrondfoto.jpg";
import Header from "../../Components/Header";
import Opdracht from "../../Components/Opdracht";
import axios from "axios";


const buttons = [
  { Naam: "Alle Opdrachten", href: "/opdrachten" },
  { Naam: "Homeportaal", href: "/HomePortaal" },
  { Naam: "Uitloggen", href: "/" },
];

function OpdrachtenAangemeld() {

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
    await axios.get(
      "http://localhost:5155/api/ErvaringsDeskundige/Onderzoeken",
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    ).then((response)=> {
      // console.log(response)
      setOpdrachten(response.data)
    },(error) => {
      console.log(error)
    });;
  };
  
  useEffect(() => {
      getOnderzoeken()
  }, []);

  return (
    <div>
      <Header Titel={"Aangemelde Opdrachten"} Knoppen={buttons} />
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

export default OpdrachtenAangemeld;
