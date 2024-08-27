const mensajeUsuario = document.getElementById("mensaje-usuario");
const mensajeResultado = document.getElementById("mensaje-resultado");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

function bloquearMayusculasYEspeciales(event) {
    const input = event.target;
    const valor = input.value;
    // Remover mayúsculas y caracteres especiales
    const nuevoValor = valor.replace(/[^a-z0-9\s]/g, '');
    input.value = nuevoValor;
}

function btnEncriptar(params) {
    const textoEncriptado = encriptar(mensajeUsuario.value);
    mensajeResultado.value = textoEncriptado;
    mensajeUsuario.value = "";
}

function encriptar(stringEncriptada){
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(params) {
    const textoDesencriptado = desencriptar(mensajeUsuario.value);
    mensajeResultado.value = textoDesencriptado;
    mensajeUsuario.value = "";
}


function desencriptar(stringEncriptada){
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][1])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringEncriptada;
}