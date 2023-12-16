function InvoerVeld({label, type, placeholder}) {
  return (
    <>
      <label for={label}>Volledige Naam </label>
      <input
        className="input-veld"
        type={type}
        id={label}
        placeholder={placeholder}
      ></input>
    </>
  );
}
