import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./Chat.css";
import axios from "axios";
import  ReactGA from "react-ga4";

const Knoppen = [];

function Chat() {
  const [Tekst, setTekst] = useState();
  const [Gesprek, setGesprek] = useState([]);
  const [Allegesp, setAllegesp] = useState([]);
  const [Verzender, setVerzender] = useState();
  const [Ontvanger, setOntvanger] = useState();
  // sessionStorage.setItem("userName", "Robin"); //-------------------------LET OP
  const id = "";
  // setVerzender(sessionStorage.getItem("token"));
  // const berichtToevoegen = ChatBerichten;

  // async function NieuweChat(Tekst) {
  //   await axios.post("http://localhost:5155/api/Chat", {
  //     id,
  //     Verzender,
  //     Ontvanger,
  //     Tekst,
  //   });
  // }

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title:"Chat" })

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
          {/* <button className="Gesprek"></button> */}
        </div>
        {Gesprek.map((gesp) => (
          <div>
            <div>Verstuurder: {gesp.verzender}</div>
            <div>Ontvanger: {gesp.ontvangerId}</div>
            <div>Bericht: {gesp.tekst}</div>
          </div>
        ))}

        <p>Hallo: </p>
        {/* <input value={Tekst} onChange={(e) => setTekst(e.target.value)} /> */}
      </div>
    </>
  );
}

export default Chat;
