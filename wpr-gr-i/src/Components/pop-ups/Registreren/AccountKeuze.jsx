import { useState } from "react";
import "../Pop-up.css";

function AccountKeuze({ knoppen, handleInputChange, inputValues, onClick }) {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const handleRadioChange = (event) => {
    setSelectedAccount(event.target.value);
  };
  return (
    <>
      <h2>Maak een keus wat voor account u wilt aanmelden</h2>
      <div className="flex-column inside-keuze-wrapper">
        {knoppen.map((item) => {
          return (
            <div className="flex-row full-size keuze-holder" key={item.id}>
              <input
                type="radio"
                id={item.value}
                checked={item.checked}
                name={item.name}
                onChange={handleRadioChange}
                value={item.value}
                data-cy={item.id}
              ></input>
              <label htmlFor={item.value}>{item.label}</label>
            </div>
          );
        })}
        <button onClick={() => onClick(selectedAccount)} className="confirm-button-keuze" data-cy={"bevestigKeuze"}>Bevestig account keuze</button>
      </div>
    </>
  );
}

export default AccountKeuze;
