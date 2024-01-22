import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InvoerVelden from "../../Components/pop-ups/Registreren/InvoerVelden";
import axios, { all } from "axios";

function OpdrachtPlaatsen({}) {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [role, setRole] = useState("");
  const [opdrachtValues, setOpdrachtValues] = useState({});
  const [errorStyle, setErrorStyle] = useState("hidden");
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const [multipleValuesCategorie, setMultipleValuesCategorie] = useState([]);
  const handleMultipleValuesChangeCategorie = (newValues) => {
    setMultipleValuesCategorie(newValues);
    console.log(multipleValuesCategorie);
  };

  const navigate = useNavigate();

  const [tekst, setTekst] = useState("Upload opdracht");

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("token");

    if (isLoading) {
      setTekst("Loading...");
    } else {
      setTekst("Upload opdracht");
    }

    if (loggedInUser !== "null") {
      const loggedInUserrole =
        jwtDecode(loggedInUser)[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];
      setRole(loggedInUserrole);
    }
  }, [isLoading]);

  const knoppen = [
    // {
    //   label: "Bedrijfs naam",
    //   type: "text",
    //   placeholder: "Bedrijfs naam",
    //   id: "Uitvoerder",
    //   index: 0,
    // },
    {
      label: "Titel",
      type: "text",
      placeholder: "Titel onderzoek",
      id: "Titel",
      index: 1,
    },
    {
      label: "Datum",
      type: "date",
      placeholder: "Datum onderzoek",
      id: "Datum",
      index: 2,
    },
    {
      label: "Type opdracht",
      type: "text",
      TypeInvoerVeld: "select",
      placeholder: "",
      id: "Categorie",
      index: 3,
    },
    {
      label: "Tijden",
      type: "text",
      placeholder: "Wat zijn de tijden van het onderzoek",
      id: "Tijden",
      index: 4,
    },
    // {
    //   label: "Tijdsduur",
    //   type: "text",
    //   placeholder: "Wat is de tijdsduur van het onderzoek",
    //   id: "Datum",
    //   index: 5,
    // },
    {
      label: "Locatie",
      type: "text",
      placeholder: "Locatie van het onderzoek",
      id: "Locatie",
      index: 6,
    },
    {
      label: "Beloning",
      type: "text",
      placeholder: "Wat is de belonning voor het onderzoek",
      id: "Beloning",
      index: 7,
    },
    {
      label: "Opdraht omschrijving",
      type: "text",
      inputType: "textarea",
      placeholder: "Geef een omschrijving van het onderzoek",
      id: "Beschrijving",
      index: 8,
    },
  ];

  const areFieldsFilledForStep = (values) => {
    if (!values) {
      return false;
    }

    for (const knop of knoppen) {
      const fieldId = knop.id;
      if (!values[fieldId]) {
        return false; // Return false if any input field is empty
      }
    }
    return true; // Return true if all input fields are filled
  };

  const handleInputChange = (id, value) => {
    setOpdrachtValues({
      ...opdrachtValues,
      [id]: value,
    });
    setErrorStyle(null);
    setError(null);
  };
  //ik ga hier mee verder op aan andere branch gr wessel

  const Upload = async (e) => {
    e.preventDefault();
    setisLoading(true);

    const Id = 0;

    if (
      areFieldsFilledForStep(opdrachtValues)
      // true
    ) {
      if (!isLoading) {
        setisLoading(true);
        
        if (multipleValuesCategorie) {
          const losseCategorieen = [...multipleValuesCategorie];
          losseCategorieen.forEach((element) => {
            element["id"] = 0;
          });
        }

        await axios
          .post(
            "http://localhost:5155/api/Onderzoek",
            // "https://wpr-i-backend.azurewebsites.net/api/Onderzoek",
            {
              // ...inputValues,
              // Voornaam:

              Id,
              Beloning: opdrachtValues.Beloning,
              Beschrijving: opdrachtValues.Beschrijving,
              Locatie: opdrachtValues.Locatie,
              SoortOnderzoek: multipleValuesCategorie[1],
              CheckedDoorBeheerder: false,
              Titel: opdrachtValues.Titel,
              Uitvoerder: opdrachtValues.Uitvoerder,
              headers: {
                "Access-Control-Allow-Origin": "http://localhost:5155/api/",
                // "Access-Control-Allow-Origin":
                //   "https://wpr-i-backend.azurewebsites.net/api/",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type, Custom-Header",
                "Content-Type": "application/json",
              },
            }
          )
          .then(
            (response) => {
              navigate(-1);
              // console.log(response);
              // handleOverlayPlaatsenClick();
            },
            (error) => {
              console.log(error);
              // console.log(error.response.data);
              // console.log(error.response.data.errors);

              // const errors = error.response.data.errors;
              // const errorsString = JSON.stringify(error.response.data.errors);
              // if (errorsString.includes("DuplicateUserName")) {
              //   // alert("Er is al een account met dit email adres");
              //   setError("Er is al een account met dit email adres");
              //   setErrorStyle("error");
              // }
            }
          )
          .finally(() => {
            setisLoading(false);
          });
      }
    } else {
      setError("Vul de velden in.");
      setErrorStyle("error");
      console.log("niet alle velden zijn ingevuld");
    }
  };
  // if (token !== "null") {
  //   if (role.includes("bedrijf")) {
  return (
    <div className="pop-up">
      {/* <button className="exit-button" onClick={handleOverlayPlaatsenClick}>
        x
      </button> */}
      <Link to={-1} className="exit-button">
        x
      </Link>
      <h1 className="Titel">Opdracht plaatsen</h1>

      <form className="Opdracht-wrapper" onSubmit={Upload}>
        <div className="input-holder">
          <InvoerVelden
            knoppen={knoppen}
            handleInputChange={handleInputChange}
            inputValues={opdrachtValues || {}}
            handleMultipleValuesChangeCatergorie={
              handleMultipleValuesChangeCategorie
            }
            multipleValuesCategorie={multipleValuesCategorie}
          />
        </div>

        <p style={{ fontSize: "20px" }} className={errorStyle}>
          {error}
        </p>

        <div className="full-size flex-center">
          <button className="confirm-button">{tekst}</button>
        </div>
      </form>
    </div>
  );
  //   }
  // } else {
  //   return <Navigate replace to="/Unauthorized" />;
  // }
}

export default OpdrachtPlaatsen;
