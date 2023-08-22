import endpointRequest from './api-request';
import axios from 'axios';

jest.mock('axios');

describe('endpointRequest', () => {
  it('debería realizar una solicitud con los parámetros correctos', async () => {
    const mockResponse = { data: 'Respuesta de prueba' };
    axios.mockResolvedValue(mockResponse);

    const result = await endpointRequest('post', 'ruta', { key: 'value' });

    expect(axios).toHaveBeenCalledWith({
      method: 'get',
      url: 'ruta',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer fakeToken' // Cambiar 'fakeToken' 
      },
      data: { key: 'value' }
    });

    expect(result).toEqual('Respuesta de prueba');
  });

  it('debería lanzar un error si la solicitud falla', async () => {
    const mockError = new Error('Error de prueba');
    axios.mockRejectedValue(mockError);

    await expect(endpointRequest('post', 'ruta', { key: 'value' })).rejects.toThrow(mockError);
  });
});