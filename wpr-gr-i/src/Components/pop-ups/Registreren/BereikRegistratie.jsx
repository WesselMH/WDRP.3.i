import axios from "axios";
import { useEffect, useState } from "react";

function BereikRegistratie({ selectedValues, onChange }) {
  const [options, setOptions] = useState([]);
  const [isLoading, setisLoading] = useState([]);

  useEffect(() => {
    haalDataOp();
  }, []);

  async function haalDataOp() {
    setisLoading(true);
    await axios
      .get("http://localhost:5155/api/BenaderOptie")
      // .get("https://wpr-i-backend.azurewebsites.net/api/BenaderOptie")
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
    <div>
      <h2>Selecteer hoe wij u kunnen bereiken</h2>
      <div className="selecter-lijst">
        <h3>Benadering</h3>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {options.map((item) => {
                return (
                  <div key={item.id}>
                    <input
                      type="checkbox"
                      id={item.type}
                      checked={selectedValues.some((v) => v.id === item.id)}
                      onChange={() => handleCheckboxChange(item)}
                      name={item.type}
                      aria-label={item.type}
                    ></input>
                    <label htmlFor={item.type}>{item.type}</label>
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

export default BereikRegistratie;
