import axios from 'axios';
import LoginActions  from './loginActions';

jest.mock('axios');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
 useNavigate: () => jest.fn(),
}));

describe('loginActions', () => {
  it('should login successfully', async () => {
    const mockResponse = { data: { token: 'fakeToken' } };
    axios.post.mockResolvedValue(mockResponse);

    const result = await LoginActions('testUser', 'testPassword');

    expect(result).toEqual({ token: 'fakeToken' });
  });

  it('should throw an error on login failure', async () => {
    const mockError = new Error('Request failed');
    axios.post.mockRejectedValue(mockError);

    await expect(LoginActions('testUser', 'testPassword')).rejects.toThrow('Login failed');
  });
});