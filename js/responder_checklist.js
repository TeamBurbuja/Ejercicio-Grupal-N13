// Declaración de variables
let boton = document.getElementById('btn-resultados');
let lista = document.getElementById('lista-resultados');
let checks = document.querySelectorAll('.check-value');

// Captura de evento click en botón y llamado de función
boton.addEventListener('click', function () {
    let opcion = false; // Variable que permitirá confirmar si hay algún checkbox activo
    lista.innerHTML = ''; // Esto permite resetear la lista de elementos y evitar que se muestren repetidos
    checks.forEach((e) => {
        if (e.checked == true) {
            var elemento = document.createElement('li');
            elemento.innerHTML = e.value;
            lista.appendChild(elemento);
            opcion = true // Si han activado algún checkbox acá impedimos que salte el alert de la línea 171
        }
    });
    // Si no han seleccionado ningún checkbox la variable sigue como false y se dispara este alert
    if (opcion === false) {
            alert('Debes seleccionar algún elemento de la lista');
        }
});