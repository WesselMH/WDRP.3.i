import InvoerVeld from "../Invoerveld";

function InvoerVelden({ knoppen, handleInputChange, inputValues }) {
  return (
    <>
      {knoppen.map((knop) => {
        return (
          <InvoerVeld
            key={knop.index}
            label={knop.label}
            className="input-veld"
            inputType={knop.inputType}
            type={knop.type}
            autoComplete={knop.autoComplete}
            placeholder={knop.placeholder}
            id={knop.id}
            onChange={(value) => handleInputChange(knop.id, value)}
            value={inputValues[knop.id] || ""}
            data_cy={knop.data_cy}
            aria_label={knop.aria_label}
          />
        );
      })}
    </>
  );
}

export default InvoerVelden;
