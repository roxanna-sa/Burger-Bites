import { useState } from "react";

export const CreateOrdersActions = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    // Al presionar el botón "Login" inicia sesión
    const getWaiterName = () => {
      const waiter = localStorage.getItem('user');
      if (waiter == null){
        alert('No hay data del mesero en sesión');
        return;
      }

      const waiterData = JSON.parse(waiter);
      
      return waiterData.name;
    };
  
    return { getWaiterName, selectedTab, setSelectedTab };
}

export default CreateOrdersActions;
