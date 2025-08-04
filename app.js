//Variables:
let listaAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    if (nombre === "") {
        alert("Por favor ingresar un nombre válido");
    } else {
        listaAmigos.push(nombre);
    }
    limpiarCaja();
    return;
}

agregarAmigo();

function limpiarCaja() {
    valorCaja = document.getElementById("amigo").value = "";
}