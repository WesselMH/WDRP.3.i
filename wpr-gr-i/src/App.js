import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useSearchParams } from "react-router-dom";

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
import UnauthorizedPagina from "./Pages/UnauthorizedPagina";
import Loguit from "./Loguit";

function App() {
  const [token, setToken] = useState();
  const [google, setGoogle] = useState();
  let [exp, setExp] = useState();
  // const [loggedIn, setLoggedIn] = useState();
  // console.log( google)

  useEffect(() => {
    exp = sessionStorage.getItem("exp");
    if (sessionStorage.getItem("exp") < Date.now()) {
      //om sessionstorage te resetten na een bepaalde tijd (automatische uitlog)
      Loguit();
    }
  }, [exp]);

  return (
    <Routes>
      <Route index element={<VoorPagina />} />
      {/* <Route path='/BeheerPortaal' element={<BeheerPortaal />} /> */}
      <Route path="/BedrijvenPortaal" element={<BedrijvenPortaal />} />
      <Route path="/Opdrachten" element={<OpdrachtenPagina />} />
      <Route path="/Login" element={<Login setGoogle={setGoogle} />} />
      <Route path="/Aanmelden" element={<Aanmelden />} />
      <Route path="/HomePortaal/Bijwerken" element={<Bijwerken />} />
      <Route
        path="/BedrijvenPortaal/Bijwerken"
        element={<BijwerkenBedrijf />}
      />
      <Route path="/Unauthorized" element={<UnauthorizedPagina />} />
      <Route path="*" element={<GeenPagina />} />
      <Route path="/HomePortaal" element={<HomePortaal />} />
      
    </Routes>
  );
}

export default App;
