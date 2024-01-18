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
  data_cy
}) {
  const [inputValue, setInputValue] = useState("");
  
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

  return (
    <div className="input-bundel flex-column">
      <label htmlFor={id}>{label} </label>
      {inputType === "textarea" ? (
        <textarea
          className={className}
          type={type}
          autoComplete={autoComplete}
          id={id}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          data-cy={id}
        ></textarea>
      ) : (
        <input
          className={className}
          type={type}
          autoComplete={autoComplete}
          id={id}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          data-cy={id}
        ></input>
      )}
    </div>
  );
}

export default InvoerVeld;
