export const blockApiKey = () => {
    const divElement = document.createElement("div");

    const inputElement = document.createElement("input");
    inputElement.id = 'inputId';
    inputElement.placeholder = 'Ingresa/pega la API KEY aquí';
    inputElement.type = 'password';
    inputElement.classList.add("inputElement");
    
    const labelElement = document.createElement("label");
    labelElement.htmlFor = 'inputId';
    labelElement.textContent = 'Agregar API KEY';
    labelElement.classList.add("labelElement");
    


    
    divElement.appendChild(labelElement);
    divElement.appendChild(inputElement);
    



    return divElement;
};