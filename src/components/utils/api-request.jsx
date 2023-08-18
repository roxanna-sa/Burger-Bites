import axios from "axios";

const apiInstance = axios.create({
  baseURL: 'http://localhost:8080/'
});

const endpointRequest = async (requestType, endpointURL, body) => {
  try {

    const token = localStorage.getItem("token");

    const result = await apiInstance({
      method: requestType,
      url: endpointURL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: body
    })

    return result.data;
  }catch(error){
    throw (error);
  }
}

export default endpointRequest;