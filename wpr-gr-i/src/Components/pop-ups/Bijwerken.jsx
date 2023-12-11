import "./Pop-up.css";

function Bijwerken() {
  return (
    <>
      <div className="pop-up">
        <h1>Bijwerken</h1>
        <button className="exit-button">x</button>
        <div className="input-holder">
          <div className="side-by-side">
            <div className="input-groep">
              <div className="input-bundel">
                <label className="locked-label" for="naam">Volledige Naam </label>
                <input
                  className="input-veld locked-input"
                  type="text"
                  id="naam"
                  placeholder="Vul hier je naam in"
                ></input>
              </div>
              <div className="input-bundel">
                <label for="achternaam">Achternaam </label>
                <input
                  className="input-veld"
                  type="text"
                  id="achternaam"
                  placeholder="Vul hier je achternaam in"
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
          <button className="confirm-button">Bijwerken</button>
        </div>
      </div>
    </>
  );
}

export default Bijwerken;
