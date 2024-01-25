import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BeperkingenRegistreren from "./BeperkingenRegistreren2";
import axios from "axios";

export default function Registeren2() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    trigger,
    formState: { errors, isSubmitting, isLoading },
  } = useForm({ defaultValues: haalDataOp});

  const accountKeuze = watch("account");
  const [steps, setSteps] = useState([
    { id: "step 0", name: "Account keuze", fields: ["account"] },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [options, setOptions] = useState([]);


  const VulSteps = (keuze) => {
    if (keuze === "Ervaringsdeskundige") {
      setSteps([
        ...steps,
        { id: "step 1", name: "Extra's step", fields: [""] },
      ]);
    }
    if (keuze === "Bedrijf") {
    }
  };

  useEffect(() => {
    VulSteps(accountKeuze);
  }, [accountKeuze]);

  async function haalDataOp() {
    // setisLoading(true);
    await axios
      .get("http://localhost:5155/api/BeperkingOptie")
      // .get("https://wpr-i-backend.azurewebsites.net/api/BeperkingOptie")
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

  const gaVerder = async () => {
    console.log(steps);
    const fields = steps[currentStep].fields;
    const output = await trigger(fields, { shouldFocus: true });

    if (!output) {
      return;
    }

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 1) {
        await handleSubmit(onSubmit);
      }
      setCurrentStep((step) => step + 1);
    }
    // setProgress(progress + 1 / (aantalStappen - 1));
  };
  const gaTerug = () => {
    // setProgress(progress - 1 / (aantalStappen - 1));
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  const onSubmit = async (data) => {
    console.log(data)
    // try {
      
    // } catch (error) {
      
    // }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {currentStep === 0 && (
        <div>
          <h2>Maak een keus wat voor account u wilt aanmelden</h2>
          <div className="flex-column inside-keuze-wrapper">
            <div className="flex-row full-size keuze-holder">
              <input
                type="radio"
                id={"Ervaringsdeskundige account"}
                name={"Account keuze"}
                value={"Ervaringsdeskundige"}
                {...register("account", {
                  required: "Maak een keuze",
                })}
                // data-cy={item.id}
                // aria-label={item.aria_label}
              ></input>
              <label htmlFor={"Ervaringsdeskundige account"}>
                Ervaringsdeskundige account
              </label>
            </div>

            <div className="flex-row full-size keuze-holder">
              <input
                type="radio"
                id={"Bedrijven account"}
                name={"Account keuze"}
                value={"Bedrijf"}
                {...register("account", {
                  required: "Maak een keuze",
                })}
                // data-cy={item.id}
                // aria-label={item.aria_label}
              ></input>
              <label htmlFor={"Bedrijven account"}>Bedrijven account</label>
            </div>
            {errors.account && (
              <p className="error">{errors.account.message}</p>
            )}
          </div>
        </div>
      )}
      {currentStep === 1 && accountKeuze === "Ervaringsdeskundige" && (
        <div>
          {options.map((item) => {
                return (
                  <div key={item.id}>
                    <input
                      type="checkbox"
                      id={item.beperking}
                      // checked={selectedValues.some((v) => v.id === item.id)}
                      // onChange={() => handleCheckboxChange(item)}
                      value={item.beperking}
                      name={item.beperking}
                      {...register("beperkingen.id", {
                        required: "test"
                      })}
                    ></input>
                    <label htmlFor={item.beperking}>{item.beperking}</label>
                  </div>
                );
              })}
          {errors.beperkingen && (
              <p className="error">{errors.beperkingen.message}</p>
            )}
        </div>
      )}
            <button
              type="button"
              onClick={gaVerder}
              className="confirm-button-keuze"
              data-cy={"bevestigKeuze"}
              aria-label="Bevestig de keuze in welke soort account u wilt toevoegen"
            >
              Bevestig account keuze
            </button>
      <button type="submit">tekst</button>
    </form>
  );
}
