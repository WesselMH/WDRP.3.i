
import React from 'react';
import './VoorPagina.css';
import background from './backgroundWithGradient.png'


function VoorPagina() {
  return (
<div className="App" style={{backgroundImage: `url(${background})`}}>
      <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,200&family=Roboto:ital,wght@1,300&display=swap');
</style>
      
      <nav className='navbar'>
      
        <a href="/#">Bedrijvenportaal</a>
        <a href="/#">Beheerdersportaal</a>
      </nav>

      <h1 className="titel">Een beter online bestaan begint hier</h1>
      <h4 className="">Door mee te doen aan verschillende onderzoeken, helpt u ons met het begrijpen van uw beperking en kunnen wij ervoor zorgen dat het internet toegankelijker wordt voor u.</h4>

      <div className="button-container">
        <button type="button" className='Button'>Login</button>
        <button type="button" className='Button'>Registreren</button>
      </div>
      
    </div>
  

  );
}

export default VoorPagina;
