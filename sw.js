importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.precaching.precacheAndRoute([
  
    'hombre.html',
    'mujer.html',
    'img',
    //'app.js',
    //'sw.js',
    'logica.js',
    //'manifest.webmanifest',
    'css/bootstrap.min.css',
    'js/bootstrap.min.js',
    'offline.html'
])

workbox.routing.registerRoute(
    ({request})=> request.destination === 'image',
    new workbox.strategies.NetworkOnly()
);
workbox.routing.registerRoute(
    ({request}) => request.destination === 'document',
    new workbox.strategies.NetworkFirst()
);

//cuando hay error
workbox.routing.setCatchHandler(async context =>{
    //console.log("entro");
    console.log(context);
    console.log(context.request);
    if (context.request.destination === 'image'){
        return workbox.precaching.matchPrecache('img/offline.jpg');} 
    else if(context.request.destination === 'document'){
        return workbox.precaching.matchPrecache('offline.html');
    }

    return Response.error();
});


//self.addEventListener('install', (e)=>{
    console.log("Instalado");
    e.waitUntil(async()=>{
      const cache = await caches.open(cacheName);
      await cache.addAll(contenidoCache);
    })
//});



/*
var cacheName = 'appV1';
var contenidoCache = [
    'index.html',
    'hombre.html',
    'mujer.html',
    'img',
    'app.js',
    'sw.js',
    'logica.js',
    'manifest.webmanifest',
    'css/bootstrap.min.css',
    'js/bootstrap.min.js',
];
self.addEventListener('install', (e) => {
    console.log("instaldo");
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        await cache.addAll(contenidoCache);
    })())
});
self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
        const r = await caches.match(e.request);
        if (r) return r;
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        cache.put(e.request, response.clone());
        return response;
    })())
})

/*var cacheName ='appV1';
var contenidoCache=[
    'index.html',
    'nosotros.html',
    'galeria',
    'app.js',
    'sw.js',
    'manifest.webmanifest',
    'css/bootstrap.min.css',
    'js/bootstrap.min.js',
];

self.addEventListener('install', (e)=>{
    console.log("instalado");
e.waitUntil(async()=>{
    const cache = await caches.open(cacheName);
    await cache.addAll(contenidoCache);
})    
});

self.addEventListener('fetch',(e)=>{
    e.respondWith(async()=>{
      const r = await caches.match(e.request);
       if (r) return r;
       const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
       cache.put(e.request, response.clone());
        return response;
})
}) 



self.addEventListener('fech', (e) =>{
    e.respondWith((async()=>{
        const r = awaitcaches.match(e.request);
        if (r) return r;
        const response = await
        fetch(e.request);
        const cache=awaitcaches.open(cacheName);
        cache.put(e.request, response.clone());
        return response; 
         
    })())
})*/