import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./Chat.css";
import axios from "axios";
import Login from "../Components/pop-ups/Login";
import { jwtDecode } from "jwt-decode";
import  ReactGA from "react-ga4";

const Knoppen = [{ Naam: "Voorpagina", href: "../" }];

function Chat() {
  const [Tekst, setTekst] = useState("");
  const [Gesprek, setGesprek] = useState([]);
  const [Allegesp, setAllegesp] = useState([]);
  const [Verzender, setVerzender] = useState();
  const [Ontvanger, setOntvanger] = useState();
  const knopjec = document.getElementById("knopjec");
  // const tekstInput = document.getElementById("Tekst");
  // sessionStorage.setItem("userName", "Robin"); //-------------------------LET OP
  const id = "";
  // setVerzender(sessionStorage.getItem("token"));
  // const berichtToevoegen = ChatBerichten;

  async function verzend(e) {
    // const tekst = tekstInput.value;  

    await axios
      .post("http://wpr-i-backend.azurewebsites.net/api/Chat", {
        id: "",
        Tekst: Tekst,
        
      },{
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:5155/api/",
            // "Access-Control-Allow-Origin": "https://wpr-i-backend.azurewebsites.net/api/",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Custom-Header",
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
      })
      .then((response) => {
        console.log(response);
      });
      setTekst("")
  }
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title:"Chat" })

    const ChatGesprekken = async () => {
      try {
        const response = await axios.get("http://wpr-i-backend.azurewebsites.net/api/Chat", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        console.log(response.data);
        setGesprek(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    ChatGesprekken();
  }, [Tekst]);

  return (
    <>
      <Header
        Titel={"Chat van " + jwtDecode( sessionStorage.getItem("token"))["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]}
        Knoppen={Knoppen}
      ></Header>

      <div className="ChatBox">
        <div className="GesprekkenLijst">
          {/* {Gesprek.map((gesp) => (
            <div>
              <div className="Gesprek">Verstuurder: {gesp.verzender}</div>
              <div>Ontvanger: {gesp.ontvangerId}</div>
              <div>Bericht: {gesp.tekst}</div>
            </div>
          ))} */}
          <div className="Gesprek">Wessel</div>
          <div className="Gesprek">Lirandy</div>
          <div className="Gesprek">Christiaan</div>
        </div>
        <div className="BerichtenBox">
          <div >
            {Gesprek.map((gespr) => (
              gespr.verzender.gebruikersNaam === jwtDecode( sessionStorage.getItem("token"))["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] ? (
                <div className="Berichtjes">
                <div className="VerstuurdBericht" key={gespr.id}>
                  {gespr.tekst}
                </div>
                <div className="OntvangenBericht">Dit is een voorbeeld van een ontvangen bericht</div>
                </div>
              // ) 
                // :(
                // gespr.ontvanger.gebruikersNaam === jwtDecode( sessionStorage.getItem("token"))["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] ? (
                //   <div className="OntvangenBericht" key={gespr.id}>
                //   {gespr.tekst}
                // </div>
              ) : null
              ))}
          </div>
          

          <div className="TekstBox">
            <input
              // for="Tekst"
              className="ChatTekst"
              value={Tekst} onChange={(e) => setTekst(e.target.value)}
              // type="Tekst"
              // id="Tekst"
              placeholder="Schrijf hier uw bericht"
            />
            <button
              id="knopjec"
              className="ChatKnop"
              // className="Gesprek"
              onClick={() => {
                verzend();
                setTekst("")
              }}
              //   NieuweChat();
              //   setTekst("");
              // }}
            >
              Verstuur
            </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
