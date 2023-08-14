
export const CreateOrdersActions = () => {

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
  
    return { getWaiterName };
}

export default CreateOrdersActions;
