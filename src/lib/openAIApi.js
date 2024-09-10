// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';


const apiKey = getApiKey();
const apiUrl = 'https://api.openai.com/v1/chat/completions'

//Aquí es donde debes implementar la petición con fetch o axios
export async function communicateWithOpenAI(messages, name) {

   const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
         model: 'gpt-3.5-turbo',
         messages: [
            { role: 'system', content: 'quiero que tomes la personalidad de ' + name + ' de league of legends' },
            { role: 'user', content: messages }
         ]
      })

   });
   const data = await response.json();
   console.log(data.choices[0].message.content)

   return data.choices[0].message.content
};

















