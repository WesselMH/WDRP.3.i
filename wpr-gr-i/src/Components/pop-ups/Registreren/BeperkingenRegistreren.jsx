import axios from "axios";
import "./../Pop-up.css";
import { useEffect, useState } from "react";

function BeperkingenRegistreren({ selectedValues, onChange }) {
  const [options, setOptions] = useState([]);
  const [isLoading, setisLoading] = useState([]);

  useEffect(() => {
    haalDataOp();
  }, []);

  async function haalDataOp() {
    setisLoading(true);
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
      <h2>Selecteer uw beperking</h2>
      <div className="selecter-lijst">
        <h3>Beperkingen</h3>
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
                      id={item.beperking}
                      checked={selectedValues.some((v) => v.id === item.id)}
                      onChange={() => handleCheckboxChange(item)}
                      name={item.beperking}
                    ></input>
                    <label htmlFor={item.beperking}>{item.beperking}</label>
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

export default BeperkingenRegistreren;
