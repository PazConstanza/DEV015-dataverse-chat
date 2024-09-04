export const header = () => {

    const headerDiv = document.createElement('div');

    const headerCreate = document.createElement('header');
    headerCreate.innerHTML = '<h1>Femme of Legends</h1>';
    headerCreate.classList.add('titulo');

      
    const mainCreate = document.createElement('main');
    mainCreate.innerHTML = '<h2>¡Bienvenida invocadora! selecciona tu campeona</h2>'

    headerDiv.appendChild(headerCreate);
    headerDiv.appendChild(mainCreate);

    return headerDiv;

};


