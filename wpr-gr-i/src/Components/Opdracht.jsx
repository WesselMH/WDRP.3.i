import { Link } from "react-router-dom";
import "./Opdracht.css";
import ReactGA from "react-ga4";

function Opdracht({ opdracht, type }) {

  const Button = () => {
    ReactGA.event({
      category: opdracht.category,
      action: opdracht.titel,
      label: opdracht.id,
    });
  }

  // console.log("ditis eentitel", opdracht);
  return (
    <>
      <li className="opdracht-component">
        <Link to={`/Opdrachten${type}/${opdracht.id}`} onClick={Button}>
          {/* hier moet nog de link komen */}

          <div className="opdracht">
            <div className="opdracht-header" aria-label={opdracht.header}>
              <h1 className="opdracht-titel" aria-label={opdracht.titel}>{opdracht.titel}</h1>
              <h2 className="opdracht-opdrachtgever" aria-label={opdracht.uitvoerder?.gebruikersNaam}>
                {opdracht.uitvoerder?.gebruikersNaam}
              </h2>
              {/* <h2 className="opdracht-opdrachtgever">uitvoerder gebruikersNaam</h2> */}
            </div>
            <p className="opdracht-omschrijving" aria-label={opdracht.beschrijving}>{opdracht.beschrijving}</p>
          </div>
        </Link>
      </li>
    </>
  );


  
}
export default Opdracht;
