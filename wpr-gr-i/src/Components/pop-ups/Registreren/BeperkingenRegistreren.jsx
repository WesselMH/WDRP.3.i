import axios from "axios";
import "./../Pop-up.css";
import { useEffect, useState } from "react";

function BeperkingenRegistreren({ selectedValues, onChange }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    haalDataOp();
  }, []);

  async function haalDataOp() {
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
      .finally(() => {});
  }

  const handleCheckboxChange = (value) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onChange(updatedValues);
    // console.log(updatedValues);
  };

  return (
    <div>
      <h2>Selecteer uw beperking</h2>
      <div className="selecter-lijst">
        <h3>Beperkingen</h3>
        <div>
          {options.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={item.beperking}
                  checked={selectedValues.includes(item.beperking)}
                  onChange={() => handleCheckboxChange(item.beperking)}
                  name={item.beperking}
                ></input>
                <label htmlFor={item.beperking}>{item.beperking}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BeperkingenRegistreren;
