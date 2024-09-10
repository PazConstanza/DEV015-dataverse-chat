# Dataverse Chat

## Índice

* [1. Descripción General](#1-Descripción-General)
* [2. Tecnologías Utilizadas](#2-Tecnologías-Utilizadas)
* [3. Funcionalidades](#3-Funcionalidades)
* [4. Flujo de Usuario](#4-Flujo-de-Usuario)
* [5. Conclusión](#5-Conclusión)


***

## 1. Descripción General.

El proyecto consiste en una página web de tipo SPA (Single Page Application) centrada en personajes femeninos del juego League of Legends. Los usuarios pueden explorar diferentes campeonas a través de tarjetas interactivas, que muestran información básica de cada campeona. Al hacer clic en una tarjeta, se navega a una vista con más información detallada de la campeona seleccionada, y se ofrece la posibilidad de interactuar mediante un chat con el personaje utilizando la API de OpenAI.
 

## 2. Tecnologías Utilizadas.

* HTML5: Estructura básica del sitio web.
* CSS3: Estilos y diseño de la página para garantizar una experiencia visual agradable y responsiva.
* JavaScript: Lógica de navegación entre vistas, manejo de rutas y la interacción dinámica con la API de OpenAI.
* API de OpenAI: Integración con la API para generar respuestas automáticas en un chat interactivo con las campeonas.


## 3. Funcionalidades.

* Tarjetas de Campeonas: Se muestran tarjetas con información breve de cada campeona (nombre, descripción corta, rol, entre otros). Estas tarjetas están dispuestas de forma dinámica y se ajustan en tres columnas.

* Vista Detallada: Al hacer clic en una tarjeta, el usuario es redirigido a una vista específica que muestra más detalles de la campeona seleccionada. Esta vista incluye imágenes, habilidades y una descripción más extensa del personaje.

* Chat con la Campeona: En la vista detallada, el usuario tiene la opción de iniciar una conversación con la campeona utilizando un botón que redirige a una vista de chat. Este chat está conectado a la API de OpenAI, permitiendo al usuario interactuar con el personaje mediante mensajes automáticos generados por IA.

* Navegación entre Vistas: La aplicación utiliza rutas dinámicas basadas en el nombre de las campeonas para facilitar la navegación entre las distintas vistas, asegurando una experiencia fluida y sin recargas de página.


## 4. Flujo de Usuario.

1. El usuario ingresa a la página principal y visualiza una serie de tarjetas con diferentes campeonas.
2. Al hacer clic en una tarjeta, se muestra una vista detallada con información más completa sobre la campeona.
3. En la vista detallada, el usuario puede iniciar un chat con la campeona seleccionada. Este chat se despliega en una vista nueva y utiliza la API de OpenAI para generar las respuestas del personaje.
4- El usuario puede regresar a la vista detallada o a la página principal para continuar explorando.

## 5. Conclusión.

Este proyecto combina el uso de tecnologías web modernas como JavaScript, HTML y CSS para crear una SPA interactiva que permite a los usuarios explorar personajes de League of Legends de una manera atractiva y dinámica. La integración con la API de OpenAI añade una capa de interacción única, haciendo que la experiencia de los usuarios sea más inmersiva.
