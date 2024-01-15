import { useEffect, useState } from "react";
import "./../Pop-up.css";
import axios from "axios";

function HulpmiddelenRegistreren({ selectedValues, onChange }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    haalDataOp();
  }, []);

  async function haalDataOp() {
    await axios
      .get("http://localhost:5155/api/Hulpmiddelen")
      // .get("https://wpr-i-backend.azurewebsites.net/api/Hulpmiddelen")
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
    //   console.log(updatedValues);
  };

  return (
    <div>
      <h2>Selecteer uw hulpmiddel</h2>
      <div className="selecter-lijst">
        <h3>Hulpmiddelen</h3>
        <div>
          <div className="submit-hulpmiddel"></div>
          {options.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  checked={selectedValues.includes(item.middel)}
                  onChange={() => handleCheckboxChange(item.middel)}
                  name={item.middel}
                ></input>
                <label htmlFor={item.id}>{item.middel}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HulpmiddelenRegistreren;
