function validar (){
var nombre, apellido, email, contraseña;
nombre = document.getElementById("nombre").value;
apellido = document.getElementById("apellido").value;
email = document.getElementById("email").value;
contraseña = document.getElementById("contraseña").value;

expresion = /\w+@\w+\.+ [a-z ]/;


if(nombre === "" || apellido === "" || email === "" || contrasea ==="" ){
    alert("Todos los campos son obligatorios");
    return false;
}
else if (nombre.length > 30) {
    alert("El nombre es muy largo");
    return false;
}

else if (apellido.length > 30) {
    alert("El apellido es muy largo");
    return false;
}
 
else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
}
else if (email.length > 100) {
    alert("El email es muy largo");
    return false;

}
else if (contraseña.length > 20) {
    alert("La contraseña solo debe tener 20 caracteres como maximo");
    return false;


}
}