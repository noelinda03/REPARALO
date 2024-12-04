// Función para hacer una solicitud a la API y obtener los centros de reciclaje
async function obtenerCentros() {
    // URL del endpoint de la API que deseas consultar
    // Reemplaza con la URL real de tu API

    const url = 'https://api.centros-reciclaje.com/v1';

    try {
        // Realiza la solicitud con fetch()
        const respuesta = await fetch(url, {
            method: 'GET', // Método HTTP, que puede ser 'POST', 'PUT', etc., según el endpoint
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TU_TOKEN_DE_ACCESO' // Si la API requiere autenticación
            }
        });

        // Verifica si la solicitud fue exitosa
        if (respuesta.ok) {
            // Convierte la respuesta a JSON
            const datos = await respuesta.json();
            // Llama a la función para mostrar los datos en la página
            mostrarCentros(datos);
        } else {
            console.error('Error en la respuesta de la API:', respuesta.statusText);
            alert('Hubo un error al obtener los centros de reciclaje');
        }
    } catch (error) {
        console.error('Error al conectar con la API:', error);
        alert('No se pudo conectar con la API. Revisa tu conexión.');
    }
}

// Función para mostrar los datos obtenidos en la página web
function mostrarCentros(centros) {
    // Selecciona el elemento en el DOM donde se mostrarán los centros
    const lista = document.getElementById('centros-lista');
    lista.innerHTML = ''; // Limpiar la lista antes de añadir nuevos elementos

    // Itera sobre cada centro y crea elementos de lista (<li>)
    centros.forEach(centro => {
        const item = document.createElement('li');
        item.textContent = `${centro.nombre} - Dirección: ${centro.direccion}`;
        lista.appendChild(item); // Añade el item a la lista
    });
}

// Llama a la función obtenerCentros() cuando se cargue la página o cuando sea necesario
document.addEventListener('DOMContentLoaded', obtenerCentros); // Llama automáticamente al cargar