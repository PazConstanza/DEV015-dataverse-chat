//src/views/infoCard.js

import { navigateTo } from "../router.js";

export const infoCard = (props) => {

  if (!props || !props.data) {                                                        // Si no hay datos en props, intenta recuperarlos de window.history.state
    const state = window.history.state;
    if (state && state.props && state.props.data) {
      props = state.props;                                                            // Recupera los datos desde el historial

    } else {

      const errorElement = document.createElement('p');
      errorElement.textContent = 'No se encontró la información de la campeona';
      return errorElement;
    }
  };

  const campeona = props.data;                                                         // Informacion de la campeona desde la data

  const infoCardParent = document.createElement('div')
  infoCardParent.classList.add('divParent')

  const contenedor = document.createElement('div');
  contenedor.classList.add('infoCard');

  const nombre = document.createElement('h1');
  nombre.textContent = campeona.name;
  contenedor.appendChild(nombre);


  const imagen = document.createElement('img');
  imagen.src = campeona.imageUrl;
  imagen.alt = campeona.name;
  imagen.classList.add('imgChat')
  contenedor.appendChild(imagen);


  const descripcion = document.createElement('p');
  descripcion.textContent = campeona.description;
  descripcion.classList.add('p')
  contenedor.appendChild(descripcion);

  // Otros detalles
  const detalles = document.createElement('ul');
  const frase = document.createElement('li');
  frase.textContent = `Frase: ${campeona.facts.frase}`;
  detalles.appendChild(frase);

  const dificultad = document.createElement('li');
  dificultad.textContent = `Dificultad: ${campeona.facts.Dificultad}`;
  detalles.appendChild(dificultad);

  const tipoDano = document.createElement('li');
  tipoDano.textContent = `Tipo de Daño: ${campeona.facts.Daño}`;
  detalles.appendChild(tipoDano);

  const carril = document.createElement('li');
  carril.textContent = `Carril: ${campeona.facts.Carril}`;
  detalles.appendChild(carril);

  contenedor.appendChild(detalles);

  const buttonChat = document.createElement('button');
  buttonChat.addEventListener('click', function () {
    console.log(props)
    navigateTo("/campeona/" + campeona.name + "/chat", props);

  });

  buttonChat.id = 'buttonChatId';
  buttonChat.textContent = "Chatea Conmigo";
  buttonChat.classList.add('button');

  contenedor.appendChild(buttonChat);
  infoCardParent.appendChild(contenedor);


  return infoCardParent
};



// Definir funciones/componentes similares para otras rutas