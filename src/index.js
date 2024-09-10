// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import { Home } from './views/home.js';
import { infoCard } from './views/infoCard.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';
import { Error } from './views/error.js';
import { Chat } from './views/chat.js';
import { data } from './data/dataset.js';
import { renderCard } from './components/renderCard.js';
import { filterData, sortData } from './lib/dataFunctions.js';
import { header } from '../components/header.js'
import { footer } from '../components/footer.js'
import { blockApiKey } from '../components/blockApiKey.js';
import { filter } from '../components/filter.js';


//Ejemplo de definición de rutas:

const routes = {
  "/": Home,
  "/campeona/:name": infoCard, // Ruta dinamica 
  "/campeona/:name/chat": Chat,
  "/error": Error
};


const rootElement = document.getElementById("root");
rootElement.appendChild(Home());
setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  setRootEl(rootElement);
  onURLChange(window.location);

  const difficultFilter = document.getElementById('Dificultad');

  difficultFilter.addEventListener('change', function () {
    const filterValue = difficultFilter.value;

    const dataAfterFilter = filterData(data, 'Dificultad', filterValue);
    const cards = renderCard(dataAfterFilter);
    const root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(header());
    root.appendChild(blockApiKey());
    root.appendChild(filter());
    root.appendChild(cards);
    root.appendChild(footer())




  });

  
  const damageFilter = document.getElementById('Daño');

  damageFilter.addEventListener('change', function () {
    const filterValue = damageFilter.value;

    const dataAfterFilter = filterData(data, 'Daño', filterValue);
    const cards = renderCard(dataAfterFilter);
    const root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(header());
    root.appendChild(blockApiKey());
    root.appendChild(filter());
    root.appendChild(cards);
    root.appendChild(footer())


  });

  const lineFilter = document.getElementById('Carril');

  lineFilter.addEventListener('change', function () {
    const filterValue = lineFilter.value;

    const dataAfterFilter = filterData(data, 'Carril', filterValue);
    const cards = renderCard(dataAfterFilter);
    const root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(header());
    root.appendChild(blockApiKey());
    root.appendChild(filter());
    root.appendChild(cards);
    root.appendChild(footer())

  });

  const sortFilter = document.getElementById('Orden');

  sortFilter.addEventListener('change', function () {
    const filterValue = sortFilter.value;
    const copyData = [...data];
    const dataAfterFilter = sortData(copyData, 'name', filterValue);
    const cards = renderCard(dataAfterFilter);
    const root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(header());
    root.appendChild(blockApiKey());
    root.appendChild(filter());
    root.appendChild(cards);
    root.appendChild(footer())

  });

});


window.addEventListener('popstate', (event) => {
  onURLChange(window.location);

});





