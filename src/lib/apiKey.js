// src/lib/apiKey.js

export const setApiKey = (key) => {

    localStorage.setItem('apiKey',key);
   


    // Implementa el código para guardar la API KEY en Local Storage


  };

export const getApiKey = () => {

    const apiKey = localStorage.getItem('apiKey')

    return apiKey
    // Implementa el código para obtener la API KEY desde Local Storage
 };
 
