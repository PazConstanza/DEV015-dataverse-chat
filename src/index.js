// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import {Home} from './views/home.js';
import { infoCard } from './views/infoCard.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';
import { Error } from './views/error.js';
import { Chat } from './views/chat.js';


//Ejemplo de definición de rutas:

const routes = {
  "/": Home,
  "/campeona/:name": infoCard, // Ruta dinamica 
  "/chat/:name": Chat,
  "/error": Error
};


const rootElement = document.getElementById("root");
rootElement.appendChild(Home()); 
setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
    setRootEl(rootElement);
    onURLChange(window.location);
})

window.addEventListener('popstate', (event) => {
  onURLChange(window.location);

});

window.addEventListener('load', (event) => {
  onURLChange(window.location);

});
