import { header } from '../components/header.js'
import { footer } from '../components/footer.js'
import { blockApiKey } from '../components/blockApiKey.js';
import { renderCard } from './renderCard.js';
import { data } from '../data/dataset.js';




export const filter = () => {

    const filterDiv = document.createElement('div');
    filterDiv.classList.add('filterDiv')

    const ulFilter = document.createElement('ul')

    ulFilter.appendChild(createFilter("Dificultad", ["Seleccione", "Baja", "Media", "Alta"]));
    ulFilter.appendChild(createFilter("Daño", ["Seleccione", "Físico", "Mágico"]));
    ulFilter.appendChild(createFilter("Carril", ["Seleccione", "Bot", "Support", "Mid", "Jungla", "Top"]));
    ulFilter.appendChild(createFilter("Orden", ["Seleccione", "asc", "desc"]));

    filterDiv.appendChild(ulFilter);


    const button = document.createElement('button');
    button.id = 'buttonIdFilter';
    button.textContent = "Limpiar";
    button.classList.add('button');
    filterDiv.appendChild(button);


    button.addEventListener('click', function () {
        const selectDificultad = document.getElementById('Dificultad');
        selectDificultad.value = "Seleccione";

        const selectDano = document.getElementById('Daño');
        selectDano.value = "Seleccione";

        const selectCarril = document.getElementById('Carril');
        selectCarril.value = "Seleccione";

        const selectOrden = document.getElementById('Orden');
        selectOrden.value = "Seleccione";

        
        const root = document.getElementById("root");
        root.innerHTML = "";
        root.appendChild(header());
        root.appendChild(blockApiKey());
        root.appendChild(createFilter("Dificultad", ["Seleccione", "Baja", "Media", "Alta"]));
        root.appendChild(createFilter("Daño", ["Seleccione", "Físico", "Magíco"]));
        root.appendChild(createFilter("Carril", ["Seleccione", "Bot", "Support", "Mid", "Jungla", "Top"]));
        root.appendChild(createFilter("Orden", ["Seleccione", "asc", "desc"]));
        root.appendChild(button);
        root.appendChild(renderCard(data));
        root.appendChild(footer());
    });




    return filterDiv
};


const createFilter = (label, options) => {
    const liFilter = document.createElement('li');
    liFilter.classList.add('filterLi');

    const labelFilter = document.createElement('label');
    labelFilter.classList.add('labelFilter')
    labelFilter.htmlFor = label;
    labelFilter.textContent = label;
    liFilter.appendChild(labelFilter);

    const selectFilter = document.createElement('select');
    selectFilter.id = label;


    // Añadiendo las opciones al select
    options.forEach(optionValue => {
        const optionElement = document.createElement('option');
        optionElement.value = optionValue;
        optionElement.textContent = optionValue;
        selectFilter.appendChild(optionElement);




    });


    liFilter.appendChild(selectFilter);


    return liFilter
};


