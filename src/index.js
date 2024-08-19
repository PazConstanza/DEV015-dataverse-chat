// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import Home from './views/home.js';
import About from './views/about.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';
import Error from './views/error.js';
              

//Ejemplo de definición de rutas:

const routes = {
    "/": Home,
    "/about": About,
    "/error": Error
};

const rootElement = document.getElementById("root");

setRoutes(routes)

window.addEventListener("DOMContentLoaded",() => {
    setRootEl(rootElement);
    onURLChange(window.location)
})

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/