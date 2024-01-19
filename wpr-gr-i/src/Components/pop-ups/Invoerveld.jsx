import React, { useEffect, useState } from "react";

function InvoerVeld({
  inputType,
  label,
  className,
  type,
  autoComplete,
  placeholder,
  id,
  onChange,
  value,
  data_cy,
  aria_label,
}) {
  const [inputValue, setInputValue] = useState("");
  const [wachtwoordZichtbaar, setwachtwoordZichtbaar] = useState(false);

  useEffect(() => {
    // Update inputValue when the value prop changes (for controlled components)
    setInputValue(value || "");
  }, [value]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Call the onChange prop with the updated value
    onChange && onChange(value);
  };

  function ShowPassword() {
    console.log("clicked");
    setwachtwoordZichtbaar(!wachtwoordZichtbaar);
  }

  return (
    <>
      {inputType === "textarea" ? (
        <div className="input-bundel flex-column full-size">
          <label htmlFor={id}>{label} </label>
          <textarea
            className={className + " full-size info-bedrijf"}
            type={wachtwoordZichtbaar ? "new-password" : type}
            autoComplete={autoComplete}
            id={id}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            data-cy={id}
            aria-label={aria_label}
          ></textarea>
        </div>
      ) : (
        <div className="input-bundel flex-column">
          <div>
            <label htmlFor={id}>{label} </label>
            {type === "password" ? (
              <button
                type="button"
                onClick={ShowPassword}
                className="wachtwoord-button"
              >
                {wachtwoordZichtbaar ? <>onzichtbaar</> : <>zichtbaar</>}
              </button>
            ) : (
              <></>
            )}
          </div>
          <input
            className={className}
            type={wachtwoordZichtbaar ? "new-password" : type}
            autoComplete={autoComplete}
            id={id}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            data-cy={id}
            aria-label={aria_label}
          ></input>
        </div>
      )}
    </>
  );
}

export default InvoerVeld;
