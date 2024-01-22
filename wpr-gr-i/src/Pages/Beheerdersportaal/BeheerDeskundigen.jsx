import { useEffect, useState } from "react";
import Header from "../../Components/Header.jsx";
import "../Beheer.css";
import background from "./../backgroundWithGradient.png";
import axios from "axios";

const Knoppen = [
  { Naam: "Terug naar beheerdersportaal home", href: "/BeheerdersPortaal" },
];
function BeheerDeskundige({}) {
  const [Desk, setDesk] = useState([]);
  useEffect(() => {
    const DeskLijst = async () => {
      try {
        const responseDesk = await axios.get(
          "http://localhost:5155/api/ErvaringsDeskundige"
        );
        console.log(responseDesk.data);
        setDesk(responseDesk.data);
        // console.log(Desk);
      } catch (err) {
        console.log(err.message);
      }
    };
    DeskLijst();
  }, []);

  return (
    <>
      <Header
        Titel={"Lijst van ervaringsdeskundige"}
        Knoppen={Knoppen}
      ></Header>
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
              <th>Voornaam</th>
              <th>Achternaam</th>
              <th>GeboorteDatum</th>
              <th>Email</th>
              <th>TelefoonNummer</th>
              <th>PostCode</th>
              <th>Beperking</th>
              <th>Hulpmiddelen</th>
              <th>Benadering</th>
            </tr>
          </thead>
          <tbody>
            {Desk.map((deskundige) => (
              <tr key={deskundige.id}>
                <td className="BeheerInhoud">{deskundige.id}</td>
                <td className="BeheerInhoud">{deskundige.gebruikersNaam}</td>
                <td className="BeheerInhoud">{deskundige.achternaam}</td>
                <td className="BeheerInhoud">{deskundige.geboorteDatum}</td>
                <td className="BeheerInhoud">{deskundige.email}</td>
                <td className="BeheerInhoud">{deskundige.telefoonNummer}</td>
                <td className="BeheerInhoud">{deskundige.postCode}</td>
                <td className="BeheerInhoud">{deskundige.beperking}</td>
                <td className="BeheerInhoud">{deskundige.hulpmiddelen}</td>
                <td className="BeheerInhoud">{deskundige.benadering}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default BeheerDeskundige;
