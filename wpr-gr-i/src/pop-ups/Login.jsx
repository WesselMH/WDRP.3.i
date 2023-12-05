import "./Login.css";

function Login() {
  return (
    <div className="pop-up">
      <button className="exit-button">x</button>
      <div className="button-holder">
        <button className="inlog-button">Gebruikersnaam</button>
        <button className="inlog-button">Wachtwoord</button>
        <a className="ww-vergeten" href="#">
          Wachtwoord vergeten?
        </a>
        <button className="inlog-button">Login</button>
        <button className="inlog-button">Login met Google</button>
        <button className="inlog-button">Login met Microsoft</button>
      </div>
    </div>
  );
}

export default Login;
