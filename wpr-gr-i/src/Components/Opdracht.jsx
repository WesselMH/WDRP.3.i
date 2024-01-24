import { Link } from "react-router-dom";
import "./Opdracht.css";
import ReactGA from "react-ga4";

function Opdracht({ opdracht }) {

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
        <Link to={`/Opdrachten/${opdracht.id}`} onClick={Button}>
          {/* hier moet nog de link komen */}

          <div className="opdracht">
            <div className="opdracht-header">
              <h1 className="opdracht-titel">{opdracht.titel}</h1>
              <h2 className="opdracht-opdrachtgever">
                {opdracht.uitvoerder?.gebruikersNaam}
              </h2>
              {/* <h2 className="opdracht-opdrachtgever">uitvoerder gebruikersNaam</h2> */}
            </div>
            <p className="opdracht-omschrijving">{opdracht.beschrijving}</p>
          </div>
        </Link>
      </li>
    </>
  );


  
}
export default Opdracht;
