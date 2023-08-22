import axios from "axios";

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
    throw error;
  }
};

export default endpointRequest;