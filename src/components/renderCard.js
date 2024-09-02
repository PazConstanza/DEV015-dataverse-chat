import { navigateTo } from "../router.js";


export const renderCard = (data) => {
    const contenedor = document.createElement("div");
    //contenedor.classList.add("divTarjeta")
    const tarjetas = data.map(campeona => {
        const tarjeta = document.createElement("ul");  // Crea un elemento "ul" para cada campeona
        tarjeta.setAttribute("itemscope", "");
        tarjeta.setAttribute("itemtype", "campeonas lol")
        tarjeta.classList.add("tarjeta");              // Asigna una clase "tarjeta" para utilizarlo con CSS

        // Imagen de la tarjeta
        const imgTarjeta = document.createElement("li"); // Crea un elemento "li" que contiene la imagen
        const imgElemento = document.createElement("img"); // Crea el elemento "img" y se asignan sus atributos
        imgElemento.src = campeona.imageUrl;           // Establece la fuente de la imagen
        imgElemento.alt = campeona.name;               // Texto alternativo si no carga la imagen
        imgElemento.addEventListener("click", () => {
            navigateTo("/campeona/" + campeona.name, { data: campeona });

        });
        imgElemento.classList.add("imagen");           // Asigna una clase "imagen" para utilizarlo con CSS
        imgElemento.setAttribute("itemprop", "imagen")
        imgTarjeta.appendChild(imgElemento);           // Añade la imagen al 'li'
        tarjeta.appendChild(imgTarjeta);               // Añade el 'li' con la imagen a la tarjeta

        // Información visible inicialmente
        const infoTarjeta = document.createElement("li");
        tarjeta.classList.add("tarjeta");                // Crea un 'li' que contendrá la información adicional
        const infoVisible = [
            { prop: "nombre", text: campeona.name },
            { prop: "descripcion", text: campeona.shortDescription },
            { prop: "frase", text: campeona.facts.frase },
            { prop: "dificultad", text: "Dificultad: " + campeona.facts.dificultadDeUso },
            { prop: "tipoDano", text: "Tipo de Daño: " + campeona.facts.tipoDeDano },
            { prop: "linea", text: "Carril: " + campeona.facts.carril }
        ];

        infoVisible.forEach((item, index) => {             // Recorrer el array y crear un <li> para cada elemento
            const infocampeona = document.createElement('li'); // Crear un nuevo elemento <li>
            infocampeona.id = `elementoVisible${index + 1}`;          // Asignar un ID único a cada <li>
            infocampeona.textContent = item.text;                  // Agregar texto al <li>
            infocampeona.setAttribute("itemprop", item.prop);
            tarjeta.appendChild(infocampeona);                 // Añadir el <li> al <ul>
        });

        tarjeta.appendChild(infoTarjeta);
        contenedor.appendChild(tarjeta);                  // Añade la información visible a la tarjeta



        return tarjeta;                                      // Retorna el elemento "ul" creado
    });

    return contenedor;
}