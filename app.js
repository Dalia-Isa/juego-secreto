/*
let titulo = document.querySelector("h1"); // Esta linea retornaria el elemento h1, que en este caso es el titulo
titulo.innerHTML = "Juego del número secreto"; // Titulo

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10"; // Parrafo
*/

// let maxIntentos = 3; // indica el numero de intentos maximos 

let numeroMaxico = 10;
let listaNumerosSorteados = [];
let numeroAleatorio = generarNumeroAleatorio();
let intentos = 0; // indica el numero de intentos a empezar 

//console.log(numeroAleatorio); //Muestra el numero secreto, si se pone fuera de todo, mostrara primero el numero secreto

//Se creo una funcion para reducir codigo al momento de escribir texto en algun elemento de HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //Se agrega el elemento a cambiar, ejemplo h1, h2, p, etc.
    elementoHTML.innerHTML = texto; // Se agrega el texto
    return;
}

//Función para verificar si se acerto al numero correcto
function verificarIntentoUsuario() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); 
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroAleatorio);
    // console.log(typeof(numeroAleatorio))
    // console.log(numeroDeUsuario);

    //console.log(numeroAleatorio); //Muestra el numero secreto, si se pone fuera de todo, mostrara primero el numero secreto
    //console.log(intentos); // Muestra el número de intentos

    if (numeroDeUsuario === numeroAleatorio) { //  'idéntico a' (===). No solo compara los valores de ambos lados de la ecuación, 
        //sino que también verifica si son del mismo tipo
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); //Operador ternario
        document.getElementById('reiniciar').removeAttribute('disabled'); //Para eliminar el atributo del elemento del DOM, en este caso disabled
        // que cuando se elimina se activa el botón

    }else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroAleatorio) { //El número del usuario es mayor al secreto
            asignarTextoElemento("p","El número de usuario es mayor al número secreto");
        }else{
            asignarTextoElemento("p","El número de usuario es menor al número secreto")
        }
        intentos++; // se va incrementando de 1 en 1 cuando la persona no asierte 
        // if (intentos > maxIntentos) { 
        // }
        limpiarCaja();
    }
    return;
}

//Funcion que sirve para limpiar la caja y borre automaticamente el numero
function limpiarCaja() {
    // let valorCaja = document.querySelector("#valorUsuario"); //Se esta seleccionando el elemento con el ID del input
    // //querySelector es un selector generico
    // valorCaja.value = ""; // Se limpia el contenido del input, vacio es indicar las dos "" solamente

    //Reducción del codigo
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaxico)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaxico) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
    //Si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        //Si lo incluye, generar otro numero
        return generarNumeroAleatorio();
    } else {
        //Si no lo incluye, agregarlo a la lista
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}



function condicionesIniciales() {
    asignarTextoElemento("h1","Juego secreto"); 
    asignarTextoElemento("p",`Indica algun número que este incluido del 1 al ${numeroMaxico}: `); 
    //Generar el numero aleatorio
    numeroAleatorio = generarNumeroAleatorio();
    //Inicializar el número de intentos
    intentos = 1;
}


function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();

    //Indicar mensaje de intervalos de numeros del 1 al 10
    condicionesIniciales();

    //Desactivar boton de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled','true');
    //console.log(numeroAleatorio); //Muestra el numero secreto, si se pone fuera de todo, mostrara primero el numero secreto

}
condicionesIniciales();

