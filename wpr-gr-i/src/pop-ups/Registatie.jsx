import "./Pop-up.css";

function Registatie() {
  return (
    <div className="pop-up x2">
      <h1>Registratie</h1>
      <button className="exit-button">x</button>
      <div className="input-holder">
        <div className="side-by-side">
        <div className="input-groep">
          <div className="input-bundel">
            <label for="naam">Volledige Naam </label>
            <input
              className="input-veld"
              type="text"
              id="naam"
              placeholder="Vul hier je naam in"
            ></input>
          </div>
          <div className="input-bundel">
            <label>Volledige Naam </label>
            <input
              className="input-veld"
              type="text"
              placeholder="Vul hier je naam in"
            ></input>
          </div>
        </div>

        <div className="input-groep">
          <div className="input-bundel">
            <label>Volledige Naam </label>
            <input
              className="input-veld"
              type="text"
              placeholder="Vul hier je naam in"
            ></input>
          </div>
          <div className="input-bundel">
            <label>Volledige Naam </label>
            <input
              className="input-veld"
              type="text"
              placeholder="Vul hier je naam in"
            ></input>
          </div>
        </div>
        </div>
        {/* ja robin hier moet een map funtie komen om te zorgen dat het gegenereed word */}
      <button className="confirm-button">Login</button>
      </div>
    </div>
  );
}

export default Registatie;
