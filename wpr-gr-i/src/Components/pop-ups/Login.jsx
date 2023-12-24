import "./Pop-up.css";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Login() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse.access_token),

    // <GoogleLogin
    //       onSuccess={(credentialResponse) => {
    //         const credentialResponseDecode = jwtDecode(credentialResponse.credential);
    //         console.log(credentialResponseDecode);
    //       }}
    //       onError={() => {
    //         console.log("Login Failed");
    //       }}
    //     />
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
        <Link to="" className="full-size">
          <button className="inlog-button" onClick={() => login()}>
            Sign in with Google 🚀
          </button>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credentialResponseDecode = jwtDecode(
                credentialResponse.credential
              );
              console.log(credentialResponseDecode);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </Link>
        <Link to="/" className="full-size">
          <button className="inlog-button">Login met Microsoft</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
