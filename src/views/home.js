import { data } from '../data/dataset.js';
import { header } from '../components/header.js'
import { footer } from '../components/footer.js'
import { renderCard } from "../components/renderCard.js";
import { blockApiKey } from '../components/blockApiKey.js';
import { filter } from '../components/filter.js';

//import { filterData } from '../lib/dataFunctions.js';




export const Home = (props) => {

  const container = document.createElement("div");
  container.appendChild(header());
  container.appendChild(blockApiKey());
  container.appendChild(filter());





  container.appendChild(renderCard(data));
  container.appendChild(footer());
  return container;
}







