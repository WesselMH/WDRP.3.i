import "./Pop-up.css";
import InvoerVeld from "./Invoerveld";
import BeperkingenRegistreren from "./Registreren/BeperkingenRegistreren";
import { useEffect, useState } from "react";
import axios from "axios";
import HulpmiddelenRegistreren from "./Registreren/HulpmiddelenRegistreren";
import BereikRegistratie from "./Registreren/BereikRegistratie";

function InvoerVelden({ knoppen, handleInputChange, inputValues }) {
  return (
    <>
      {knoppen.map((knop) => {
        return (
          <InvoerVeld
            key={knop.index}
            label={knop.label}
            className="input-veld"
            type={knop.type}
            placeholder={knop.placeholder}
            id={knop.id}
            onChange={(value) => handleInputChange(knop.id, value)}
            value={inputValues[knop.id] || ""}
          />
        );
      })}
    </>
  );
}

function Registreren({ handleOverlayRegistreerClick }) {
  const knoppen = [
    {
      label: "Voornaam",
      type: "text",
      placeholder: "Vul hier je voornaam in.",
      id: "Voornaam",
      index: 0,
    },
    {
      label: "Achternaam",
      type: "text",
      placeholder: "Vul hier je achternaam in.",
      id: "Achternaam",
      index: 1,
    },
    {
      label: "Wachtwoord",
      type: "new-password",
      placeholder: "Vul hier je wachtwoord in.",
      id: "Wachtwoord",
      index: 2,
    },
    {
      label: "Wachtwoord bevestigen",
      type: "new-password",
      placeholder: "Bevestig je wachtwoord.",
      id: "bevestigWachtwoord",
      index: 3,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Vul hier je email in.",
      id: "EmailAccounts",
      index: 4,
    },
    {
      label: "Bevestig email",
      type: "email",
      placeholder: "Bevestig je email.",
      id: "bevestigEmail",
      index: 5,
    },
    {
      label: "Geboortedatum",
      type: "date",
      placeholder: "Vul hier je geboorte datum in.",
      id: "geboorteDatum",
      index: 6,
    },
    {
      label: "Postcode",
      type: "text",
      placeholder: "Vul hier je postcode in.",
      id: "PostCode",
      index: 7,
    },
    {
      label: "Telefoonnummer",
      type: "tell",
      placeholder: "Vul hier je telefoonnummer in.",
      id: "TelefoonNummer",
      index: 8,
    },
  ];

  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (id, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const [progress, setProgress] = useState(0);
  const [tekst, setTekst] = useState("Ga verder");
  const [teller, setTeller] = useState(0);
  const [aantalStappen, setAantalStappen] = useState(2);

  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (progress >= 1) {
      if (isLoading) {
        setTekst("Loading...");
      } else {
        setTekst("Registreer");
      }
    } else {
      setTekst("Ga verder");
    }
  }, [progress]);

  async function handleRegistratie(e) {
    e.preventDefault();
    console.log("clicked");

    if (progress === 1 && !isLoading) {
      const Id = 0;
      const gebruiker = inputValues.Voornaam + inputValues.Achternaam;

      const achternaam = inputValues.Achternaam;
      const wachtwoord = inputValues.Wachtwoord;
      const userName = gebruiker;
      const gebruikersNaam = gebruiker;
      const postcode = inputValues.PostCode;
      const telefoonnummer = inputValues.TelefoonNummer;
      const voornaam = inputValues.Voornaam;
      const EmailAccounts = inputValues.EmailAccounts;

      // console.log(inputValues);

      setisLoading(true);

      await axios
        .post(
          "http://localhost:5155/api/AaaAccount/ervaringsdeskundige/aanmelden",

          // "https://wpr-i-backend.azurewebsites.net/api/AaaAccount/ervaringsdeskundige/aanmelden"
          {
            Id,
            gebruiker,
            userName,
            achternaam,
            wachtwoord,
            voornaam,
            postcode,
            telefoonnummer,
            gebruikersNaam,
            EmailAccounts,
            headers: {
              "Access-Control-Allow-Origin": "http://localhost:5155",
              // "Access-Control-Allow-Origin": "https://wdrp-3-i.vercel.app/",
              "Access-Control-Allow-Methods": "POST",
              "Access-Control-Allow-Headers": "Content-Type, Custom-Header",
              "Content-Type": "application/json",
            },
          }
        )
        .then(
          (response) => {
            console.log(response);
            handleOverlayRegistreerClick();
          },
          (error) => {
            console.log(error);
            // handleOverlayRegistreerClick();
            return error;
          }
        )
        .finally(() => {
          setisLoading(false);
          // handleOverlayRegistreerClick();
        });
    }

    //registratie logica
  }

  const gaVerder = () => {
    setProgress(progress + 1 / (aantalStappen - 1));
    setTeller(Math.min(teller + 1, aantalStappen - 1));
    // console.log("progress: " + progress);
    // console.log("teller: " + teller);
    // console.log("stap: " + (1 / (aantalStappen - 1)));
    // console.log("pagina: " + ( 1 * (1 / (aantalStappen - 1))))
    // console.log("pagina: " + ( 2 * (1 / (aantalStappen - 1))))
  };
  const gaTerug = () => {
    setProgress(progress - 1 / (aantalStappen - 1));
    setTeller(Math.max(teller - 1, 0));
    // console.log(progress);
  };

  const beperkingen = [
    { index: 11, titel: "bp 1", name: "Hallo2" },
    { index: 12, titel: "bp 2", name: "Hallo3" },
    { index: 13, titel: "bp 3", name: "Hallo4" },
  ];
  const [multipleValuesBeperkingen, setMultipleValuesBeperkingen] = useState(
    []
  );
  const handleMultipleValuesChangeBeperkingen = (newValues) => {
    setMultipleValuesBeperkingen(newValues);
    // console.log(multipleValuesBeperkingen);
  };

  const hulpmiddelen = [
    { index: 21, titel: "hm 1", name: "hallow" },
    { index: 22, titel: "hm 2", name: "halloe" },
    { index: 23, titel: "hm 3", name: "hallor" },
  ];
  const [multipleValuesHulpmiddelen, setMultipleValuesHulpmiddelen] = useState(
    []
  );
  const handleMultipleValuesChangeHulpmiddelen = (newValues) => {
    setMultipleValuesHulpmiddelen(newValues);
    // console.log(multipleValuesHulpmiddelen);
  };

  const bereikOpties = [
    { index: 31, titel: "bo 1", name: "hallioq" },
    { index: 32, titel: "bo 2", name: "halliow" },
    { index: 33, titel: "bo 3", name: "hallior" },
  ];
  const [multipleValuesBereik, setMultipleValuesBereik] = useState([]);
  const handleMultipleValuesChangeBereik = (newValues) => {
    setMultipleValuesBereik(newValues);
    // console.log(multipleValuesBereik);
  };

  const dontSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pop-up">
      <button className="exit-button" onClick={handleOverlayRegistreerClick}>
        x
      </button>
      <h1 className="Titel">Registratie</h1>

      <form className="registreer-wrapper" onSubmit={dontSubmit}>
        {teller === 0 && (
          <div className="flex-row selecter-wrapper">
            <BeperkingenRegistreren
              options={beperkingen}
              selectedValues={multipleValuesBeperkingen}
              onChange={handleMultipleValuesChangeBeperkingen}
            />
            <HulpmiddelenRegistreren
              options={hulpmiddelen}
              selectedValues={multipleValuesHulpmiddelen}
              onChange={handleMultipleValuesChangeHulpmiddelen}
            />
            <BereikRegistratie
              options={bereikOpties}
              selectedValues={multipleValuesBereik}
              onChange={handleMultipleValuesChangeBereik}
            />
          </div>
        )}
        {teller === 1 && (
          <div className="input-holder">
            <InvoerVelden
              knoppen={knoppen}
              handleInputChange={handleInputChange}
              inputValues={inputValues}
            />
          </div>
        )}
        {teller === 2 && <div className="input-holder">test</div>}
        {teller === 3 && <div className="input-holder">test2</div>}

        <div className="flex-column full-size progress-bar">
          <progress value={progress} />
          <div className="full-size flex-center">
            {teller > 0 && (
              <button
                type="button"
                className="confirm-button "
                onClick={gaTerug}
              >
                Terug
              </button>
            )}
            {progress === 1 ? (
              <button
                // type="submit"
                className="confirm-button"
                onClick={handleRegistratie}
              >
                {tekst}
              </button>
            ) : (
              <button
                // type="button"
                className="confirm-button"
                onClick={gaVerder}
              >
                {tekst}
              </button>
            )}
          </div>
        </div>
        {/* <button
          type="submit"
          className="confirm-button"
          // onClick={handleRegistratie}
        >
          test
        </button> */}
      </form>
    </div>
  );
}

export default Registreren;
