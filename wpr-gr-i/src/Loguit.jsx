

function Loguit (){
    sessionStorage.setItem("authenticated", false);
    sessionStorage.setItem("role", null);
    sessionStorage.setItem("exp", null);
    sessionStorage.setItem("userName", null);
    sessionStorage.setItem("id", null);
}

export default Loguit;