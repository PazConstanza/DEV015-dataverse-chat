// src/views/Home.js
import { navigateTo } from "../router.js";


const Home = (props) => {
  const viewElement = document.createElement('div');
 const h3Element = document.createElement('h3');
 const buttonElement = document.createElement('button');

 h3Element.textContent = "Acá irán los filtros";
 h3Element.className = "filtros";
 buttonElement.textContent = "Navegar"
 
 buttonElement.addEventListener('click', () => (navigateTo('/about', { name : "Paz"})));
 viewElement.appendChild(h3Element);
 viewElement.appendChild(buttonElement);
  return viewElement;
}

export default Home

