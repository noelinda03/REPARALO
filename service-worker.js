const CACHE_NAME = "recycling-map-cache-v1";
const urlsToCache = [
    "/",
    "/prueba.html",
    "/manifest.json",
<<<<<<< HEAD
    "/css/styles.css",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
    // Nota: La API de Google Maps no se puede cachear completamente, pero se manejará con una respuesta alternativa
];

// Instalar el Service Worker y almacenar los recursos en caché
self.addEventListener("install", (event) => {
    console.log("Service Worker: Instalando...");
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Service Worker: Archivos en caché");
            return cache.addAll(urlsToCache);
=======
    "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request).catch(() => {
                return new Response("Offline. Data unavailable.", { status: 200 });
            });
>>>>>>> bbfc47df41775bf7ac345eead3d938e02a52223b
        })
    );
});

<<<<<<< HEAD
// Activar el Service Worker y eliminar cachés antiguas
self.addEventListener("activate", (event) => {
    console.log("Service Worker: Activado");
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log("Service Worker: Eliminando caché antigua", cacheName);
=======
self.addEventListener("activate", event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
>>>>>>> bbfc47df41775bf7ac345eead3d938e02a52223b
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
<<<<<<< HEAD
});

// Interceptar las solicitudes de red
self.addEventListener("fetch", (event) => {
    console.log("Service Worker: Interceptando petición para", event.request.url);
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Si el recurso está en caché, se sirve desde ahí
            if (response) {
                return response;
            }

            // Si no está en caché, intenta obtenerlo de la red
            return fetch(event.request)
                .then((fetchResponse) => {
                    // Si el recurso se obtiene de la red, se almacena dinámicamente
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, fetchResponse.clone());
                        return fetchResponse;
                    });
                })
                .catch(() => {
                    // Si no está en caché ni en la red y es la API de Google Maps
                    if (event.request.url.includes("maps.googleapis.com")) {
                        return new Response("<h1>Google Maps no está disponible offline.</h1>", {
                            headers: { "Content-Type": "text/html" },
                        });
                    }

                    // Respuesta alternativa para otros recursos
                    return new Response("Recurso no disponible y sin conexión.");
                });
        })
    );
=======
>>>>>>> bbfc47df41775bf7ac345eead3d938e02a52223b
});