import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import VoorPagina from "./Pages/VoorPagina";
// import BeheerPortaal from './Pages/BeheerPortaal'
import BedrijvenPortaal from "./Pages/BedrijvenPortaal";
import OpdrachtenPagina from "./Pages/OpdrachtenPagina";
import GeenPagina from "./Pages/GeenPagina";
import Login from "./Components/pop-ups/Login";
import Aanmelden from "./Components/pop-ups/Aanmelden";
import Bijwerken from "./Components/pop-ups/Bijwerken";
import BijwerkenBedrijf from "./Components/pop-ups/BijwerkenBedrijf";
import HomePortaal from "./Pages/HomePortaal";

function App() {
  return (
    <Routes>
      <Route index element={<VoorPagina />} />
      {/* <Route path='/BeheerPortaal' element={<BeheerPortaal />} /> */}
      <Route path="/BedrijvenPortaal" element={<BedrijvenPortaal />} />
      <Route path="/Opdrachten" element={<OpdrachtenPagina />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Aanmelden" element={<Aanmelden />} />
      <Route path="/HomePortaal/Bijwerken" element={<Bijwerken />} />
      <Route path="/BedrijvenPortaal/Bijwerken" element={<BijwerkenBedrijf />} />
      <Route path="*" element={<GeenPagina />} />
      <Route path="/HomePortaal" element={<HomePortaal />} />
      
    </Routes>
  );
}

export default App;
