// VoorPagina.jsx
import React from 'react';
import './VoorPagina.css';
import background from './backgroundWithGradient.png';
import Button from '../Components/Button';
import {Link} from 'react-router-dom'

function VoorPagina() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,200&family=Roboto:ital,wght@1,300&display=swap');
        `}
      </style>

      <div className="navbar">
            <Link to='/BedrijvenPortaal' className='voorpagina-navbar-knop'>BedrijvenPortaal</Link>   
            <Link to='/BeheerdersPortaal'className='voorpagina-navbar-knop'>BeheerdersPortaal</Link>  
      </div>

      <h1 className="voorPagina-titel">Een beter online bestaan begint hier</h1>
      <h4 className='voorpagina-tekst-onder-titel'>
      Doe mee aan uiteenlopende onderzoeken en geef ons inzicht in jouw ervaringen. Door jouw deelname help je ons niet alleen om jouw beperking beter te begrijpen, 
      maar stellen we ons ook in staat om het internet toegankelijker te maken, speciaal voor jou.
      </h4>

      <div className="button-container">
        <Link to="/Login" className="Voorpagina-Button"> Login</Link>
        <Link to="/Aanmelden" className="Voorpagina-Button">Registreren</Link>
      </div>
    </div>
  );
}

export default VoorPagina;
