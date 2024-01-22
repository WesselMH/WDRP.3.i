import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import VoorPagina from "./Pages/VoorPagina";
import BeheerHome from "./Pages/Beheerdersportaal/BeheerHome";
import BeheerBedrijven from "./Pages/Beheerdersportaal/BeheerBedrijven";
import BeheerDeskundigen from "./Pages/Beheerdersportaal/BeheerDeskundigen";
import BeheerOpdrachten from "./Pages/Beheerdersportaal/BeheerOpdrachten";
import BedrijvenPortaal from "./Pages/Bedrijf/BedrijvenPortaal";
import OpdrachtenPagina from "./Pages/Opdrachten/OpdrachtenPagina";
import GeenPagina from "./Pages/OverigePaginas/GeenPagina";
import Login from "./Components/pop-ups/Login";
import Registreren from "./Components/pop-ups/Registreren/Registreren";
import Bijwerken from "./Components/pop-ups/Bijwerken";
import BijwerkenBedrijf from "./Components/pop-ups/BijwerkenBedrijf";
import HomePortaal from "./Pages/HomePortaal";
import UnauthorizedPagina from "./Pages/OverigePaginas/UnauthorizedPagina";
import Loguit from "./Loguit";
import OpdrachtInformatie from "./Pages/Opdrachten/OpdrachtInformatie";
import OpdrachtPlaatsen from "./Pages/Opdrachten/OpdrachtPlaatsen";
import ClickStream from "./Pages/Bedrijf/ClickstreamInfo";
import OpdrachtenAangemeld from "./Pages/Opdrachten/OpdrachtenAangemeld";

function App() {
  const [token, setToken] = useState();
  const [google, setGoogle] = useState();
  let [exp, setExp] = useState();
  // const [loggedIn, setLoggedIn] = useState();
  // console.log( google)

  useEffect(() => {
    // exp = sessionStorage.getItem("exp");
    if (sessionStorage.getItem("exp") < Date.now()) {
      //om sessionstorage te resetten na een bepaalde tijd (automatische uitlog)
      Loguit();
    }
  }, []);

  return (
    <Routes>
      <Route index element={<VoorPagina />} />
      <Route path="/BeheerdersPortaal" element={<BeheerHome />} />
      <Route
        path="/BeheerdersPortaal/Bedrijven"
        element={<BeheerBedrijven />}
      />
      <Route
        path="/BeheerdersPortaal/Deskundigen"
        element={<BeheerDeskundigen />}
      />
      <Route
        path="/BeheerdersPortaal/Opdrachten"
        element={<BeheerOpdrachten />}
      />
      <Route path="/BedrijvenPortaal" element={<BedrijvenPortaal />} />
      <Route path="/Opdrachten/" element={<OpdrachtenPagina />} />
      <Route path="/OpdrachtenAangemeld/" element={<OpdrachtenAangemeld />} />

      <Route path="/Opdrachten/:id" element={<OpdrachtInformatie />} />

      {/* <Route path="/Login" element={<Login setGoogle={setGoogle} />} /> */}
      <Route path="/Registreren" element={<Registreren />} />
      <Route path="/HomePortaal/Bijwerken" element={<Bijwerken />} />
      <Route
        path="/BedrijvenPortaal/Bijwerken"
        element={<BijwerkenBedrijf />}
      />
      <Route path="/Unauthorized" element={<UnauthorizedPagina />} />
      <Route path="*" element={<GeenPagina />} />
      <Route path="/HomePortaal" element={<HomePortaal />} />
      <Route
        path="/BedrijvenPortaal/OpdrachtPlaatsen"
        element={<OpdrachtPlaatsen />}
      />
      <Route path="/Clickstream" element={<ClickStream />} />
    </Routes>
  );
}

export default App;
