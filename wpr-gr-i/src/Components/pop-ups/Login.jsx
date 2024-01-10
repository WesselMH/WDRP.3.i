import "./Pop-up.css";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import GoogleLogo from "../../google.svg";
import { useEffect, useState } from "react";
import MicrosoftLogo from "../../Microsoft_logo.png";

let help;

function Login({
  setGoogle,
  handleOverlayLoginClick,
  handleOverlayRegistreerClick,
}) {
  const [username, setUserName] = useState(null);
  const [wachtwoord, setPassword] = useState(null);
  const [gebruikersnaam, setgebruikersNaam] = useState();
  const id = 0;

  const [errorStyle, setErrorStyle] = useState("hidden");
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const navigate = useNavigate();

  //zoek even uit hoe je dit doet als ze correct ingelogd zijn
  useEffect(() => {}, []);

  async function loginUser(id, username, gebruikersnaam, wachtwoord) {
    // console.log(username, gebruikersnaam);
    await axios
      // .post("http://localhost:5155/api/AaaAccount/login", {
      .post("https://wpr-i-backend.azurewebsites.net/api/AaaAccount/login", {
        id,
        gebruikersnaam,
        wachtwoord,
        username,
        headers: {
          "Access-Control-Allow-Origin": "https://wdrp-3-i.vercel.app/",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type, Custom-Header",
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
          const exp = decodedToken["exp"] * 1000;
          //console.log(help);

          sessionStorage.setItem("authenticated", true);
          sessionStorage.setItem("role", role);
          sessionStorage.setItem("exp", exp);
          sessionStorage.setItem(
            "userName",
            decodedToken[
              "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
            ]
          );
          sessionStorage.setItem("id", decodedToken["id"]);

          // navigate("/HomePortaal");
        },
        (error) => {
          //fout response gebruiker
          console.log(error);
          let errorMassage = JSON.stringify(error.response.data);
          if (errorMassage.includes('"status":400')) {
            errorMassage = JSON.parse(errorMassage).errors;
          }
          // console.log(errorMassage);
          // console.log(error.response.data);
          setError(error.response.data);
          setErrorStyle("error");

          return error;
        }
      )
      .finally(() => setisLoading(false));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username !== null && wachtwoord !== null) {
      setisLoading(true);
      await loginUser(id, username, gebruikersnaam, wachtwoord);

      if (sessionStorage.getItem("role") === "ervaringsDeskundige") {
        navigate("/HomePortaal");
      } else if (sessionStorage.getItem("role") === "bedrijf") {
        navigate("/BedrijvenPortaal");
      } else if (sessionStorage.getItem("role") === "beheerder") {
        navigate("/BeheerdersPortaal");
      }
    } else {
      setError("Vul de velden in.");
      setErrorStyle("error");
    }

    // console.log(response);
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
        sessionStorage.setItem("authenticated", false);
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

  const redirectAanmelden = () => {
    handleOverlayLoginClick();
    handleOverlayRegistreerClick();
  };

  return (
    <div className="pop-up">
      <button className="exit-button" onClick={handleOverlayLoginClick}>
        x
      </button>
      {/* <div className="Titel">Login</div> */}
      <div className="button-holder flex-row">
        <form className="left flex-column">
          <div className="inlog-bundel full-size">
            {/* <label htmlFor="Gebruikersnaam className="inlog-label">Email</label> */}
            <label htmlFor="Gebruikersnaam" className="inlog-label">
              Gebruikersnaam
            </label>
            <input
              className="input-veld flex-center full-size"
              type="text"
              placeholder="Voornaam+Achternaam"
              id="Gebruikersnaam"
              onChange={(e) => {
                setUserName(e.target.value);
                setgebruikersNaam(e.target.value);
                setErrorStyle(null);
                setError(null);
              }}
            ></input>
          </div>

          <div className="inlog-bundel full-size">
            <label htmlFor="Wachtwoord" className={"inlog-label"}>
              Wachtwoord
            </label>
            <input
              className="input-veld flex-center full-size"
              type="password"
              placeholder="Wachtwoord"
              id="Wachtwoord"
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorStyle(null);
                setError(null);
              }}
            ></input>
          </div>

          <div className="flex-row">
            {/* <div>
              <input type="checkbox" id="onthoudMij"></input>
              <label htmlFor="onthoudMij">Onthoud mij?</label>
            </div> */}
            <Link to="/WW vergeten" className="ww-vergeten">
              Wachtwoord vergeten?
            </Link>
          </div>

          <p className={errorStyle}>{error}</p>
          {isLoading ? (
            <button className="inlog-button">Loading...</button>
          ) : (
            <button className="inlog-button" onClick={handleSubmit}>
              Login
            </button>
          )}
        </form>

        <hr className="divider"></hr>

        <div className="right flex-column">
          <p>Of login met</p>
          <button
            className="inlog-button google-button full-size"
            onClick={() => login()}
          >
            <img src={GoogleLogo} alt=""></img>
            Google Login
          </button>

          <button
            className="inlog-button microsoft-button full-size"
            onClick={() => navigate("/")}
          >
            <img src={MicrosoftLogo} alt="" />
            Microsoft Login
          </button>

          <p>Nog geen account?</p>

          <button className="inlog-button" onClick={redirectAanmelden}>
            Registreren
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
