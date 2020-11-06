//validacion del formulario
var validacioncorecct=false;
function validacion(){
    var error=false;
    var mensajeError="";

if(document.getElementById("nombre-y-apellido").value==''){
   error=true;
   mensajeError+="El campo nombre no puede estar vacio  ";
                         ;
}
if(document.getElementById("telefono").value==''){
   error=true;
   mensajeError+="El campo Telefono no puede estar vacio  ";
}
if(document.getElementById("dni").value==''){
   error=true;
   mensajeError+="El campo DNI no puede estar vacio  ";
}
var choise= document.getElementsByName("selector_sexo");
var seleccionado=false;
for(i in choise){
   if(choise[i].checked){
       seleccionado=true;
   }
}
if(seleccionado!=true){
   error=true;
   mensajeError+="No indico el Sexo  ";
}
var choise1= document.getElementsByName("fiebre");
var seleccionado1=false;
for(i in choise1){
   if(choise1[i].checked){
       seleccionado1=true;
   }
}
if(seleccionado1!=true){
   error=true;
   mensajeError+="No indico el sintoma Fiebre  ";
}
var choise2= document.getElementsByName("tos");
var seleccionado2=false;
for(i in choise2){
   if(choise2[i].checked){
       seleccionado2=true;
   }
}
if(seleccionado2!=true){
   error=true;
   mensajeError+="No indico el sintoma Tos  ";
}
var choise3= document.getElementsByName("dolor_garganta");
var seleccionado3=false;
for(i in choise3){
   if(choise3[i].checked){
       seleccionado3=true;
   }
}
if(seleccionado3!=true){
   error=true;
   mensajeError+="No indico el sintoma dolor garganta  ";
}
var choise4= document.getElementsByName("dolor_cabeza");
var seleccionado4=false;
for(i in choise4){
   if(choise4[i].checked){
       seleccionado4=true;
   }
}
if(seleccionado4!=true){
   error=true;
   mensajeError+="No indico el sintoma dolor de cabeza  ";
}
if(error==true){
    alert(mensajeError);
}else{
    validacioncorecct=true;
}
    if(validacioncorecct==true){
alert("El formulario fue completado correctamente " + cantSintomas +  " síntomas de COVID-19 fueron registrado")
}
}
// Cantidad de sintomas detectados

var cantSintomas=0;
function sintomas(){
var opciones=document.getElementsByName("fiebre");
for(i in opciones){
    if(opciones[i].value==="si"){
cantSintomas++;
    }
}
    var opciones1=document.getElementsByName("dolor_cabeza");
for(i in opciones1){
    if(opciones1[i].value==="si"){
cantSintomas++;
    }   
}
var opciones2=document.getElementsByName("dolor_garganta");

for(i in opciones2){
    if(opciones2[i].value==="si"){
cantSintomas++;
    }
}
var opciones3=document.getElementsByName("tos");

for(i in opciones3){
    if(opciones3[i].value==="si"){
cantSintomas++;
    }
}
var opciones4=document.getElementsByName("dificultad_respirar");

for(i in opciones4){
    if(opciones4[i].value==="si"){
cantSintomas++;
    }
}
}

//Mostrar y ocultar campos

var error=false;
document.getElementById("mostrar").addEventListener("click", funcione);
function funcione(e) {
var ancla =document.getElementsByClassName('paises-v');
for(var i =0; i < ancla.length; i++){
    ancla[i].classList.toggle('desaparece');
    error=true;
}
}
    document.getElementById("ocultar").addEventListener("click", funcioni);
    function funcioni(e) {
    if(error==true){
    var ancla =document.getElementsByClassName('paises-v');
    for(var i =0; i < ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
    }
}
    }
    var error1=false;
    document.getElementById("dificultad-respirar").addEventListener("click", funciono);
    function funciono(e) {
    var ancla =document.getElementsByClassName('direcc');
    for(var i =0; i < ancla.length; i++){
        ancla[i].classList.toggle('desapareceDirec');
        error1=true;
    }

    }
    document.getElementById("dificultad-respirarNo").addEventListener("click", funciony);
    function funciony(e) {
    if(error1==true){
    var ancla =document.getElementsByClassName('direcc');
    for(var i =0; i < ancla.length; i++){
        ancla[i].classList.toggle('desapareceDirec');
    }
    }
}
