// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';


const apiKey = getApiKey();
const apiUrl = 'https://api.openai.com/v1/chat/completions'


export async function communicateWithOpenAI(messages) {

   const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
         model: 'gpt-3.5-turbo',
         messages: [
            { role: 'system', content: "quiero que tomes la personalidad de illaoi de league of legends" },
            { role: 'user', content: messages }
                     ]
      })

   });
   const data = await response.json();
   console.log(data)
   
};  
   

 
 




   //Aquí es donde debes implementar la petición con fetch o axios








