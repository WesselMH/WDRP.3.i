
import React from 'react';
import './App.css';
import VoorPagina from './Pages/VoorPagina'
// import Beheer from './Pages/Beheer'
import BedrijvenPortaal from './Pages/BedrijvenPortaal'
import OpdrachtenPagina from './Pages/OpdrachtenPagina'
import GeenPagina from './Pages/GeenPagina'

import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route index element={<VoorPagina />} />
      {/* <Route path='/Beheer' element={<Beheer />} /> */}
      <Route path='/BedrijvenPortaal' element= {<BedrijvenPortaal /> }/>
      <Route path='/Opdrachten' element= {<OpdrachtenPagina /> }/>
      <Route path='*' element= {<GeenPagina /> }/>
    </Routes>

  );
}

export default App;