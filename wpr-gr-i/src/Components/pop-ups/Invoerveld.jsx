function InvoerVeld({ label, className, type, placeholder, id }) {
  // label, className, type, placeholder, id

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
