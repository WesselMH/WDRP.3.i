import axios from "axios";
import { useEffect, useState } from "react";

function TypeOpdrachtenGet({ selectedValues, onChange }) {
  const [options, setOptions] = useState([]);
  const [isLoading, setisLoading] = useState([]);

  useEffect(() => {
    haalDataOp();
  }, []);

  async function haalDataOp() {
    setisLoading(true);
    await axios
      .get("http://localhost:5155/api/Categorie")
    //   .get("https://wpr-i-backend.azurewebsites.net/api/Categorie")
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
        setisLoading(false);
      });
  }

  const handleCheckboxChange = (value) => {
    const updatedValues = selectedValues.some((v) => v.id === value.id)
      ? selectedValues.filter((v) => v.id !== value.id)
      : [...selectedValues, value];
    onChange(updatedValues);
  };

  return (
    <div className="">
      <div className="selecter-lijst">
        <h3>Type onderzoek</h3>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {options.map((item) => {
                return (
                  <div
                    className="flex-row full-size keuze-holder"
                    key={item.id}
                  >
                    <input
                      type="radio"
                      id={item.opties}
                      checked={selectedValues.some((v) => v.id === item.id)}
                      name={"Categorie"}
                      onChange={() => handleCheckboxChange(item)}
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
        </div>
      </div>
    </div>
  );
}

export default TypeOpdrachtenGet;
