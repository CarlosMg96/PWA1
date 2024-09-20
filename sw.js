console.log('SW Hola mundo !!');

self.addEventListener('install',(event)=>{
    console.log('SW: Instalado');
});

self.addEventListener('fetch', (event)=>{
    console.log(event.request.url);

    if(event.request.url.includes('style.css')){
        const respuesta = new Response(
            `body{
                color: blue;
                background-color: #fff;
            }`,
            {
                headers:{
                    'Content-Type':'text/css'
                }
            }
        );
        event.respondWith(respuesta);
    }

})