import { navigateTo } from "../router.js";


export const renderCard = (data) => {
    const divCard = document.createElement("div");
    //divCard.classList.add("divcard")
    const cards = data.map(campeona => {
        const card = document.createElement("ul");  // Crea un elemento "ul" para cada campeona
        card.setAttribute("itemscope", "");
        card.setAttribute("itemtype", "campeonas lol")
        card.classList.add("card");              // Asigna una clase "card" para utilizarlo con CSS

        // Imagen de la card
        const imgcard = document.createElement("li"); // Crea un elemento "li" que contiene la imagen
        const imgElement = document.createElement("img"); // Crea el elemento "img" y se asignan sus atributos
        imgElement.src = campeona.imageUrl;           // Establece la fuente de la imagen
        imgElement.alt = campeona.name;               // Texto alternativo si no carga la imagen
        imgElement.addEventListener("click", () => {
            navigateTo("/campeona/" + campeona.name, { data: campeona });

        });
        imgElement.classList.add("imagen");           // Asigna una clase "imagen" para utilizarlo con CSS
        imgElement.setAttribute("itemprop", "imagen")
        imgcard.appendChild(imgElement);           // Añade la imagen al 'li'
        card.appendChild(imgcard);               // Añade el 'li' con la imagen a la card

        // Información visible inicialmente
        const infocard = document.createElement("li");
        card.classList.add("card");                // Crea un 'li' que contendrá la información adicional
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
            card.appendChild(infocampeona);                 // Añadir el <li> al <ul>
        });

        card.appendChild(infocard);
        divCard.appendChild(card);                  // Añade la información visible a la card



        return card;                                      // Retorna el elemento "ul" creado
    });

    return divCard;
}