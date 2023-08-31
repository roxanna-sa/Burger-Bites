import { useEffect, useState } from "react";
import ApiRequest from "../../../utils/services/api-request";

const KitchenActions = () => {
  const { endpointRequest } = ApiRequest();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        console.log("loadorders?");
        const orderResult = await endpointRequest('get', '/orders', null, localStorage.getItem("token"));
        setOrders(orderResult);
      } catch (error) {
        // TODO: catch errors
      }
    }

    loadOrders();
  }, []);

 

  return { orders };
}

export default KitchenActions;