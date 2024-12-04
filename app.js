function initOfflineMap() {
    if (!navigator.onLine) {
        const mapContainer = document.getElementById("map");
        mapContainer.style.display = "block";

        const map = L.map(mapContainer).setView([19.0413, -98.2062], 12);

        L.tileLayer('/path/to/offline-tiles/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        console.log("Mapa offline inicializado.");
    }
}

function initMap() {
    if (navigator.onLine) {
        // Muestra el mapa online
        console.log("Inicializando Google Maps...");
        const mapContainer = document.getElementById("map");
        mapContainer.style.display = "block";

        map = new google.maps.Map(mapContainer, {
            center: { lat: 19.0413, lng: -98.2062 },
            zoom: 12,
        });
    } else {
        // Inicializa el mapa offline si no hay conexión
        console.log("No hay conexión. Mostrando mapa offline.");
        initOfflineMap();
    }
}

window.onload = initMap;