import axios from "axios";

const apiInstance = axios.create({
  baseURL: 'http://localhost:8080/'
});

const endpointRequest = async (requestType, endpointURL, body) => {
  try {
    const result = await apiInstance({
      method: requestType,
      url: endpointURL,
      headers: {
        'Content-Type': 'application/json'
      },
      data: body
    })

    return result.data;
  }catch(error){
    alert(error.response.data);
  }
}

export default endpointRequest;