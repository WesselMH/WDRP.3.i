import React, { useState } from "react";

function InvoerVeld({
  inputType,
  label,
  className,
  type,
  placeholder,
  id,
  onChange,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Call the onChange prop with the updated value
    onChange && onChange(value);
  };

  return (
    <div className="input-bundel flex-column">
      <label htmlFor={id}>{label} </label>
      {inputType === "textarea" ? (
        <textarea
          className={className}
          type={type}
          id={id}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        ></textarea>
      ) : (
        <input
          className={className}
          type={type}
          id={id}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      )}
    </div>
  );
}

export default InvoerVeld;
