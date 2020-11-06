//CODIGO PARA LA PAGINA CONTACTO.HTML
//Validacion de datos.
var regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
var regexTelefono = /^\d{4}-\d{4}$/

function validarFormularioContacto(){
    var nombreApellido = document.getElementById("nombreApellido");
    var error=false;

    //Nombre y apellido no pueden estar vacios
    if(!nombreApellido.value){
        document.getElementById("errorNomAp").style.display="block";
        nombreApellido.focus();
        return false;
    }
    //Validacion regular del correo electronico.
    if(!document.getElementById("correoElectronico").value == ''){
        if(!regexEmail.test(document.getElementById("correoElectronico").value)){
            error=true;
            document.getElementById("errorCorreo").style.display="block";
        }
    }
    //Validacion regular del telefono.
    if(!document.getElementById("numeroTelefono").value == ''){
        if(!regexTelefono.test(document.getElementById("numeroTelefono").value)){
            error=true;
            document.getElementById("errorTel").style.display="block";
        }
    }
    //Si alguno de las validaciones no es correcta, no se envia el formulario.
    if(error){
        return false;
    }else{
        return true;
    }
}
//Contador de caracteres en el area de consulta.
 function contadorCaracteres(){
    var caracteresMaximos = 1000;
    var caracteresActuales = document.getElementById("areaConsulta").value.length;
    var caracteresRestantes = (caracteresMaximos - caracteresActuales);
    
    if(caracteresRestantes < 0){
        document.getElementById("caracteresRestantes").innerHTML = '<p id="areaConsulta" style="color: red;">Limite de '+caracteresMaximos+' caracteres exedido.';
    }else{
        document.getElementById("caracteresRestantes").innerHTML = caracteresRestantes+' caracteres restantes';
    }
    //Cuando los caracteres restantes lleguen a 100, el contador se mostrará en color rojo para avisar al usuario que le quedan pocos.
    if(caracteresRestantes<=100){
        document.getElementById("caracteresRestantes").innerHTML = '<p id="areaConsulta" style="color: red;">'+caracteresRestantes+' caracteres restantes';
    }
}