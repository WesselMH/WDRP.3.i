import { useEffect, useState } from "react";
import "./../Pop-up.css";
import axios from "axios";

function HulpmiddelenRegistreren({  selectedValues, onChange }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    haalDataOp();
  }, []);

  async function haalDataOp() {
    await axios
      .get("http://localhost:5155/api/Hulpmiddel")
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
      : ([...selectedValues, 
         value]);
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
              <div key={item.index}>
                <input
                  type="checkbox"
                  id={item.index}
                  checked={selectedValues.includes(item.name)}
                  onChange={() => handleCheckboxChange(item.name)}
                  name={item.name}
                ></input>
                <label htmlFor={item.index}>{item.titel}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HulpmiddelenRegistreren;
