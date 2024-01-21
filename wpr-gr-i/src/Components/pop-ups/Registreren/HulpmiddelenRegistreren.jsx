import { useEffect, useState } from "react";
import "./../Pop-up.css";
import axios from "axios";

function HulpmiddelenRegistreren({ selectedValues, onChange }) {
  const [options, setOptions] = useState([]);
  const [isLoading, setisLoading] = useState([]);

  useEffect(() => {
    haalDataOp();
  }, []);

  async function haalDataOp() {
    setisLoading(true);
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
      <h2>Selecteer uw hulpmiddel</h2>
      <div className="selecter-lijst">
        <h3>Hulpmiddelen</h3>
        <div>
          <div className="submit-hulpmiddel"></div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {options.map((item) => {
                return (
                  <div key={item.id}>
                    <input
                      type="checkbox"
                      id={item.middel}
                      checked={selectedValues.some((v) => v.id === item.id)}
                      onChange={() => handleCheckboxChange(item)}
                      name={item.middel}
                    ></input>
                    <label htmlFor={item.middel}>{item.middel}</label>
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

export default HulpmiddelenRegistreren;
