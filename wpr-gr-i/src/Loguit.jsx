

function Loguit (){
    sessionStorage.setItem("authenticated", false);
    sessionStorage.setItem("role", null);
    sessionStorage.setItem("exp", null);
    sessionStorage.setItem("userName", null);
    sessionStorage.setItem("id", null);
    sessionStorage.setItem("googleAccount", null);
}

export default Loguit;