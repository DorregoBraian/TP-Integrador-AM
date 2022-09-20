
import {Header,Footer} from "./components.js";

const header = document.getElementById("header");
const footer = document.getElementById("footer");

const botonEnviar = document.getElementById("button-enviar");
const botonCancelar = document.getElementById("button-cancelar")

var nombreInput = document.getElementById('nombre');
var apellidoInput = document.getElementById('apellido');
var emailInput = document.getElementById('email');
var generoInput = document.getElementById('genero');
var valoracionInput = document.getElementById('valoracion');
var fechaInput = document.getElementById('fecha');

const modalCancelar = document.getElementById("modalcancelar");

const modalBtnClose = document.getElementById("modalBtnX");
const modalBtnOk = document.getElementById("modal-boton-volver");
const modalBtnCancel = document.getElementById("modal-boton-cancelar");

window.onload = function () {
    header.innerHTML=Header();
    footer.innerHTML=Footer();

    botonEnviar.onclick = enviarBoton;
    botonCancelar.onclick = cancelarBoton;
    modalBtnClose.onclick = cerrarModal;
    modalBtnCancel.onclick = cerrarModal;
    modalBtnOk.onclick = paginaPrincial;
}

function cerrarModal(){
    modalCancelar.style.display="none";
}

function paginaPrincial(){
    window.location.href = "index.html";
}




function enviarBoton(){
    let contError = 0;
    if(!IsNotEmpty(nombreInput) || !validarLetras(nombreInput)) {inputError(nombreInput);  contError++;}
    else inputOk(nombreInput);
    if(!IsNotEmpty(apellidoInput) || !validarLetras(apellidoInput)) {inputError(apellidoInput); contError++;}
    else inputOk(apellidoInput);
    if(!IsNotEmpty(fechaInput)) {inputError(fechaInput); contError++;}
    else inputOk(fechaInput);
    if(!IsNotEmpty(generoInput)) {inputError(generoInput); contError++;}
    else inputOk(generoInput);
    if(!IsNotEmpty(valoracionInput)) {inputError(valoracionInput); contError++;}
    else inputOk(valoracionInput);
    if(!IsNotEmpty(emailInput) || !validarEmail(emailInput)) {inputError(emailInput); contError++;}
    else inputOk(emailInput);

    if(contError>0) alert("Campos Obligatorios Incompletos o Error de Formato");
    else{
        alert(`Nombre: ${nombreInput.value}\r\nApellido: ${apellidoInput.value}\r\nFecha de Nacimiento: ${fechaInput.value}\r\nGenero: ${generoInput.value}\r\nValoracion: ${valoracionInput.value}\r\nEmail: ${emailInput.value} `);
        window.location.href = "index.html";
    }
}

function cancelarBoton(){
    modalCancelar.style.display="block";
}

//Funciones de Validacion

function IsNotEmpty(inputX){
    if(inputX.value.length == 0 || inputX.value == "default"){
        return false;
    }
    return true;
}

//Validacion de Letras (a-z) y (A-Z)
function validarLetras(inputX) {
    return /[a-z]+$/.test(inputX.value);
}

function validarEmail(inputX) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(inputX.value);
}

function inputError(inputX){
    inputX.style.borderColor = "red";
}

function inputOk(inputX){
    inputX.style.borderColor = "green";
}