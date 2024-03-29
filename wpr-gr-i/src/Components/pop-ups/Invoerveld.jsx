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
  
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    onChange && onChange(inputValue);
  };

  const handleSpeechRecognition = () => {
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
      onChange && onChange(transcript);
    };

    recognition.start();
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
              <>
                <button
                  type="button"
                  onClick={ShowPassword}
                  className="wachtwoord-button"
                  aria-label="Toggle knop zichtbaar maken wachtwoord"
                >
                  {wachtwoordZichtbaar ? <>onzichtbaar</> : <>zichtbaar</>}
                </button>
                <button
                  type="button"
                  onClick={handleSpeechRecognition}
                  className="speech-to-text-button"
                  aria-label="Speech to text"
                >
                  🎙️
                </button>
              </>
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
