document.getElementById('cedulaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const cedulaInput = document.getElementById('cedula'); // Referencia al input
    const cedula = cedulaInput.value.trim();

    // Usar XMLHttpRequest para cargar el JSON
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'cedulas.json', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Parsear el JSON si la carga fue exitosa
            const cedulas = JSON.parse(xhr.responseText);

            // Verificar si la cédula ingresada está en la lista
            if (cedulas.includes(cedula)) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Cédula Encontrada!',
                    text: `La cédula ${cedula} existe en la lista.`,
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    cedulaInput.value = ''; // Limpiar el input después de la alerta
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Cédula No Encontrada',
                    text: `La cédula ${cedula} no se encontró en la lista.`,
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    cedulaInput.value = ''; // Limpiar el input después de la alerta
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error al Cargar',
                text: `Error al cargar las cédulas: ${xhr.status}`,
                confirmButtonText: 'Aceptar'
            }).then(() => {
                cedulaInput.value = ''; // Limpiar el input después de la alerta
            });
        }
    };

    xhr.onerror = function () {
        Swal.fire({
            icon: 'error',
            title: 'Error de Red',
            text: 'Error de red al intentar cargar las cédulas.',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            cedulaInput.value = ''; // Limpiar el input después de la alerta
        });
    };

    xhr.send();
});
