// VoorPagina.jsx
import React from "react";
import "./VoorPagina.css";
import "../Components/Button.css";
import background from "./backgroundWithGradient.png";
import { Link, useNavigate } from "react-router-dom";

function VoorPagina() {
  const navigate = useNavigate();


  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,200&family=Roboto:ital,wght@1,300&display=swap');
        `}
      </style>

      <nav className="navbar">
        <ul>
          <il>
            <Link to="/BedrijvenPortaal">BedrijvenPortaal</Link>
          </il>
          <li>
            <Link to="/BeheerdersPortaal">Beheerdersportaal</Link>
          </li>
        </ul>
      </nav>

      <h1 className="voorPagina-titel">Een beter online bestaan begint hier</h1>
      <h4>
        Doe mee aan uiteenlopende onderzoeken en geef ons inzicht in jouw
        ervaringen. Door jouw deelname help je ons niet alleen om jouw beperking
        beter te begrijpen, maar stellen we ons ook in staat om het internet
        toegankelijker te maken, speciaal voor jou.
      </h4>

      <div className="button-container">
        {/* hierdoor werkt tab beter voor keyboard users*/}
        <Link to={"/Login"} className="Button">Login</Link>
        <Link to={"/Aanmelden"} className="Button">Aanmelden</Link>
      </div>
    </div>
  );
}

export default VoorPagina;
