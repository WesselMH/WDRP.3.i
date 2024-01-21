import "../Pop-up.css";
import InvoerVelden from "./InvoerVelden";
import BeperkingenRegistreren from "./BeperkingenRegistreren";
import { useEffect, useState } from "react";
import axios from "axios";
import HulpmiddelenRegistreren from "./HulpmiddelenRegistreren";
import BereikRegistratie from "./BereikRegistratie";
import AccountKeuze from "./AccountKeuze";

function Registreren({ handleOverlayRegistreerClick }) {
  const [allKnoppen, setAllKnoppen] = useState([
    {
      Id: 0,
      lijst: [
        {
          id: 1,
          name: "soort_account",
          label: "Ervaringsdeskundige account",
          value: "Ervaringsdeskundige",
        },
        {
          id: 2,
          name: "soort_account",
          label: "Bedrijven account",
          value: "Bedrijf",
        },
      ],
    },
  ]);

  function updateAllKnoppen(value) {
    // const checkLeeftijd = checkGeboorteDatum();

    const KnoppenLijstErvaringsDeskundige = {
      Id: 2,
      lijst: [
        {
          label: "Voornaam",
          type: "text",
          placeholder: "Vul hier je voornaam in.",
          id: "Voornaam",
          index: 0,
          aria_label: "Voornaam invullen",
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
    };
    const KnoppenLijstLeeftijd = {
      Id: 3,
      lijst: [
        {
          label: "Voornaam",
          type: "text",
          placeholder: "Vul hier je voornaam in.",
          id: "Voornaam",
          index: 1,
        },
        {
          label: "Achternaam",
          type: "text",
          placeholder: "Vul hier je achternaam in.",
          id: "Achternaam",
          index: 2,
        },
        {
          label: "Email",
          type: "email",
          placeholder: "Vul hier je email in.",
          id: "Email",
          index: 3,
        },
        {
          label: "Bevestig email",
          type: "email",
          placeholder: "Bevestig je email.",
          id: "bevestigEmail",
          index: 4,
        },
        {
          label: "Geboortedatum",
          type: "date",
          placeholder: "Vul hier je geboorte datum in.",
          id: "geboorteDatum",
          index: 5,
        },
        {
          label: "Postcode",
          type: "text",
          placeholder: "Vul hier je postcode in.",
          id: "PostCode",
          index: 6,
        },
        {
          label: "Telefoonnummer",
          type: "tell",
          placeholder: "Vul hier je telefoonnummer in.",
          id: "TelefoonNummer",
          index: 7,
        },
      ],
    };
    const KnoppenLijstBedrijf = {
      Id: 4,
      lijst: [
        {
          label: "Email / gebruikersnaam",
          type: "email",
          autoComplete: "username",
          placeholder: "Bedrijf@voorbeeld.com",
          id: "EmailAccount",
          index: 1,
        },
        {
          label: "Website URL",
          type: "text",
          placeholder: "Website URL",
          id: "URL",
          index: 2,
        },
        {
          label: "Wachtwoord",
          type: "password",
          autoComplete: "new-password",
          placeholder: "Wachtwoord",
          id: "Wachtwoord",
          index: 3,
        },
        {
          label: "Bevestig wachtwoord",
          type: "password",
          autoComplete: "new-password",
          placeholder: "Bevestig je wachtwoord",
          id: "bevestigWachtwoord",
          index: 4,
        },
        {
          label: "Locatie bedrijf",
          type: "text",
          placeholder: "Vul hier het adres in",
          id: "Locatie",
          index: 5,
        },
        {
          label: "Informatie",
          inputType: "textarea",
          placeholder: "Vul hier wat informatie over het bedrijf in",
          id: "Informatie",
          index: 6,
        },
      ],
    };

    if (value === "Ervaringsdeskundige") {
      const updatedValues = allKnoppen.some(
        (v) => v.Id === KnoppenLijstErvaringsDeskundige.Id
      )
        ? allKnoppen
        : [...allKnoppen, KnoppenLijstErvaringsDeskundige];

      // Update the state with the new array list
      setAllKnoppen(updatedValues);
    }

    if (value === "Bedrijf") {
      const updatedValues = allKnoppen.some(
        (v) => v.Id === KnoppenLijstBedrijf.Id
      )
        ? allKnoppen
        : [...allKnoppen, KnoppenLijstBedrijf];

      // Update the state with the new array list
      setAllKnoppen(updatedValues);
      console.log("test");
    }

    if (value === "LeeftijdCheck") {
      console.log("error");
      const updatedValues = allKnoppen.some(
        (v) => v.Id === KnoppenLijstLeeftijd.Id
      )
        ? allKnoppen.filter((v) => v.Id !== KnoppenLijstLeeftijd.Id)
        : [...allKnoppen, KnoppenLijstLeeftijd];

      // Update the state with the new array list
      setAllKnoppen(updatedValues);
    }
    setAantalStappen(allKnoppen.length - 1);

    // setProgress(currentStep / aantalStappen )
  }

  const [errorStyle, setErrorStyle] = useState("hidden");
  const [error, setError] = useState(null);

  let geboorteGecheckt = false;

  const handleInputChange = (id, value) => {
    setAllInputValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[currentStep] = {
        ...updatedValues[currentStep],
        [id]: value,
      };
      return updatedValues;
    });
    if (currentStep === 1 && !geboorteGecheckt) {
      // console.log(checkGeboorteDatum())
      if (checkGeboorteDatum()) {
        updateAllKnoppen("LeeftijdCheck");
        geboorteGecheckt = true;
      }
    }
    setErrorStyle(null);
    setError(null);
  };

  const [progress, setProgress] = useState(0);
  const [tekst, setTekst] = useState("Ga verder");
  const [aantalStappen, setAantalStappen] = useState(allKnoppen.length);
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
    setAantalStappen(allKnoppen.length - 1);
    setProgress(currentStep / aantalStappen);
    // console.table(
    //   currentStep,
    //   aantalStappen,
    //   allKnoppen.length,
    //   allKnoppen,
    //   progress
    // );
  }, [isLoading, progress, aantalStappen, allKnoppen, currentStep]);

  async function handleRegistratie(e) {
    e.preventDefault();
    // console.log("clicked");
    if (areFieldsFilledForStep(currentStep, allInputValues[currentStep])) {
      // console.table(allInputValues);
      if (progress === 1 && !isLoading) {
        const Id = "";
        let gebruikersNaam;
        const wachtwoord = allInputValues[1].Wachtwoord;

        const EmailAccount = allInputValues[1].EmailAccount;
        const userName = EmailAccount;
        // const typeOnderzoekenLijst = multipleValuesHulpmiddelen.length !== 0 ? multipleValuesHulpmiddelen : null;

        // console.log(inputValuesVoogd);

        setisLoading(true);

        if (accountKeuze === "Ervaringsdeskundige") {
          const gebruiker =
            allInputValues[1].Voornaam + " " + allInputValues[1].Achternaam;

          const achternaam = allInputValues[1].Achternaam;
          gebruikersNaam = gebruiker;
          const postcode = allInputValues[1].PostCode;
          const telefoonnummer = allInputValues[1].TelefoonNummer;
          const voornaam = allInputValues[1].Voornaam;
          const geboorteDatum = allInputValues[1].geboorteDatum;

          let voogd = allInputValues[2] !== null ? allInputValues[2] : null;
          if (voogd) {
            voogd = { ...voogd, Id: 0 };
          }

          const hulpmiddelen =
            multipleValuesHulpmiddelen.length !== 0
              ? multipleValuesHulpmiddelen
              : null;
          if (hulpmiddelen) {
            const losseHulpmiddelen = [...hulpmiddelen];
            losseHulpmiddelen.forEach((element) => {
              element["id"] = 0;
            });
          }

          const beperkingen =
            multipleValuesBeperkingen.length !== 0
              ? multipleValuesBeperkingen
              : null;
          if (beperkingen) {
            const losseBeperkingen = [...beperkingen];
            losseBeperkingen.forEach((element) => {
              element["id"] = 0;
            });
          }

          const benaderOpties =
            multipleValuesBereik.length !== 0 ? multipleValuesBereik : null;
          if (benaderOpties) {
            const losseBenaderOpties = [...benaderOpties];
            losseBenaderOpties.forEach((element) => {
              element["id"] = 0;
            });
          }

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
                hulpmiddelen,
                benaderOpties,
                headers: {
                  "Access-Control-Allow-Origin": "http://localhost:5155/api/",
                  // "Access-Control-Allow-Origin": "https://wpr-i-backend.azurewebsites.net/api/",
                  "Access-Control-Allow-Methods": "POST",
                  "Access-Control-Allow-Headers": "Content-Type, Custom-Header",
                  "Content-Type": "application/json",
                },
              }
            )
            .then(
              (response) => {
                // console.log(response);
                handleOverlayRegistreerClick();
              },
              (error) => {
                console.log(error);
                // console.log(error.response.data);
                // console.log(error.response.data.errors);

                const errors = error.response.data.errors;
                const errorsString = JSON.stringify(error.response.data.errors);
                if (errorsString.includes("DuplicateUserName")) {
                  // alert("Er is al een account met dit email adres");
                  setError("Er is al een account met dit email adres");
                  setErrorStyle("error");
                }
              }
            )
            .finally(() => {
              setisLoading(false);
            });
        }

        if (accountKeuze === "Bedrijf") {
          gebruikersNaam = allInputValues[1].EmailAccount;
          const URL = allInputValues[1].URL;
          const locatie = allInputValues[1].Locatie;
          const informatie = allInputValues[1].Informatie;

          // alert("hoi je probeerd in te loggen")
          await axios
            .post(
              "http://localhost:5155/api/AaaAccount/bedrijf/aanmelden",
              // "https://wpr-i-backend.azurewebsites.net/api/AaaAccount/bedrijf/aanmelden"
              {
                Id,
                userName,
                wachtwoord,
                gebruikersNaam,
                EmailAccount,
                URL,
                locatie,
                informatie,
                headers: {
                  "Access-Control-Allow-Origin": "http://localhost:5155/api/",
                  // "Access-Control-Allow-Origin": "https://wpr-i-backend.azurewebsites.net/api/",
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
                // console.log(error.response.data);
                // console.log(error.response.data.errors);
              }
            )
            .finally(() => {
              setisLoading(false);
            });
        }
      }
    } else {
      setError("Vul de velden in.");
      setErrorStyle("error");
    }

    //registratie logica
  }

  const areFieldsFilledForStep = (step, values) => {
    if (step === 0) {
      return true;
    }
    if (!values) {
      return false;
    }
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
    if (!allInputValues[currentStep]) {
      return false;
    }
    // console.table(allInputValues[currentStep]);
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
    if (
      age < 18 ||
      (age === 18 && (age_month < 0 || (age_month === 0 && age_day < 0)))
    ) {
      setAantalStappen(allKnoppen.length - 1);
      // setProgress(currentStep / aantalStappen);
      return true;
    }
    geboorteGecheckt = false;
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
    // console.table(allKnoppen);
  };

  const gaTerug = () => {
    setProgress(progress - 1 / (aantalStappen - 1));
    setCurrentStep(Math.max(currentStep - 1, 0));

    // console.table(allKnoppen);
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

  const [accountKeuze, setAccountKeuze] = useState();

  const handleAcountKeuze = (value) => {
    updateAllKnoppen(value);
    setAccountKeuze(value);
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
        {currentStep === 0 && !accountKeuze && (
          <div className="keuze-wrapper ">
            <AccountKeuze
              knoppen={allKnoppen[currentStep].lijst || {}}
              handleInputChange={handleInputChange}
              onClick={handleAcountKeuze}
            />
          </div>
        )}

        {currentStep === 0 && accountKeuze === "Ervaringsdeskundige" && (
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

        {currentStep === 0 && accountKeuze === "Bedrijf" && (
          <div className="flex-center welkom-bedrijf">
            <p>
              Welkom bij ons platform! Op dit platform kunnen accessibility
              onderzoeken afgenomen worden door onze ervaringsdeskundige. Mocht
              dit nou het geen zijn wat uw bedrijf nodig heeft maak dan snel een
              account aan door op "ga verder" te klikken
            </p>
          </div>
        )}

        {currentStep > 0 && accountKeuze === "Bedrijf" && (
          <div className="input-holder">
            <InvoerVelden
              knoppen={allKnoppen[currentStep].lijst}
              handleInputChange={handleInputChange}
              inputValues={allInputValues[currentStep] || {}}
            />
          </div>
        )}

        {currentStep > 0 && accountKeuze === "Ervaringsdeskundige" && (
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

        <div
          className={
            !accountKeuze ? "hidden" : "flex-column full-size progress-bar"
          }
        >
          <progress value={progress} data-cy="progressBar" />
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
