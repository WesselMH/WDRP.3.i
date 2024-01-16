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
            autoComplete={knop.autoComplete}
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
  const [allKnoppen, setAllKnoppen] = useState([
    { Id: 1, lijst: [] },
    {
      Id: 2,
      lijst: [
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
          type: "password",
          autoComplete: "new-password",
          placeholder: "Vul hier je wachtwoord in.",
          id: "Wachtwoord",
          index: 2,
        },
        {
          label: "Wachtwoord bevestigen",
          type: "password",
          autoComplete: "new-password",
          placeholder: "Bevestig je wachtwoord.",
          id: "bevestigWachtwoord",
          index: 3,
        },
        {
          label: "Email",
          type: "email",
          autoComplete: "username",
          placeholder: "Vul hier je email in.",
          id: "EmailAccount",
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
      ],
    },
  ]);

  function updateAllKnoppen() {
    const checkLeeftijd = checkGeboorteDatum();
    const newKnoppenList = {
      Id: 3,
      lijst: [
        {
          label: "Voornaam",
          type: "text",
          placeholder: "Vul hier je voornaam in.",
          id: "Voornaam",
          index: 9,
        },
        {
          label: "Achternaam",
          type: "text",
          placeholder: "Vul hier je achternaam in.",
          id: "Achternaam",
          index: 10,
        },
        {
          label: "Email",
          type: "email",
          placeholder: "Vul hier je email in.",
          id: "Email",
          index: 11,
        },
        {
          label: "Bevestig email",
          type: "email",
          placeholder: "Bevestig je email.",
          id: "bevestigEmail",
          index: 12,
        },
        {
          label: "Geboortedatum",
          type: "date",
          placeholder: "Vul hier je geboorte datum in.",
          id: "geboorteDatum",
          index: 13,
        },
        {
          label: "Postcode",
          type: "text",
          placeholder: "Vul hier je postcode in.",
          id: "PostCode",
          index: 14,
        },
        {
          label: "Telefoonnummer",
          type: "tell",
          placeholder: "Vul hier je telefoonnummer in.",
          id: "TelefoonNummer",
          index: 15,
        },
      ],
    };
    if (checkLeeftijd) {
      const updatedValues = allKnoppen.some((v) => v.Id === newKnoppenList.Id)
        ? allKnoppen.filter((v) => v.Id !== newKnoppenList.Id)
        : [...allKnoppen, newKnoppenList];

      // Update the state with the new array list
      setAllKnoppen(updatedValues);
      setAantalStappen(allKnoppen.length);
      // setProgress(1 / (aantalStappen - 1))
    }
    // console.log(aantalStappen , allKnoppen.length)
  }

  const [inputValues, setInputValues] = useState({});
  const [inputValuesVoogd, setInputValuesVoogd] = useState({ Id: "" });
  const [errorStyle, setErrorStyle] = useState("hidden");
  const [error, setError] = useState(null);

  const handleInputChange = (id, value) => {
    setAllInputValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[currentStep] = {
        ...updatedValues[currentStep],
        [id]: value,
      };
      // console.table(updatedValues);
      return updatedValues;
    });
    // console.log(currentStep);
    if (currentStep === 1) {
      checkGeboorteDatum();
      // console.log(checkGeboorteDatum());
      updateAllKnoppen();
      // checkGeboorteDatum()
      // console.log("aantal stappemn: " + aantalStappen);
      // setProgress(progress)
    }
    setErrorStyle(null);
    setError(null);
  };

  const [progress, setProgress] = useState(0);
  const [tekst, setTekst] = useState("Ga verder");
  const [aantalStappen, setAantalStappen] = useState(2);
  const [currentStep, setCurrentStep] = useState(0);
  const [allInputValues, setAllInputValues] = useState(
    new Array(aantalStappen).fill({})
  );

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
    // console.log("aantal: " + aantalStappen);
    // console.table("allknoppen: " + allKnoppen);
  }, [isLoading, progress, aantalStappen]);

  async function handleRegistratie(e) {
    e.preventDefault();
    console.log("clicked");
    if (areFieldsFilledForStep(currentStep, allInputValues[currentStep])) {
      if (progress === 1 && !isLoading) {
        const Id = "";
        const gebruiker = inputValues.Voornaam + " " + inputValues.Achternaam;

        const achternaam = inputValues.Achternaam;
        const wachtwoord = inputValues.Wachtwoord;

        const EmailAccount = inputValues.EmailAccount;
        const userName = EmailAccount;
        const gebruikersNaam = gebruiker;
        const postcode = inputValues.PostCode;
        const telefoonnummer = inputValues.TelefoonNummer;
        const voornaam = inputValues.Voornaam;
        const geboorteDatum = inputValues.geboorteDatum;
        const voogd = inputValuesVoogd !== null ? inputValuesVoogd : null;
        const hulpmiddelenLijst =
          multipleValuesHulpmiddelen.length !== 0
            ? multipleValuesHulpmiddelen
            : null;
        const beperkingenLijst =
          multipleValuesBeperkingen.length !== 0
            ? multipleValuesBeperkingen
            : null;
        // const typeOnderzoekenLijst = multipleValuesHulpmiddelen.length !== 0 ? multipleValuesHulpmiddelen : null;
        const benaderOpties =
          multipleValuesBereik.length !== 0 ? multipleValuesBereik : null;

        // console.log(inputValuesVoogd);

        setisLoading(true);

        await axios
          .post(
            "http://localhost:5155/api/AaaAccount/ervaringsdeskundige/aanmelden",

            // "https://wpr-i-backend.azurewebsites.net/api/AaaAccount/ervaringsdeskundige/aanmelden"
            {
              // ...inputValues,
              // Voornaam:

              Id,
              gebruiker,
              userName,
              achternaam,
              wachtwoord,
              voornaam,
              postcode,
              telefoonnummer,
              gebruikersNaam,
              EmailAccount,
              geboorteDatum,
              voogd,
              hulpmiddelenLijst,
              benaderOpties,
              beperkingenLijst,
              headers: {
                "Access-Control-Allow-Origin": "http://localhost:5155/api/",
                // "Access-Control-Allow-Origin": "https://wpr-i-backend.azurewebsites.net/api/",
                "Access-Control-Allow-Methods":
                  "GET,PUT,POST,DELETE,PATCH,OPTIONS",
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
              // console.log(error.response.data);
              // console.log(error.response.data.errors);
            }
          )
          .finally(() => {
            setisLoading(false);
          });
      }
    } else {
      setError("Vul de velden in.");
      setErrorStyle("error");
    }

    //registratie logica
  }

  const areFieldsFilledForStep = (step, values) => {
    const knoppen = allKnoppen[step].lijst;
    for (const knop of knoppen) {
      const fieldId = knop.id;
      if (!values[fieldId]) {
        return false; // Return false if any input field is empty
      }
    }
    return true; // Return true if all input fields are filled
  };

  const checkGeboorteDatum = () => {
    const geboorteDatumValue = String(
      allInputValues[currentStep]["geboorteDatum"]
    ).split("-");
    const currentDate = new Date();

    const nowyear = currentDate.getFullYear();
    const nowmonth = currentDate.getMonth() + 1;
    const nowday = currentDate.getDate();

    const birthyear = geboorteDatumValue[0];
    const birthmonth = geboorteDatumValue[1];
    const birthday = geboorteDatumValue[2];

    const age = nowyear - birthyear;
    const age_month = nowmonth - birthmonth;
    const age_day = nowday - birthday;

    // If age is younger than 18, increase max steps
    if (age_month < 0 || (age_month === 0 && age_day < 0) || age < 18) {
      setAantalStappen(3);
      setProgress(currentStep / aantalStappen);
      return true;
    }
    return false;
  };

  const gaVerder = () => {
    const allFieldsFilled = areFieldsFilledForStep(
      currentStep,
      allInputValues[currentStep]
    );

    if (allFieldsFilled) {
      setProgress(progress + 1 / (aantalStappen - 1));
      setCurrentStep(Math.min(currentStep + 1, aantalStappen));
    } else {
      setError("Vul de velden in.");
      setErrorStyle("error");
      console.log("niet alle velden zijn ingevuld");
    }
    // console.log(currentStep);
  };

  const gaTerug = () => {
    setProgress(progress - 1 / (aantalStappen - 1));
    setCurrentStep(Math.max(currentStep - 1, 0));

    console.log(currentStep);
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
      <button className="exit-button" onClick={handleOverlayRegistreerClick}>
        x
      </button>
      <h1 className="Titel">Registratie</h1>

      <form className="registreer-wrapper" onSubmit={dontSubmit}>
        {currentStep === 0 && (
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
        {currentStep !== 0 && (
          <div className="input-holder">
            {currentStep === 2 ? <h2>Voogd registratie</h2> : <></>}
            <InvoerVelden
              knoppen={allKnoppen[currentStep].lijst || {}}
              handleInputChange={handleInputChange}
              inputValues={allInputValues[currentStep] || {}}
            />
          </div>
        )}
      
        <p style={{ fontSize: "20px" }} className={errorStyle}>
          {error}
        </p>

        <div className="flex-column full-size progress-bar">
          <progress value={progress} />
          <div className="full-size flex-center">
            {currentStep > 0 && (
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

export default Registreren;
