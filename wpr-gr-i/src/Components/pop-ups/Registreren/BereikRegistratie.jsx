import axios from "axios";
import { useEffect, useState } from "react";

function BereikRegistratie({ selectedValues, onChange }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    haalDataOp();
  }, []);

  async function haalDataOp() {
    await axios
      .get("http://localhost:5155/api/BenaderOptie")
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
      <h2>Selecteer hoe wij u kunnen bereiken</h2>
      <div className="selecter-lijst">
        <h3>Benadering</h3>
        <div>
          {options.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  checked={selectedValues.includes(item.type)}
                  onChange={() => handleCheckboxChange(item.type)}
                  name={item.type}
                ></input>
                <label htmlFor={item.id}>{item.type}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BereikRegistratie;
