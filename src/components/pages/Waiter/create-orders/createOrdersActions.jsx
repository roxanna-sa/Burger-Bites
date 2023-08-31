import { useState, useEffect } from "react";
import ApiRequest from "../../../utils/services/api-request";
import { useNavigate } from "react-router-dom";

export const CreateOrdersActions = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [products, setProducts] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clientName, setClientName] = useState('');
  const [table, setTable] = useState('');
  const { endpointRequest } = ApiRequest();
  const navigate = useNavigate();
  

  // TODO: carga dos veces desde la api
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productResult = await endpointRequest('get', '/products', null, localStorage.getItem("token"));
        setProducts(productResult);
      } catch (error) {
        // TODO: catch errors
      }
    }

    const loadOrdersFromLocalStorage = () => {
      const ordersBackup = localStorage.getItem('ordersBackup');
      if (ordersBackup == null) {
        return;
      }

      const ordersData = JSON.parse(ordersBackup);
      setOrders(ordersData);
      setLoading(false);
    }

    loadProducts();
    loadOrdersFromLocalStorage();
  }, []);

  useEffect(() => {
    const backupOrders = () => {
      if (loading){
        return;
      }
      // hacer backup de ordenes en sesión
      localStorage.setItem('ordersBackup', JSON.stringify(orders));
    }

    backupOrders();
  }, [orders]);


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
        type: product.type,
        amount: 1,
        dateEntry: new Date()
      }]);
    }
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

  
  const clearOrder =  () => {
    setOrders([]);
  }

  const handleClientName = (e) => setClientName(e.target.value);

  const handleTable = (e) => setTable(e.target.value);

  const handleSendToKitchen = async () => {
    await sendToKitchen(orders, table, clientName);

    // Vaciar los campos de entrada después de enviar a la cocina
    setClientName('');
    setTable('');
  };

  const sendToKitchen = async (orders, table, clientName) => {

    const userData = JSON.parse(localStorage.getItem('user'));

    const body = {
      userId: userData.id,
      table: table,
      client: clientName,
      status: 'pending',
      dateEntry: new Date(),
      products: orders
    };

    await endpointRequest('post', '/orders', body, localStorage.getItem("token"));

    clearOrder(); // vaciar orden.
  
  }
  
  const goToOrderStatus = () => {
    navigate('/waiter/kitchen');
  }

  return { selectedTab, setSelectedTab, products, orders, addToOrder, deleteFromOrder, clearOrder, clientName, table, handleClientName, handleTable, handleSendToKitchen, goToOrderStatus };
}

export default CreateOrdersActions;
