import "./Pop-up.css";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import GoogleLogo from "../../google.svg";
import { useEffect, useState } from "react";

let help;
// const navigate = useNavigate();

async function loginUser(id, username, gebruikersnaam, wachtwoord) {

  // console.log(username, gebruikersnaam);
  await axios
    .post("http://localhost:5155/api/AaaAccount/login", {
      // .post("https://wpr-i-backend.azurewebsites.net/api/AaaAccount/login", {
      id,
      gebruikersnaam,
      wachtwoord,
      username,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(
      (response) => {
        // console.log(response.data.token);
        help = response.data.token;
        // return response.data;
        const decodedToken = jwtDecode(response.data.token);
        const role =
          decodedToken[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ];
        const exp =
          decodedToken[
            "exp"
          ] * 1000;
        //console.log(help);

        sessionStorage.setItem("authenticated", true);
        sessionStorage.setItem("role", role);
        sessionStorage.setItem("exp", exp);
        sessionStorage.setItem("userName", decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
        sessionStorage.setItem("id", decodedToken["id"]);

        // navigate("/HomePortaal");
      },
      (error) => {
        console.log(error);
        return error;
      }
    );
}

function Login({ setGoogle }) {
  const [username, setUserName] = useState();
  const [wachtwoord, setPassword] = useState();
  const [gebruikersnaam, setgebruikersNaam] = useState();
  const id = 0;

  //zoek even uit hoe je dit doet als ze correct ingelogd zijn
  useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await loginUser(id, username, gebruikersnaam, wachtwoord);
    // console.log(help);
  };

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
        sessionStorage.setItem("authenticated", true);
        sessionStorage.setItem("role", "ervaringsDeskundige");
        //kan je gebruiken om meer calls te doen naar google api's voor deze gebruiker
        // console.log(response.access_token);

        // console.log(data);
        // loginGoogleUser(data.data);

        const googleAcountData = data.data;

        //hierdoor wordt de data naar App gestuurd en kan je het nog gebruiken bij het aanmaken/registreren van de beperkingen bij de google user
        setGoogle(googleAcountData);
        //voor nu zet in het ook in sessie strorage zodat we kunnen kiezen hoe we het pakken (tenzij het op de andere manier niet kan)
        //dit is alleen niet veilig omdat een hacker dan de sub code kan bekijken in de browser geschiedenis
        sessionStorage.setItem(
          "googleAccount",
          JSON.stringify(googleAcountData)
        );

        // console.log(data.data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="pop-up">
      <Link to={-1}>
        {/* <button > */}
        x
        {/* </button> */}
      </Link>
      <div className="Titel">Login</div>
      <form className="button-holder" onSubmit={handleSubmit}>
        <input
          className="input-veld flex-center full-size"
          type="text"
          placeholder="Gebruikersnaam"
          id="Gebruikersnaam"
          onChange={(e) => {
            setUserName(e.target.value);
            setgebruikersNaam(e.target.value);
          }}
        ></input>
        <input
          className="input-veld flex-center full-size"
          type="text"
          placeholder="Wachtwoord"
          id="Wachtwoord"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <Link to="/WW vergeten" className="ww-vergeten">
          Wachtwoord vergeten?
        </Link>
        
        <button className="inlog-button full-size">Login</button>

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
      </form>
    </div>
  );
}

export default Login;
