import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./Chat.css";
import axios from 'axios';
// import { Link, Navigate } from "react-router-dom";
// import background from "./backgroundWithGradient.png";
// import "./HomePortaal.css";

const Knoppen = [];

const ChatBerichten = [
  {
    gebruiker1: "Lirandy",
    gebruiker2: "Robin",
    Bericht: "Test",
    datum: "11-1-2024",
  },
  {
    gebruiker1: "Robin",
    gebruiker2: "Wesselweside",
    Bericht: "Test2",
    datum: "11-1-2024",
  },
  {
    gebruiker1: "Robin",
    gebruiker2: "Wesselweside",
    Bericht: "Test4",
    datum: "11-1-2024",
  },
  {
    gebruiker1: "Robin",
    gebruiker2: "Wesselweside",
    Bericht: "Testawer",
    datum: "11-1-2024",
  },
  {
    gebruiker1: "Robin",
    gebruiker2: "Wesselweside",
    Bericht: "Tesasdfasdfkjhaskcht",
    datum: "11-1-2024",
  },
];



function Gesprekken(gebruiker1) {
  const [Gespr, setGespr] = useState("");
  for (const gesprek in ChatBerichten) {
    console.log(gesprek.gebruiker1);
    if (sessionStorage.getItem("userName") === gesprek.gebruiker1) {
      Gespr.push({ gebruiker2: gesprek.gebruiker2 });
    }
    if (sessionStorage.getItem("userName") === gesprek.gebruiker2) {
      Gespr.push({ gebruiker2: gesprek.gebruiker1 });
    }
  }
  return Gespr;
}

function ChatComponent() {
  const [chats, setChats] = useState(ChatBerichten);

  function NieuwChatBericht({ gebruiker1, gebruiker2, Bericht }) {
    setChats([chats, { gebruiker1, gebruiker2, Bericht }]);
  }
  return (
    <div>
      Hallo
      <input></input>
    </div>
  );
}

function ChatPersonen({}) {}

function Verstuur({}) {
  const [Verstuur, setVerstuur] = useState("");
}

function Chat() {
  const [Tekst, setTekst] = useState();
  const [Bericht, setBericht] = useState(ChatBerichten);
  const [Gebruiker2, setGebruiker2] = useState("");
  sessionStorage.setItem("userName", "Robin");
  const berichtToevoegen = ChatBerichten;

  const GoedeBerichten = () => {
    return (
      <>
        


        {/* {Bericht.map((item) => {

          if (
            (item.gebruiker1 === sessionStorage.getItem("userName")) &
            (item.gebruiker2 === Gebruiker2)
          ) {
            return <div className="VerstuurdBericht">{item.Bericht}</div>;
          }
          if (
            (item.gebruiker2 === sessionStorage.getItem("userName")) &
            (item.gebruiker1 === Gebruiker2)
          ) {
            return <div className="OntvangenBericht">{item.Bericht}</div>;
          }
        })} */}
      </>
    );
  };
  useEffect(() => {
    // GoedeBerichten();
    console.log(Bericht);
  }, [Bericht]);
  return (
    <>
      <Header
        Titel={"Chat van " + sessionStorage.getItem("userName")}
        Knoppen={Knoppen}
      ></Header>
      <div style={{ height: "79vh" }}>
        <div className="GesprekkenLijst">
          <button className="Gesprek">
            {Gesprekken('sessionStorage.getItem("userName")')}
          </button>
        </div>

        <div className="BerichtenBox">
          <GoedeBerichten />
        </div>

        <input value={Tekst} onChange={(e) => setTekst(e.target.value)} />
        <button
          onClick={() => {
            setBericht([
              ...Bericht,
              {
                gebruiker1: sessionStorage.getItem("userName"),
                gebruiker2: "Wessel",
                Bericht: Tekst,
              },
              setTekst(""),
            ]);
          }}
        >
          Hallo
        </button>
      </div>
    </>
  );
}

export default Chat;
