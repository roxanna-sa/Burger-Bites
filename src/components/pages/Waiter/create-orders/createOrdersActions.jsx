import { useState, useEffect } from "react";
import ApiRequest from "../../../utils/api-request";

export const CreateOrdersActions = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [products, setProducts] = useState(null);
  const [orders, setOrders] = useState([]);
  const { endpointRequest } = ApiRequest();

  // TODO: carga dos veces desde la api
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productResult = await endpointRequest('get', '/products', null, localStorage.getItem("token"));
        setProducts(productResult);
      } catch (error) {
      
      }
    }
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

  const addToOrder = (product) => {
    // VERFICAR SI EL PRODUCTO YA EXISTE Y SI EXISTE SUMARLE UNA CANTIDAD
    if (orders.some(x => x.id === product.id)) {
      const currentIndex = orders.findIndex(x => x.id === product.id);
      // Copia del Arreglo
      let ordersCopy = [...orders];
      ordersCopy[currentIndex].amount += 1;
      setOrders(ordersCopy)
    } else {
      setOrders([...orders, {
        id: product.id,
        name: product.name,
        price: product.price,
        amount: 1

      }]);
    }
    //console.log(orders)
  }

  const deleteFromOrder = (productId) => {
    if (!orders.some (x => x.id === productId)) {
      return;
    }
    const currentIndex = orders.findIndex(x => x.id === productId);
    let ordersCopy = [...orders];
    if (orders[currentIndex].amount === 1){
      // eliminar de lista
      ordersCopy.splice(currentIndex, 1);
    } else {
      ordersCopy[currentIndex].amount -= 1;
    }
    setOrders(ordersCopy)
  }

  

  /*
  const sendToKitchen = async (orders) => {

    const userData = JSON.parse(localStorage.get('user'));

    const body = {
      userId: userData.id,
      client: 'cliente de prueba',
      products: [],
      status: 'pending',
      dateEntry: new Date()
    };

    await endpointRequest('post', '/orders', body, localStorage.getItem("token"));

    setOrders([]); // vaciar orden.
  }
  */

  return { getWaiterName, selectedTab, setSelectedTab, products, orders, addToOrder, deleteFromOrder };
}

export default CreateOrdersActions;
