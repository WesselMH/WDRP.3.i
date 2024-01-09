import "./../Pop-up.css";

function BeperkingenRegistreren({ options, selectedValues, onChange }) {
  const handleCheckboxChange = (value) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onChange(updatedValues);
    //   console.log(updatedValues);
  };

  return (
    <div>
      <h2>Selecteer uw beperking</h2>
      <div className="selecter-lijst">
        <h3>Beperkingen</h3>
        <div>
          {options.map((item) => {
            return (
              <div key={item.index}>
                <input
                  type="checkbox"
                  id={item.index}
                  checked={selectedValues.includes(item.name)}
                  onChange={() => handleCheckboxChange(item.name)}
                  name={item.name}
                ></input>
                <label htmlFor={item.index}>{item.titel}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BeperkingenRegistreren;
