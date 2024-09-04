import { communicateWithOpenAI } from "../lib/openAIApi.js";


export const Chat = () => {

  const divChat = document.createElement('div');
  divChat.classList.add('divChat')


  const messageHistory = document.createElement('dialog');
  divChat.appendChild(messageHistory);

  const inputChat = document.createElement('input');
  inputChat.id = 'inputChatId';
  inputChat.placeholder = "Escribe aqui...";
  inputChat.type = 'text';
  inputChat.classList.add('inputChat');
  divChat.appendChild(inputChat);


  const button = document.createElement('button');
  button.id = 'inputChatId';
  button.textContent = "Enviar";
  button.classList.add('buttonChat');
  divChat.appendChild(button);

  button.addEventListener('click', function () {
    const messagesChat = document.getElementById('inputChatId').value;
    communicateWithOpenAI(messagesChat);
    

  });

  return divChat;
};