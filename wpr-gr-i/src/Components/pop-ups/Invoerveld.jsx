function InvoerVeld({inputType, label, className, type, placeholder, id }) {
  // label, className, type, placeholder, id

  if (inputType === 'textarea') {
    return (
      <div className="input-bundel">
        <label htmlFor={id}>{label} </label>
        <textarea
          className={className}
          type={type}
          id={id}
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  } else 
  

  return (
    <div className="input-bundel">
      <label htmlFor={id}>{label} </label>
      <input
        className={className}
        type={type}
        id={id}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default InvoerVeld;
