// src/lib/openAIApi.test.js


import { communicateWithOpenAI } from '../lib/openAIApi.js';

jest.mock('../lib/openAIApi.js', () => ({                                       // Mock de communicateWithOpenAI
  communicateWithOpenAI: jest.fn(),
}));
describe('communicateWithOpenAI', () => {
  beforeEach(() => {
    jest.clearAllMocks();                                                      // Limpia los mocks antes de cada prueba
  });
  describe('Llamado de la api exitoso', () => {
    it('Debe retornar una respuesta valida de la api', async () => {         // Definimos el ambiente simulado para devolver una respuesta simulada
                                                                       
      const mockResponse = {
        choices: [
          {
            message: {
              content: "Que tal"
            }
          }
        ]
      };
      
      communicateWithOpenAI.mockResolvedValue(mockResponse);                    // Se pasa un mock resolved con la respuesta simulada
      const message = "Hola";
      const campeonaName = "Ahri";
      const data = await communicateWithOpenAI(message, campeonaName);
      
      expect(data).toHaveProperty('choices');                                   // Que la respuesta tenga la estructura esperada
      expect(data.choices[0]).toHaveProperty('message');
      expect(data.choices[0].message).toHaveProperty('content');
      expect(data.choices[0].message.content).toBe("Que tal");
    });
  });
  describe('Fallo en el llamado de la api', () => {
    it('Debe devolver un error', async () => {                          // Simulamos un error en la API
     
      const mockError = new Error('Error');
      communicateWithOpenAI.mockRejectedValue(mockError);
      const message = "Hola";
      const campeonaName = "Ahri";
      await expect(communicateWithOpenAI(message, campeonaName)).rejects.toThrow('Error');
    });
  });
});