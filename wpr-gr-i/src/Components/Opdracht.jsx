import { Link } from "react-router-dom";
import "./Opdracht.css";

function Opdracht({ opdracht }) {
  // console.log("ditis eentitel", opdracht);
  return (
    <>
      <li className="opdracht-component">
          {/* hier moet nog de link komen */}

          <div className="opdracht">
            <div className="opdracht-header">
              <h1 className="opdracht-titel">{opdracht.titel}</h1>
              <h2 className="opdracht-opdrachtgever">{opdracht.uitvoerder.gebruikersNaam}</h2>
              {/* <h2 className="opdracht-opdrachtgever">uitvoerder gebruikersNaam</h2> */}

            </div>
            <p className="opdracht-omschrijving">{opdracht.beschrijving}</p>
          </div>
      </li>
    </>
  );
}
export default Opdracht;
