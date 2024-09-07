import { communicateWithOpenAI } from "../lib/openAIApi.js";


export const Chat = (prop) => {
  console.log(prop.name)

  const divChat = document.createElement('div');
  divChat.classList.add('divChat')


  const messageHistory = document.createElement('div');
  messageHistory.classList.add('messageHistory')
  divChat.appendChild(messageHistory);


  const inputChat = document.createElement('input');
  inputChat.id = 'inputChatId';
  inputChat.placeholder = "Escribe aqui...";
  inputChat.type = 'text';
  inputChat.classList.add('inputChat');
  divChat.appendChild(inputChat);


  const button = document.createElement('button');
  button.id = 'buttonChatId';
  button.textContent = "Enviar";
  button.classList.add('button');
  divChat.appendChild(button);

  button.addEventListener('click', async function () {
    const messagesChat = document.getElementById('inputChatId').value;
    addMessagetoChat('Tú', messagesChat, messageHistory)
    inputChat.value = "";

    try {
      // Espera la respuesta de la función asíncrona
      let response = await communicateWithOpenAI(messagesChat, prop.name);

      // Renderiza la respuesta en el HTML
      addMessagetoChat(prop.name, response, messageHistory)
      console.log(response);


    } catch (error) {
      // Manejo de errores
      console.error('Error al comunicar con OpenAI:', error);
    }


  });



  return divChat;
};

function addMessagetoChat(person, message, messageHistory) {

  const divMessage = document.createElement('div');
  divMessage.classList.add('divMesagge');
  divMessage.innerHTML = `<strong>${person}:</strong> ${message}`;
  messageHistory.appendChild(divMessage);
}
