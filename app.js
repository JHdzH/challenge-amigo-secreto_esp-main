// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres de los amigos
let amigos = [];

//Función para agregar un nombre a la lista
function agregarAmigo(){
    let valorDeEntrada = document.getElementById("amigo");

    let nombre = valorDeEntrada.value.trim();

    //Validar que el campo no este vacio
    if(nombre === ''){
        alert('Por favor ingrese un nombre valido,');
        return;
    }

    //Validar nombres duplicados
    if(amigos.includes(nombre)){
        alert('Este nombre ya ha sido agregado con anterioridad.');
        return;
    }

    //Agregamos el nombre al array
    amigos.push(nombre);

    //Actualizamos la lista
    actualizarLista();

    //Se limpia el campo de entrada
    valorDeEntrada.value = '';
}

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    
    //Limpiamos la lista actual
    lista.innerHTML = '';

    //Recorremos el array y creamos la lista a mostrar
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }

}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya nombres en la lista
    if (amigos.length === 0) {
        alert('Agrega al menos un nombre antes de sortear.');
        return;
    }

    // Si solo hay un nombre, no es necesario sortear
    if (amigos.length === 1) {
        document.getElementById('resultado').innerHTML = `<li>🎉 Solo hay un participante: ${amigos[0]}</li>`;
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: ${amigoSorteado}</li>`;

    // Desactivar el botón de sorteo para evitar múltiples sorteos
    const botonSortear = document.querySelector('.button-draw');
    botonSortear.disabled = true;
    botonSortear.style.opacity = '0.5'; // Cambia el estilo para indicar desactivado
    botonSortear.style.cursor = 'not-allowed';
}