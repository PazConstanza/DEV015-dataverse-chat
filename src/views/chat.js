import { communicateWithOpenAI } from "../lib/openAIApi.js";


export const Chat = (prop) => {

  if (!prop || !prop.data) {
    console.log(prop)                                                        // Si no hay datos en props, intenta recuperarlos de window.history.state
    const state = window.history.state;
    console.log(state.props)
    if (state && state.props && state.props.data) {
      prop = state.props;                                                            // Recupera los datos desde el historial

    } else {

      const errorElement = document.createElement('p');
      errorElement.textContent = 'No se encontró la información de la campeona';
      return errorElement;
    }
  };

  const chatParent = document.createElement('div')
  chatParent.classList.add('divParent')


  const contenedor = document.createElement('div');
  contenedor.classList.add('chat')

  const title = document.createElement('h1')
  title.textContent = prop.data.name
  contenedor.appendChild(title)

  const imgChat = document.createElement('img');
  imgChat.classList.add('imgChat');
  imgChat.src = prop.data.imageUrl;
  imgChat.alt = prop.name;
  contenedor.appendChild(imgChat);

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
  button.classList.add('buttonChat');
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

  contenedor.appendChild(divChat);
  chatParent.appendChild(contenedor);
  return chatParent
};

function addMessagetoChat(person, message, messageHistory) {

  const divMessage = document.createElement('div');
  divMessage.classList.add('divMesagge');
  divMessage.innerHTML = `<strong>${person}:</strong> ${message}`;
  messageHistory.appendChild(divMessage);
}
