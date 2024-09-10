import { setApiKey } from '../lib/apiKey.js';


export const blockApiKey = () => {
    const divElement = document.createElement('div');
    divElement.classList.add('blockApiKey')

    const labelElement = document.createElement('label');
    labelElement.htmlFor = 'inputId';
    labelElement.textContent = "Agregar API KEY";
    labelElement.classList.add('labelElement');
    divElement.appendChild(labelElement);

    const inputElement = document.createElement('input');
    inputElement.id = 'inputId';
    inputElement.placeholder = "Ingresa/pega la API KEY aquí";
    inputElement.type = 'password';
    inputElement.classList.add('inputElement');
    divElement.appendChild(inputElement);

    const button = document.createElement('button');
    button.id = 'buttonId';
    button.textContent = "Guardar";
    button.classList.add('buttonApiKey');
    divElement.appendChild(button);

    button.addEventListener('click', function () {
        const apiKey = document.getElementById('inputId').value;
        setApiKey(apiKey);
    });




    return divElement;
};