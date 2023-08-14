import Input from '../../../element/Input/Input.jsx';
import CreateOrdersActions from './createOrdersActions.jsx';

function CreateOrders(){

  const {
    getWaiterName
  } = CreateOrdersActions();

  return (
    <>
      {/* Primera fila: mesero, nombre cliente, mesa y logo corporativo */}
      <div className="row">

        {/* Nombre mesero e inputs */}
        <div className="col-6 ps-4 pe-2">
          <label className="fw-bold mt-4">Waiter: {getWaiterName()}</label>

          <Input inputId={'clientsName'} inputText={'Client\'s name'} />

          <Input inputId={'tableNumber'} inputText={'Table nº'} inputType='number' />

        </div>

        {/* logo corporativo */}
        <div className="col-6 pe-2">
          <img src='/proyectImages/logoBurger.png' className='mt-3 mx-auto d-block' style={{height: '180px', width: 'auto'}}/>
        </div>

      </div>

      {/* Segunda fila, lista de órdenes y resumen de productos */}

      <div className='row'>
      {/* Lista de ordenes  */}
        <div className='col-6'>
          <p>Creamos órdenes para los clientitos :D Creamos órdenes para los clientitos :D Creamos órdenes para los clientitos :D Creamos órdenes para los clientitos :D</p>
        </div>

        {/* Resumen de la orden */}
        <div className='col-6'>
          <p>Creamos órdenes para los clientitos :D Creamos órdenes para los clientitos :D Creamos órdenes para los clientitos :D Creamos órdenes para los clientitos :D</p>
        </div>
      </div>      
    </>
  );
}

export default CreateOrders;