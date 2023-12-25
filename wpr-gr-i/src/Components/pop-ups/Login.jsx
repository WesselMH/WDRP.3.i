import "./Pop-up.css";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import GoogleLogo from "../../google.svg";

function Login() {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="pop-up">
      <Link to="/">
        <button className="exit-button">x</button>
      </Link>
      <div className="titel">Login</div>
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

        <button
          className="inlog-button full-size google-button"
          onClick={() => login()}
        >
          <img src={GoogleLogo} alt=""></img>
          Google Login
        </button>

        <Link to="/" className="full-size">
          <button className="inlog-button">Login met Microsoft</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
