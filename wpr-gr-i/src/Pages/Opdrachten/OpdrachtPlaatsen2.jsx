import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

function OpdrachtPlaatsen2({}) {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [role, setRole] = useState("");
  const [opdrachtValues, setOpdrachtValues] = useState({});
  const [options, setOptions] = useState([]);

  // const [errorStyle, setErrorStyle] = useState("hidden");
  // const [error, setError] = useState(null);
  // const [isLoading, setisLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isLoading },
  } = useForm({ defaultValues: haalDataOp });

  // const [multipleValuesCategorie, setMultipleValuesCategorie] = useState([]);
  // const handleMultipleValuesChangeCategorie = (newValues) => {
  //   setMultipleValuesCategorie(newValues);
  //   console.log(multipleValuesCategorie);
  // };

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("token");

    if (loggedInUser !== "null") {
      const loggedInUserrole =
        jwtDecode(loggedInUser)[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];
      setRole(loggedInUserrole);
    }
    haalDataOp();
  }, []);

  // const knoppen = [
  //   // {
  //   //   label: "Bedrijfs naam",
  //   //   type: "text",
  //   //   placeholder: "Bedrijfs naam",
  //   //   id: "Uitvoerder",
  //   //   index: 0,
  //   // },
  //   {
  //     label: "Titel",
  //     type: "text",
  //     placeholder: "Titel onderzoek",
  //     id: "Titel",
  //     index: 1,
  //   },
  //   {
  //     label: "Datum",
  //     type: "date",
  //     placeholder: "Datum onderzoek",
  //     id: "Datum",
  //     index: 2,
  //   },
  //   {
  //     label: "Type opdracht",
  //     type: "text",
  //     TypeInvoerVeld: "select",
  //     placeholder: "",
  //     id: "Categorie",
  //     index: 3,
  //   },
  //   {
  //     label: "Tijden",
  //     type: "text",
  //     placeholder: "Wat zijn de tijden van het onderzoek",
  //     id: "Tijden",
  //     index: 4,
  //   },
  //   // {
  //   //   label: "Tijdsduur",
  //   //   type: "text",
  //   //   placeholder: "Wat is de tijdsduur van het onderzoek",
  //   //   id: "Datum",
  //   //   index: 5,
  //   // },
  //   {
  //     label: "Locatie",
  //     type: "text",
  //     placeholder: "Locatie van het onderzoek",
  //     id: "Locatie",
  //     index: 6,
  //   },
  //   {
  //     label: "Beloning",
  //     type: "text",
  //     placeholder: "Wat is de belonning voor het onderzoek",
  //     id: "Beloning",
  //     index: 7,
  //   },
  //   {
  //     label: "Opdraht omschrijving",
  //     type: "text",
  //     inputType: "textarea",
  //     placeholder: "Geef een omschrijving van het onderzoek",
  //     id: "Beschrijving",
  //     index: 8,
  //   },
  // ];

  async function haalDataOp() {
    // setisLoading(true);
    await axios
      .get("http://localhost:5155/api/Categorie")
      //.get("https://wpr-i-backend.azurewebsites.net/api/Categorie")
      .then(
        (response) => {
          setOptions(response.data);
          // console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      )
      .finally(() => {
        // setisLoading(false);
      });
  }

  const Upload = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "http://localhost:5155/api/Onderzoek",
        // "https://wpr-i-backend.azurewebsites.net/api/Onderzoek",
        {
          // ...inputValues,
          // Voornaam:

          Id: 0,
          Beloning: opdrachtValues.Beloning,
          Beschrijving: opdrachtValues.Beschrijving,
          Locatie: opdrachtValues.Locatie,
          // SoortOnderzoek: multipleValuesCategorie[1],
          CheckedDoorBeheerder: false,
          Titel: opdrachtValues.Titel,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:5155/api/",
            // "Access-Control-Allow-Origin":
            //   "https://wpr-i-backend.azurewebsites.net/api/",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Custom-Header",
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
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
        // setisLoading(false);
      });
  };

  const onSubmit = async (data) => {
    try {
      Upload();
      // throw new Error();
      // console.log(data);
    } catch (error) {
      setError("titel", {
        message: "test",
      });
      setError("root", {
        message: "error",
      });
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

      <form className="Opdracht-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-holder">
          <div className="input-bundel2 flex-column ">
            <label htmlFor="titel">Titel</label>
            <input
              {...register("titel", {
                required: "Titel moet worden toegevoegd",
              })}
              type="text"
              placeholder="Titel opdracht"
              className="input-veld"
              id="titel"
            />
            {errors.titel && <p className="error">{errors.titel.message}</p>}
          </div>

          <div className="input-bundel2 flex-column ">
            <label htmlFor="datum">Datum</label>
            <input
              {...register("datum", { required: "Voer een datum in" })}
              type="date"
              className="input-veld"
              id="datum"
            />
            {errors.datum && <p className="error">{errors.datum.message}</p>}
          </div>

          <div className="input-bundel2 flex-column ">
            <label htmlFor="eindTijden">Begin tijd</label>
            <input
              {...register("eindTijden", {
                required: "Voer een begin tijd in",
              })}
              type="time"
              placeholder="Tijden voor de opdracht"
              className="input-veld"
              id="eindTijden"
            />
            {errors.eindTijden && (
              <p className="error">{errors.eindTijden.message}</p>
            )}
            <label htmlFor="beginTijden">Eind tijd</label>
            <input
              {...register("beginTijden", {
                required: "Voer een eind tijd in",
              })}
              type="time"
              placeholder="Tijden voor de opdracht"
              className="input-veld"
              id="beginTijden"
            />
            {errors.beginTijden && (
              <p className="error">{errors.beginTijden.message}</p>
            )}
          </div>

          <div className="input-bundel2 flex-column ">
            <label htmlFor="">Type onderzoek</label>
            <div>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  {options.map((item) => {
                    return (
                      <div className="keuze-holder" key={item.id}>
                        <input
                          type="radio"
                          id={item.opties}
                          {...register("categorie", {
                            required: "Kies een type",
                          })}
                          value={item.opties}
                          data-cy={item.id}
                          aria-label={item.aria_label}
                        ></input>
                        <label htmlFor={item.opties}>{item.opties}</label>
                      </div>
                    );
                  })}
                </>
              )}
              {errors.categorie && (
                <p className="error">{errors.categorie.message}</p>
              )}
            </div>
          </div>

          <div className="input-bundel2 flex-column ">
            <label htmlFor="locatie">Locatie</label>
            <input
              {...register("locatie", {
                required: "Locatie moet worden toegevoegd",
              })}
              type="text"
              placeholder="Titel opdracht"
              className="input-veld"
              id="locatie"
            />
            {errors.locatie && (
              <p className="error">{errors.locatie.message}</p>
            )}
          </div>

          <div className="input-bundel2 flex-column ">
            <label htmlFor="beloning">Beloning</label>
            <input
              {...register("beloning", {
                required: "Beloning moet worden toegevoegd",
              })}
              type="text"
              placeholder="Titel opdracht"
              className="input-veld"
              id="beloning"
            />
            {errors.beloning && (
              <p className="error">{errors.beloning.message}</p>
            )}
          </div>

          <div className="input-bundel2 flex-column full-size">
            <label htmlFor="omschrijving">Opdracht omschrijving</label>
            <textarea
              {...register("omschrijving", {
                required: "Opdracht omschrijving moet worden toegevoegd",
              })}
              type="text"
              placeholder="Titel opdracht"
              className="input-veld info-bedrijf"
              id="omschrijving"
            />
            {errors.omschrijving && (
              <p className="error">{errors.omschrijving.message}</p>
            )}
          </div>
        </div>

        <div className="full-size flex-center">
          {errors.root && <p className="error">{errors.root.message}</p>}
          <button
            disabled={isSubmitting}
            className="confirm-button"
            type="submit"
          >
            {isSubmitting ? "Loading..." : "Upload opdracht"}
          </button>
        </div>
      </form>
    </div>
  );
  // }
  // } else {
  //   return <Navigate replace to="/Unauthorized" />;
  // }
}

export default OpdrachtPlaatsen2;
