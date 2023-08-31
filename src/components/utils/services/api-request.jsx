import axios from "axios";
import { useNavigate } from "react-router-dom";

const ApiRequest = () => {

  const navigate = useNavigate();

  const endpointRequest = async (requestType, endpointURL, body, token) => {
    
    const apiInstance = axios.create({
      baseURL: 'http://localhost:8080/',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  
    try {
      const result = await apiInstance({
        method: requestType,
        url: endpointURL,
        data: body
      });
  
      return result.data;
    } catch (error) {
      const errorCode = error.response.status;
      // Chequear si no tiene autorización
      if (errorCode == 401){
        return navigate('/');
      }
  
      throw error;
    }
  };

  return { endpointRequest };
}

export default ApiRequest;