import { Link } from "react-router-dom";
import "./Opdracht.css";

function Opdracht({ opdracht }) {
  // console.log("ditis eentitel", opdracht);
  return (
    <>
      <li className="opdracht-component">
        <Link to={""}>
          {/* hier moet nog de link komen */}

          <div className="opdracht">
            <div className="opdracht-header">
              <h1 className="opdracht-titel">{opdracht.title}</h1>
              <h2 className="opdracht-opdrachtgever">{opdracht.bedrijf}</h2>
            </div>
            <p className="opdracht-omschrijving">{opdracht.beschrijving}</p>
          </div>
        </Link>
      </li>
    </>
  );
}
export default Opdracht;
