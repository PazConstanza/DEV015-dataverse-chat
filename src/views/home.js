// src/views/Home.js

import { data } from '../data/dataset.js';
import { header } from '../components/header.js'
import { footer } from '../components/footer.js'
import { renderCard } from "../components/renderCard.js";
import { blockApiKey } from '../components/blockApiKey.js';

//import { filterData } from '..dataFunctions';


export const Home = (props) => {

  const container = document.createElement("div");
  container.appendChild(header());
  container.appendChild(blockApiKey());
  



  container.appendChild(renderCard(data));
  container.appendChild(footer());
  return container;
}







