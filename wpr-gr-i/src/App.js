
import React from 'react';
import './App.css';
import VoorPagina from './Pages/VoorPagina'
// import Beheer from './Pages/Beheer'
import BedrijvenPortaal from './Pages/BedrijvenPortaal'

import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path='/' element={<VoorPagina />} exact>
        {/* <Route path='/Beheer' element={<Beheer />} /> */}
        <Route path='/BedrijvenProtaal' element= {<BedrijvenPortaal /> }/>
      </Route>
    </Routes>

  );
}

export default App;