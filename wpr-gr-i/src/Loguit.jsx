

function Loguit (){
    sessionStorage.setItem("authenticated", false);
    sessionStorage.setItem("role", null);
    sessionStorage.setItem("exp", null);
}

export default Loguit;