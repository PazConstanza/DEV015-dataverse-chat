 //src/views/About.js

export const About = (props) => {
  if (!props || !props.data) {
    const errorElement = document.createElement('p');
    errorElement.textContent = 'No se encontró la información de la campeona';
    return errorElement;
  }

  const campeona =  props.data;  //Informacion de la campeona desde la data

  const contenedor = document.createElement('div');
  contenedor.classList.add('campeona-detalle');

  // Nombre de la campeona
  const nombre = document.createElement('h1');
  nombre.textContent = campeona.name;
  contenedor.appendChild(nombre);

    // Imagen de la campeona
    const imagen = document.createElement('img');
    imagen.src = campeona.imageUrl;
    imagen.alt = campeona.name;
    contenedor.appendChild(imagen);

    // Descripción
    const descripcion = document.createElement('p');
    descripcion.textContent = campeona.description;
    contenedor.appendChild(descripcion);

    // Otros detalles
  const detalles = document.createElement('ul');
  const frase = document.createElement('li');
  frase.textContent = `Frase: ${campeona.facts.frase}`;
  detalles.appendChild(frase);

  const dificultad = document.createElement('li');
  dificultad.textContent = `Dificultad: ${campeona.facts.dificultadDeUso}`;
  detalles.appendChild(dificultad);

  const tipoDano = document.createElement('li');
  tipoDano.textContent = `Tipo de Daño: ${campeona.facts.tipoDeDano}`;
  detalles.appendChild(tipoDano);

  const carril = document.createElement('li');
  carril.textContent = `Carril: ${campeona.facts.carril}`;
  detalles.appendChild(carril);

  contenedor.appendChild(detalles);


 

  return contenedor;
}



// Definir funciones/componentes similares para otras rutas