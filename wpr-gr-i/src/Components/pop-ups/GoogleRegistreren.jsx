import "./Pop-up.css";
import InvoerVeld from "./Invoerveld";
import BeperkingenRegistreren from "./Registreren/BeperkingenRegistreren";
import { useEffect, useState } from "react";
import axios from "axios";
import HulpmiddelenRegistreren from "./Registreren/HulpmiddelenRegistreren";
import BereikRegistratie from "./Registreren/BereikRegistratie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

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

function GoogleRegistreren({
  handleOverlayGoogleRegistreerClick,
  googleUser,
  googleToken,
}) {
  const knoppen = [
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
  const navigate = useNavigate();

  const googleUserGegevens = googleUser;
  const googleUserToken = googleToken;

  const Id = "";
  const gebruiker =
    googleUserToken.given_name + " " + googleUserToken.family_name;
  const wachtwoord = googleUserToken;
  const EmailAccount = googleUserGegevens.email;
  // console.log(EmailAccount)
  const userName = EmailAccount;
  const gebruikersNaam =
    googleUserGegevens.given_name + " " + googleUserGegevens.family_name;
  const geboorteDatum = inputValues.geboorteDatum;

  const postcode = inputValues.PostCode;
  const telefoonnummer = inputValues.TelefoonNummer;
  const voogd = null;
  const hulpmiddelen = [];

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
  }, [isLoading, progress]);

  async function handleRegistratie(e) {
    e.preventDefault();
    // console.log("clicked");

    if (progress === 1 && !isLoading) {
      // console.log(inputValues);

      setisLoading(true);

      await axios
        .post(
          "http://localhost:5155/api/AaaAccount/google/aanmelden",
          // "https://wpr-i-backend.azurewebsites.net/api/AaaAccount/ervaringsdeskundige/aanmelden"
          {
            // ...inputValues,
            // Voornaam:
            Id,
            gebruikersNaam,
            emailGoogle: googleUserGegevens.email,
            sub: googleUserGegevens.sub,
            ervaringsDeskundige: {
              Id,
              gebruiker,
              userName: googleUserGegevens.email,
              achternaam: googleUserGegevens.family_name,
              wachtwoord,
              voornaam: googleUserGegevens.given_name,
              postcode,
              telefoonnummer,
              gebruikersNaam,
              EmailAccount,
              geboorteDatum,
              voogd,
              hulpmiddelen,
            },
            headers: {
              "Access-Control-Allow-Origin": "http://localhost:5155/api/",
              // "Access-Control-Allow-Origin": "https://wpr-i-backend.azurewebsites.net/api/",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type, Custom-Header",
              "Content-Type": "application/json",
            }
          }
        )
        .then(
          (response) => {
            // console.log(response);
            loginGoogleUser();
            handleOverlayGoogleRegistreerClick();
          },
          (error) => {
            // console.log(error);
            console.log(error.response.data.errors);
          }
        )
        .finally(() => {
          setisLoading(false);
        });
    }

    //registratie logica
  }

  async function loginGoogleUser() {
    // console.log(username, gebruikersnaam);
    await axios
      .post("http://localhost:5155/api/AaaAccount/login", {
        // .post("https://wpr-i-backend.azurewebsites.net/api/AaaAccount/login", {
        Id,
        gebruikersNaam,
        wachtwoord,
        userName,
      })
      .then(
        (response) => {
          // console.log(response.data.token);
          // console.log(response);

          const token = response.data.token;

          sessionStorage.setItem("token", token);
          sessionStorage.setItem("exp", jwtDecode(token)["exp"] * 1000);
          navigate("/HomePortaal");
        },
        (error) => {
          //fout response gebruiker
          console.log(error);
          handleOverlayGoogleRegistreerClick();
        }
      )
      .finally(() => setisLoading(false));
  }

  const gaVerder = () => {
    setProgress(progress + 1 / (aantalStappen - 1));
    setTeller(Math.min(teller + 1, aantalStappen - 1));
  };
  const gaTerug = () => {
    setProgress(progress - 1 / (aantalStappen - 1));
    setTeller(Math.max(teller - 1, 0));
    // console.log(progress);
  };
  const [multipleValuesBeperkingen, setMultipleValuesBeperkingen] = useState(
    []
  );
  const handleMultipleValuesChangeBeperkingen = (newValues) => {
    setMultipleValuesBeperkingen(newValues);
    // console.log(multipleValuesBeperkingen);
  };

  const [multipleValuesHulpmiddelen, setMultipleValuesHulpmiddelen] = useState(
    []
  );
  const handleMultipleValuesChangeHulpmiddelen = (newValues) => {
    setMultipleValuesHulpmiddelen(newValues);
    // console.log(multipleValuesHulpmiddelen);
  };

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
      <h1 className="Titel">Google registratie</h1>

      <form className="registreer-wrapper" onSubmit={dontSubmit}>
        {teller === 0 && (
          <div className="flex-row selecter-wrapper">
            <BeperkingenRegistreren
              selectedValues={multipleValuesBeperkingen}
              onChange={handleMultipleValuesChangeBeperkingen}
            />
            <HulpmiddelenRegistreren
              selectedValues={multipleValuesHulpmiddelen}
              onChange={handleMultipleValuesChangeHulpmiddelen}
            />
            <BereikRegistratie
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
              <button className="confirm-button" onClick={handleRegistratie}>
                {tekst}
              </button>
            ) : (
              <button className="confirm-button" onClick={gaVerder}>
                {tekst}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default GoogleRegistreren;
