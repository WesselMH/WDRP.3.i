
import React from 'react';
import './App.css';
import VoorPagina from './Pages/VoorPagina'
// import BeheerProtaal from './Pages/BeheerPortaal'
import BedrijvenPortaal from './Pages/BedrijvenPortaal'
import OpdrachtenPagina from './Pages/OpdrachtenPagina'
import GeenPagina from './Pages/GeenPagina'

import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route index element={<VoorPagina />} />
      {/* <Route path='/BeheerPortaal' element={<BeheerPortaal />} /> */}
      <Route path='/BedrijvenPortaal' element= {<BedrijvenPortaal /> }/>
      <Route path='/Opdrachten' element= {<OpdrachtenPagina /> }/>
      <Route path='*' element= {<GeenPagina /> }/>
    </Routes>

  );
}

export default App;
