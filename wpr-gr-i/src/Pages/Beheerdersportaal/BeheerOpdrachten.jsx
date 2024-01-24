import { useEffect, useState } from "react";
import Header from "../../Components/Header.jsx";
import "./Beheer.css";
import { Link } from "react-router-dom";
import background from "./../backgroundWithGradient.png";
import axios from "axios";
import ReactGA from "react-ga4";


const Knoppen = [
  { Naam: "Terug naar beheerdersportaal home", href: "/BeheerdersPortaal" },
];

function BeheerOnderzoeken({}) {
  const [Ond, setOnd] = useState([]);
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title:"Chat" })

    const OndLijst = async () => {
      try {
        const responseOpdr = await axios.get(
          "http://localhost:5155/api/Onderzoek",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(responseOpdr.data);
        setOnd(responseOpdr.data);
        // console.log(Desk);
      } catch (err) {
        console.log(err.message);
      }
    };
    OndLijst();
  }, []);

  return (
    <>
      <Header Titel={"Lijst van Onderzoeken"} Knoppen={Knoppen}></Header>
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,200&family=Roboto:ital,wght@1,300&display=swap');
        `}
        </style>
        <table className="BeheerLijst">
          <thead>
            <tr className="TitelBeheerLijst">
              <th>ID</th>
              <th>Titel</th>
              <th>Uitvoerder</th>
              <th>Datum</th>
              <th>Beschrijving</th>
              <th>Locatie</th>
              <th>Categorie</th>
              <th>Status</th>
              <th>Beloning</th>
              <th>Min Leeftijd</th>
            </tr>
          </thead>
          <tbody>
            {Ond.map((onderzoek) => (
              <tr key={onderzoek.id}>
                <td className="BeheerInhoud">{onderzoek.id}</td>
                <td className="BeheerInhoud">{onderzoek.titel}</td>
                <td className="BeheerInhoud">{onderzoek.uitvoerder}</td>
                <td className="BeheerInhoud">{onderzoek.datum}</td>
                <td className="BeheerInhoud">{onderzoek.beschrijving}</td>
                <td className="BeheerInhoud">{onderzoek.locatie}</td>
                <td className="BeheerInhoud">{onderzoek.soortOnderzoek}</td>
                <td className="BeheerInhoud">{onderzoek.status}</td>
                <td className="BeheerInhoud">{onderzoek.beloning}</td>
                <td className="BeheerInhoud">{onderzoek.leeftijd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BeheerOnderzoeken;
