let nombres = []; // Array para almacenar los nombres de los amigos.

//  Función para agregar un amigo a la lista.
function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim(); // Captura el valor y elimina espacios.

    // 1. Validar la entrada.
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // 2. Actualizar el array de amigos.
    nombres.push(nombre);

    // 3. Limpiar el campo de entrada.
    inputNombre.value = '';

    // 4. Actualizar la lista visible de amigos.
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos.
function actualizarListaAmigos() {
    const listaAmigosUl = document.getElementById('listaAmigos');

    // 1. Limpiar la lista existente con innerHTML.
    listaAmigosUl.innerHTML = '';

    // 2. Iterar sobre el array y agregar los nombres.
    for (let i = 0; i < nombres.length; i++) {
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = nombres[i];
        listaAmigosUl.appendChild(nuevoLi);
    }
}

// Función para sortear los amigos.
function sortearAmigo() {
    const resultadoP = document.getElementById('resultado'); // Usamos el ID del <ul>

    // 1. Validar que haya amigos disponibles.
    if (nombres.length === 0) {
        resultadoP.innerHTML = '<li>Debes añadir al menos un amigo para sortear.</li>';
        return;
    }

    // 2. Generar un índice aleatorio.
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);

    // 3. Obtener el nombre sorteado.
    const nombreSorteado = nombres[indiceAleatorio];

    // 4. Mostrar el resultado.
    resultadoP.innerHTML = `<li>¡El amigo secreto es: ${nombreSorteado}! 🎉</li>`;
    // Deshabilitar el botón para que no se pueda sortear de nuevo
    botonSortear.disabled = true;
}
