import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

function OpdrachtPlaatsen() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [role, setRole] = useState("");
  const [options, setOptions] = useState([]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isLoading },
  } = useForm({ defaultValues: haalDataOp });

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

  async function haalDataOp() {
    await axios
      .get("http://wpr-i-backend.azurewebsites.net/api/Categorie")
      //.get("https://wpr-i-backend.azurewebsites.net/api/Categorie")
      .then(
        (response) => {
          setOptions(response.data);
          // console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  const onSubmit = async (data) => {
    try {
      await axios
        .post(
          "http://wpr-i-backend.azurewebsites.net/api/Onderzoek",
          // "https://wpr-i-backend.azurewebsites.net/api/Onderzoek",
          {
            Id: 0,
            ...data,
            CheckedDoorBeheerder: false,
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
            navigate("/BedrijvenPortaal");
          },
          (error) => {
            console.log(error);
            // const errorMessage = JSON.stringify(error.data.errors)
            // throw new Error(errorMessage)
            // return error;
          }
        );
      throw new Error();
      // console.log(data);
    } catch (error) {
      setError("titel", {
        message: "test",
      });
      setError("root", {
        message: error,
      });
    }
  };

  if (token !== "null") {
    if (role.includes("bedrijf")) {
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
                {errors.titel && (
                  <p className="error">{errors.titel.message}</p>
                )}
              </div>

              <div className="input-bundel2 flex-column ">
                <label htmlFor="datum">Datum</label>
                <input
                  {...register("datum", { required: "Voer een datum in" })}
                  type="date"
                  className="input-veld"
                  id="datum"
                />
                {errors.datum && (
                  <p className="error">{errors.datum.message}</p>
                )}
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
                              {...register("soortonderzoek", {
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
                  {errors.soortonderzoek && (
                    <p className="error">{errors.soortonderzoek.message}</p>
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
                  {...register("beschrijving", {
                    required: "Opdracht omschrijving moet worden toegevoegd",
                  })}
                  type="text"
                  placeholder="Titel opdracht"
                  className="input-veld info-bedrijf"
                  id="omschrijving"
                />
                {errors.beschrijving && (
                  <p className="error">{errors.beschrijving.message}</p>
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
    }
  } else {
    return <Navigate replace to="/Unauthorized" />;
  }
}

export default OpdrachtPlaatsen;
