//Pregunat si el service worker esta disponible en el navegador
if(navigator.serviceWorker){
    navigator.serviceWorker.register('./sw.js');
}

