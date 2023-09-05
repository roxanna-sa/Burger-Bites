import { useState, useEffect } from "react";
import ApiRequest from "../../../utils/services/api-request";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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

  const handleClearOrder = () => {
    if(orders.length > 0){
      Swal.fire({
        title: 'Are you sure?',
        text: 'This order will be permanently deleted',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete it',
        confirmButtonColor: '#B2513C',
        cancelButtonText: 'Go back'
      }).then((result) => {
        if (result.isConfirmed) {
          clearOrder(); // Llama a clearOrder solo si el usuario confirma
        }
      });
    }
  };

  const handleClientName = (e) => setClientName(e.target.value);

  const handleTable = (e) => setTable(e.target.value);

  const handleSendToKitchen = async () => {
    if(orders.length > 0 && clientName !== '' && table !== '') {
      // Muestra una alerta de confirmación
      Swal.fire({
        title: 'Confirmation',
        text: 'Is this ready for the kitchen?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, send it!',
        confirmButtonColor: '#8dbe79',
        cancelButtonText: 'Cancel :(',
      }).then(async (result) => {
        if (result.isConfirmed) {
          // Si el usuario confirma, llama a la función sendToKitchen
          await sendToKitchen(orders, table, clientName);
    
          // Vacía los campos de entrada después de enviar a la cocina
          setClientName('');
          setTable('');
        }
      });
    }else{
      // Muestra una alerta de error
      Swal.fire({
        title: 'Error',
        text: 'All fields are required',
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#B2513C',
      });
    }
  };

  const sendToKitchen = async (orders, table, clientName) => {

    const userData = JSON.parse(localStorage.getItem('user'));

    const body = {  // data model
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

  return { selectedTab, setSelectedTab, products, orders, addToOrder, deleteFromOrder, clearOrder, clientName, table, handleClientName, handleTable, handleSendToKitchen, goToOrderStatus, handleClearOrder };
}

export default CreateOrdersActions;
