import "./Pop-up.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="pop-up">
      <Link to="/" className="exit-button">
        {/* <button > */}
          x
        {/* </button> */}
      </Link>
      <div className="Titel">Login</div>
      <div className="button-holder">
        <input
          className="input-veld flex-center full-size"
          type="text"
          placeholder="Gebruikersnaam"
        ></input>
        <input
          className="input-veld flex-center full-size"
          type="text"
          placeholder="Wachtwoord"
        ></input>

        <Link to="/WW vergeten" className="ww-vergeten">
          Wachtwoord vergeten?
        </Link>
        <Link to="/" className="full-size">
          <button className="inlog-button">Login</button>
        </Link>
        <Link to="/" className="full-size">
          <button className="inlog-button">Login met Google</button>
        </Link>
        <Link to="/" className="full-size">
          <button className="inlog-button">Login met Microsoft</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
