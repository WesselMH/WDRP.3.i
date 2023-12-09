// VoorPagina.jsx
import React from 'react';
import './VoorPagina.css';
import background from './backgroundWithGradient.png';
import Button from '../Components/Button';

function VoorPagina() {
  const loginClick = () => {
    console.log('Login knop is geklikt');
  };
  const aanmeldClick = () => {
    console.log('aanmeld knop is geklikt');
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,200&family=Roboto:ital,wght@1,300&display=swap');
        `}
      </style>

      <nav className="navbar">
        <a href="/#">Bedrijvenportaal</a>
        <a href="/#">Beheerdersportaal</a>
      </nav>

      <h1 className="titel">Een beter online bestaan begint hier</h1>
      <h4 >
      Doe mee aan uiteenlopende onderzoeken en geef ons inzicht in jouw ervaringen. Door jouw deelname help je ons niet alleen om jouw beperking beter te begrijpen, 
      maar stellen we ons ook in staat om het internet toegankelijker te maken, speciaal voor jou.
      </h4>

      <div className="button-container">
        <Button onClick={loginClick} label="Login" />
        <Button onClick={aanmeldClick} label="Aanmelden" />
      </div>
    </div>
  );
}

export default VoorPagina;
