import "./Pop-up.css";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import GoogleLogo from "../../google.svg";
import { useEffect, useState } from "react";
import MicrosoftLogo from "../../Microsoft_logo.png";

function Login({
  setGoogle,
  handleOverlayLoginClick,
  handleOverlayRegistreerClick,
  handleOverlayGoogleRegistreerClick,
  setGoogleUser,
  setGoogleToken,
}) {
  const [username, setUserName] = useState(null);
  const [wachtwoord, setPassword] = useState(null);
  const [gebruikersnaam, setgebruikersNaam] = useState();
  const id = "";

  const [errorStyle, setErrorStyle] = useState("hidden");
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const [googleWachtwoord, setGoogleWachtwoord] = useState();
  const [googleUsername, setGoogleUsername] = useState();
  const [tryGoogle, setTryGoogle] = useState(false);

  const navigate = useNavigate();

  //zoek even uit hoe je dit doet als ze correct ingelogd zijn
  useEffect(() => {
    if (tryGoogle) {
      loginGoogleUser(id, googleUsername, googleUsername, googleWachtwoord);
    }
  }, [tryGoogle]);

  async function loginGoogleUser(id, username, gebruikersnaam, wachtwoord) {
    //verander eerst nog het ww naar de nieuwe token
    // !TODO
    // await axios
    //   .put("", {
    //     .post("http://localhost:5155/api/AaaAccount/login", {
    //     // .post("https://wpr-i-backend.azurewebsites.net/api/AaaAccount/login", {
    //     id,
    //     wachtwoord,
    //   })
    //   .then(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );

    // console.log(username, gebruikersnaam);
    await axios
      .post("http://localhost:5155/api/AaaAccount/login", {
        // .post("https://wpr-i-backend.azurewebsites.net/api/AaaAccount/login", {
        id,
        gebruikersnaam,
        wachtwoord,
        username,
      })
      .then(
        (response) => {
          // console.log(response.data.token);
          const token = response.data.token;

          sessionStorage.setItem("token", token);
          sessionStorage.setItem("exp", jwtDecode(token)["exp"] * 1000);
        },
        (error) => {
          //fout response gebruiker
          console.log(error);
          handleOverlayLoginClick();
          handleOverlayGoogleRegistreerClick();
        }
      )
      .finally(() => setisLoading(false));
  }
  async function loginUser(id, username, gebruikersnaam, wachtwoord) {
    // console.log(username, gebruikersnaam);
    await axios
      .post("http://localhost:5155/api/AaaAccount/login", {
        // .post("https://wpr-i-backend.azurewebsites.net/api/AaaAccount/login", {
        id,
        gebruikersnaam,
        wachtwoord,
        username,
      })
      .then(
        (response) => {
          // console.log(response.data.token);
          const token = response.data.token;

          sessionStorage.setItem("token", token);
          sessionStorage.setItem("exp", jwtDecode(token)["exp"] * 1000);
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
        }
      )
      .finally(() => setisLoading(false));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username !== null && wachtwoord !== null) {
      setisLoading(true);
      await loginUser(id, username, gebruikersnaam, wachtwoord);

      if (
        jwtDecode(sessionStorage.getItem("token"))[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ] === "ervaringsDeskundige"
      ) {
        navigate("/HomePortaal");
      } else if (
        jwtDecode(sessionStorage.getItem("token"))[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ] === "bedrijf"
      ) {
        navigate("/BedrijvenPortaal");
      } else if (
        jwtDecode(sessionStorage.getItem("token"))[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ] === "beheerder"
      ) {
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

        const googleAcountData = data.data;
        setGoogleWachtwoord(response.access_token);
        setGoogleToken(response.access_token);
        setGoogleUsername(googleAcountData.email);
        setGoogleUser(googleAcountData);
        setTryGoogle(true);
        // console.log(response.access_token);

        console.log(googleAcountData);
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
              autoComplete="username"
              placeholder="voorbeeld@email.com"
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
              autoComplete="current-password"
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
          {isLoading ? (
            <button className="inlog-button google-button full-size">
              <img src={GoogleLogo} alt=""></img>
              Loading...
            </button>
          ) : (
            <button
              className="inlog-button google-button full-size"
              onClick={() => {
                setisLoading(true);
                login();
              }}
            >
              <img src={GoogleLogo} alt=""></img>
              Google Login
            </button>
          )}

          {isLoading ? (
            <button className="inlog-button microsoft-button full-size">
              <img src={MicrosoftLogo} alt="" />
              Loading...
            </button>
          ) : (
            <button
              className="inlog-button microsoft-button full-size"
              onClick={() => navigate("/")}
            >
              <img src={MicrosoftLogo} alt="" />
              Microsoft Login
            </button>
          )}

          <p>Nog geen account?</p>

          {isLoading ? (
            <button className="inlog-button">Loading...</button>
          ) : (
            <button className="inlog-button" onClick={redirectAanmelden}>
              Registreren
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
