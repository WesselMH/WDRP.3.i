import "./Pop-up.css";

function BijwerkenBedrijf() {
  return (
    <>
      <div className="pop-up">
        <h1>Bijwerken bedrijf profiel</h1>
        <button className="exit-button">x</button>
        <div className="input-holder">
          <form /*onSubmit={}*/ className="full-size">
            <div className="side-by-side">
              <div className="input-groep">
                <div className="input-bundel">
                  <label className="" for="naam">
                    Volledige Naam
                  </label>
                  <input
                    className="input-veld "
                    type="text"
                    id="naam"
                    placeholder="Vul hier je naam in"
                    required
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

                <div className="input-bundel">
                  <label for="beschrijving">Beschrijving</label>
                  <textarea
                    className="beschrijving"
                    id="beschrijving"
                  ></textarea>
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
          </form>
          {/* ja robin hier moet een map funtie komen om te zorgen dat het gegenereed word */}
          <input className="confirm-button" type="submit" value="Bijwerken"/>
          {/* <button className="confirm-button">Bijwerken</button> */}
        </div>
      </div>
    </>
  );
}

export default BijwerkenBedrijf;
