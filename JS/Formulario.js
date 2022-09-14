//Asignamos las variables cuando toda 1a página esté cargada
window.onload = function () {
    // Asignamos una variable para cada input
    var nombreInput = document.getElementById('nombre');
    var apellidoInput = document.getElementById('apellido');
    var emailInput = document.getElementById('email');

    //Recogemos los eventos
    nombreInput.addEventListener("input", createListener(validarLetras));
    apellidoInput.addEventListener("input", createListener(validarLetras));
    emailInput.addEventListener("input", createListener(validarEmail))

    //Funciones de Validaciones

    //Validacion de Letras (a-z) y (A-Z)
    function validarLetras(nombre) {
        return /[a-z]+$/.test(nombre);
    }

    function validarEmail(email) {
        return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email) ;
    }

    //Creamos el listener
    function createListener(validator) {
        return e => {
            const input = e.target;
            const text = e.target.value;
            const valid = validator(text);
            const vacio = text !== " " && !valid;
            const mensajeDeError = e.target.nextElementSibling;
            alerta(vacio, mensajeDeError, input);
        }

        //Funciôn donde mostramos u ocultamos la alerta y cambiamos el estilo desde al css
        function alerta(vacio, mensajeDeError, input) {
            if (vacio) {
                input.style.borderBottom = "2px solid red";
                mensajeDeError.style.display = "inherit";
            }
            else {
                input.style.borderBottom = "2px solid greenyellow";
                mensajeDeError.style.display = "none";
            }
        }
    }

}
