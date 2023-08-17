import { useState, useEffect } from "react";
import endpointRequest from "../../../utils/api-request";

export const CreateOrdersActions = () => {

  const [selectedTab, setSelectedTab] = useState(0);
  const [products, setProducts] = useState(null);

  // TODO: carga dos veces desde la api
  useEffect(() => {
    const loadProducts = async () => {

      // Till the data is fetch using API 
      // the Loading page will show.
      // setLoading(true);

      // Await make wait until that 
      // promise settles and return its result
      const productResult = await endpointRequest('get', '/products');
      // After fetching data stored it in posts state.
      setProducts(productResult);
      // Closed the loading page
      //setLoading(false);
    }

    // Call the function
    loadProducts();
  }, []);

  // Al presionar el botón "Login" inicia sesión
  const getWaiterName = () => {
    const waiter = localStorage.getItem('user');
    if (waiter == null) {
      alert('No hay data del mesero en sesión');
      return;
    }

    const waiterData = JSON.parse(waiter);

    return waiterData.name;
  };

  return { getWaiterName, selectedTab, setSelectedTab, products };
}

export default CreateOrdersActions;
