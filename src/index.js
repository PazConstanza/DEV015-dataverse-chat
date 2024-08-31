// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import {Home} from './views/home.js';
import {About} from './views/about.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';
import {Error} from './views/error.js';


//Ejemplo de definición de rutas:

const routes = {
    "/": Home,
    "/campeona": About,
    "/error": Error
};

const rootElement = document.getElementById("root");
rootElement.appendChild(Home()); 
setRoutes(routes)

/*window.addEventListener("DOMContentLoaded", () => {
    setRootEl(rootElement);
    onURLChange(window.location)
})

window.addEventListener('popstate', (event) => {
  onURLChange(window.location);

});*/


