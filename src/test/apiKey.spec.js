// test/apiKey.spec.js

import { getApiKey, setApiKey } from '../lib/apiKey.js';

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
   

    setApiKey('ABCDE')
    const takeValue = getApiKey()
    expect(takeValue).toBe('ABCDE')
  });
});

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {
    // Desarrolla el test correspondiente aquí
    const takeValue = getApiKey()
    expect(takeValue).toBe('ABCDE')
    
  });
});


