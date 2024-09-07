export const filter = () => {

    const filterDiv = document.createElement('div');
    filterDiv.classList.add('filterDiv')

    const ulFilter = document.createElement('ul')

    ulFilter.appendChild(createFilter("Dificultad", ["Seleccione", "Baja", "Media", "Alta"]));
    ulFilter.appendChild(createFilter("Daño", ["Seleccione", "Físico", "Magíco"]));
    ulFilter.appendChild(createFilter("Carril", ["Seleccione", "Bot", "Support", "Mid", "Jungla", "Top"]));
    ulFilter.appendChild(createFilter("Orden", ["Seleccione", "asc", "desc"]));

    filterDiv.appendChild(ulFilter);


    const button = document.createElement('button');
    button.id = 'buttonIdFilter';
    button.textContent = "Limpiar";
    button.classList.add('button');
    filterDiv.appendChild(button);

    button.addEventListener('click', function() {
        const selectDificultad = document.getElementById('Dificultad');    
        selectDificultad.value = "Seleccione";

        const selectDano = document.getElementById('Daño');    
        selectDano.value = "Seleccione";

        const selectCarril = document.getElementById('Carril');    
        selectCarril.value = "Seleccione";

        const selectOrden = document.getElementById('Orden');    
        selectOrden.value = "Seleccione";
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