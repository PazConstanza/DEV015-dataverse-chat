export const header = () => {

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('headerDiv');

    const headerCreate = document.createElement('header');
    headerCreate.classList.add('header');
    headerCreate.innerHTML = '<h1>Femme of Legends</h1>';
    headerDiv.appendChild(headerCreate);


    const mainCreate = document.createElement('main');
    mainCreate.innerHTML = '<h2>¡Bienvenida invocadora! selecciona tu campeona</h2>'
    mainCreate.classList.add('main');
    headerDiv.appendChild(mainCreate);



    return headerDiv;

};


