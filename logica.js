function validacionUsuario(){
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("contraseña").value;
    if ( username == "ejemplo@gmail.com" && password == "123456"){
        console.log ("Iniciando sesión…");
        window.location = "../Home/home.html"; 
        return false;
    }else{
        document.getElementById("errorLog").style.display="block";
        console.log("Email y/o contraseña incorrectos");
    }
}