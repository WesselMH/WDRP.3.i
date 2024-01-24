import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./Chat.css";
import axios from "axios";
import Login from "../Components/pop-ups/Login";

const Knoppen = [{ Naam: "Voorpagina", href: "../" }];

function Chat() {
  const [Tekst, setTekst] = useState("");
  const [Gesprek, setGesprek] = useState([]);
  const [Allegesp, setAllegesp] = useState([]);
  const [Verzender, setVerzender] = useState();
  const [Ontvanger, setOntvanger] = useState();
  // sessionStorage.setItem("userName", "Robin"); //-------------------------LET OP
  const id = "";
  // setVerzender(sessionStorage.getItem("token"));
  // const berichtToevoegen = ChatBerichten;

  async function NieuweChat() {
    // setVerzender(sessionStorage.getItem("Token"));
    // setOntvanger(sessionStorage.getItem("Token"));
    console.log("Dit is de id:" + id);
    // console.log("Dit is de verzender:" + Verzender);
    // console.log("Dit is de ontvanger:" + Ontvanger);
    console.log("Dit is de Tekst:" + Tekst);
    await axios.post("http://localhost:5155/api/Chat", {
      // id,
      // Verzender,
      // Ontvanger,
      Tekst,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5155/api/",
        // "Access-Control-Allow-Origin": "https://wpr-i-backend.azurewebsites.net/api/",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Custom-Header",
        "Content-Type": "application/json",
      },
    });
  }

  useEffect(() => {
    const ChatGesprekken = async () => {
      try {
        const response = await axios.get("http://localhost:5155/api/Chat", {
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
  }, []);

  return (
    <>
      <Header
        Titel={"Chat van " + sessionStorage.getItem("userName")}
        Knoppen={Knoppen}
      ></Header>

      <div style={{ height: "79vh" }}>
        <div className="GesprekkenLijst">
          {/* {Allegesp.map((gesp) => ( */}
          {/* <div>{gesp.andere}</div> */}
          {/* ))} */}
        </div>
        {Gesprek.map((gesp) => (
          <div>
            <div>Verstuurder: {gesp.verzender}</div>
            <div>Ontvanger: {gesp.ontvangerId}</div>
            <div>Bericht: {gesp.tekst}</div>
          </div>
        ))}

        <p>Hallo: </p>
        <input value={Tekst} onChange={(e) => setTekst(e.target.value)} />
        <button
          className="Gesprek"
          onClick={() => {
            NieuweChat();
            setTekst("");
          }}
        >
          Hallo
        </button>
      </div>
    </>
  );
}

export default Chat;
