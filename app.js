//Variable:

let listaAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim(); //para que los espacios al principio y al final del nombre no cuenten

    if (nombre === "" ) { //para que no deje espacio vacio
        alert("Por favor ingresar un nombre válido")

    } else {
        if (listaAmigos.includes(nombre)) { //para que no repita nombres
            alert("Ese nombre ya fue agregado");
            limpiarCaja();
            return;

        } else {
            let soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; //para que no ingrese numeros
            if (!soloLetras.test(nombre)) {
            alert("El nombre no puede contener números ni caracteres especiales.");
            limpiarCaja();
            return;
            }
    }

    listaAmigos.push(nombre);
    limpiarCaja();
    agregarLista();
    return;
}
}


//funcion para limpiar la caja donde se escribe el nombre

function limpiarCaja() {
    valorCaja = document.getElementById("amigo").value = "";
}

//funcion para agregar el nombre a la lista para que el usuario pueda verla

function agregarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        const itemAmigo = document.createElement("li");
        itemAmigo.textContent = listaAmigos[i];
        lista = document.getElementById("listaAmigos");
        lista.appendChild(itemAmigo);
    }
}

//funcion para sortear los amigos

function sortearAmigo() {

    if (listaAmigos.length == 0) {
    } else {
        let amigoSorteado = document.getElementById("resultado");
        let amigoResultado = listaAmigos [Math.floor(Math.random()*listaAmigos.length)];
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        amigoSorteado.textContent = (`El amigo secreto es: ${amigoResultado}`);
    }
}

//funcion para reiniciar juego

function reiniciarJuego() {
    listaAmigos = [];
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigoSorteado = document.getElementById("resultado");
    amigoSorteado.textContent = "";
 }