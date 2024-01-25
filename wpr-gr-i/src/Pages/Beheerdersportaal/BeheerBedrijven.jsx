import { useEffect, useState } from "react";
import Header from "../../Components/Header.jsx";
import "./Beheer.css";
import background from "./../backgroundWithGradient.png";
import axios from "axios";
import ReactGA from "react-ga4";

const Knoppen = [
  { Naam: "Terug naar beheerdersportaal home", href: "/BeheerdersPortaal" },
];

function BeheerBedrijven({}) {
  const [Bedr, setBedr] = useState([]);
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title:"Beheer Bedrijven" })

    const BedrLijst = async () => {
      try {
        const responseBedr = await axios.get(
          "http://localhost:5155/api/Bedrijf",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(responseBedr.data);
        setBedr(responseBedr.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    BedrLijst();
  }, []);

  return (
    <>
      <Header Titel={"Lijst van bedrijven"} Knoppen={Knoppen}></Header>
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
              <th>Gebruikersnaam</th>
              <th>Bedrijfsnaam</th>
              <th>WebSite</th>
              <th>Locatie</th>
              <th>Omschrijving</th>
            </tr>
          </thead>
          <tbody>
            {Bedr.map((item) => (
              <tr key={item.id}>
                <td className="BeheerInhoud">{item.id}</td>
                <td className="BeheerInhoud">{item.gebruikersNaam}</td>
                <td className="BeheerInhoud">{item.userName}</td>
                <td className="BeheerInhoud">{item.url}</td>
                <td className="BeheerInhoud">{item.locatie}</td>
                <td className="BeheerInhoud">{item.informatie}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BeheerBedrijven;
