import React, { useState } from "react";
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
import UnauthorizedPagina from "./Pages/UnauthorizedPagina";

function App() {

  const [token, setToken] = useState();
  const [google, setGoogle] = useState();
  // const [loggedIn, setLoggedIn] = useState();
  // console.log( google)
  
  return (
    <Routes>
      <Route index element={<VoorPagina />} />
      {/* <Route path='/BeheerPortaal' element={<BeheerPortaal />} /> */}
      <Route path="/BedrijvenPortaal" element={<BedrijvenPortaal />} />
      <Route path="/Opdrachten" element={<OpdrachtenPagina />} />
      <Route path="/Login" element={<Login setGoogle={setGoogle} />} />
      <Route path="/Aanmelden" element={<Aanmelden />} />
      <Route path="/HomePortaal/Bijwerken" element={<Bijwerken />} />
      <Route path="/BedrijvenPortaal/Bijwerken" element={<BijwerkenBedrijf />} />
      <Route path="/Unauthorized" element={<UnauthorizedPagina />} />
      <Route path="*" element={<GeenPagina />} />
    </Routes>
  );
}

export default App;
