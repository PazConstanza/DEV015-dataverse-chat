import { navigateTo } from "../router.js";

export const renderCard = (data) => {

    const divCard = document.createElement("div");
    divCard.classList.add("containerCard")

    const cards = data.map(campeona => {
        const card = document.createElement("ul");                              // Crea un elemento "ul" para cada campeona
        card.setAttribute("itemscope", "");
        card.setAttribute("itemtype", "campeonas lol")
        card.classList.add("card");                                            // Asigna una clase "card" para utilizarlo con CSS
        divCard.appendChild(card);

        // Imagen de la card
        const imgcard = document.createElement("li");                          // Crea un elemento "li" que contiene la imagen
        const imgElement = document.createElement("img");                      // Crea el elemento "img" y se asignan sus atributos
        imgElement.src = campeona.imageUrl;                                    // Establece la fuente de la imagen
        imgElement.alt = campeona.name;                                        // Texto alternativo si no carga la imagen
        imgElement.addEventListener("click", () => {
            navigateTo("/campeona/" + campeona.name, { data: campeona });      // Pasar los datos de la campeona


        });

        imgElement.classList.add("imagen");                                    // Asigna una clase "imagen" para utilizarlo con CSS
        imgElement.setAttribute("itemprop", "imagen")
        imgcard.appendChild(imgElement);                                       // Añade la imagen al 'li'
        card.appendChild(imgcard);                                             // Añade el 'li' con la imagen a la card

        // Información visible inicialmente
        const infocard = document.createElement("li");
        card.appendChild(infocard);
        const infoVisible = [
            { prop: "nombre", text: campeona.name },
            { prop: "descripcion", text: campeona.shortDescription },
            { prop: "frase", text: campeona.facts.frase },
            { prop: "dificultad", text: "Dificultad: " + campeona.facts.Dificultad },
            { prop: "tipoDano", text: "Tipo de Daño: " + campeona.facts.Daño },
            { prop: "linea", text: "Carril: " + campeona.facts.Carril }
        ];

        infoVisible.forEach((item) => {                                        // Recorrer el array y crear un <li> para cada elemento
            const infocampeona = document.createElement('li');                 // Crear un nuevo elemento <li>
            infocampeona.textContent = item.text;                              // Agregar texto al <li>
            infocampeona.setAttribute("itemprop", item.prop);
            card.appendChild(infocampeona);                                    // Añadir el <li> al <ul>
        });






        return card;                                                           // Retorna el elemento "ul" creado
    });

    return divCard;
}