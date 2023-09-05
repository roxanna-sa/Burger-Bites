import './createOrders.scss';
import Input from '../../../element/Input/Input.jsx';
import CreateOrdersActions from './createOrdersActions.jsx';
import MenuOption from '../../../element/buttons/MenuOptions/menuOptions';
import Action from '../../../element/buttons/actionButton/actionButton';
import OrderResume from '../../../element/orderResume/orderResume';
import Utilities from '../../../utils/utilities';

function CreateOrders(){

  const {
    selectedTab,
    setSelectedTab,
    products,
    orders,
    addToOrder,
    deleteFromOrder,
    clearOrder,
    clientName,
    table,
    goToOrderStatus,
    handleSendToKitchen,
    handleTable,
    handleClientName,
    handleClearOrder
  } = CreateOrdersActions();

  const { getNameOfUserInSession } = Utilities();

  function FoodOptions({ selectedTab }) {
    return (
      <section className='col-12 divMenu'>
        <div className='row m-0'> {/* Agregar una fila para los botones en 3 columnas */}
          {products && products.filter(x => x.type === (selectedTab === 0 ? 'Breakfast' : 'Main')).map((product, index) => (
            <div key={index} className='col-md-6 col-lg-4 mb-3'>
              <MenuOption product={product} onClick={() => addToOrder(product)} />
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  return (
    <>
      {/* Primera fila: mesero, nombre cliente, mesa y logo corporativo */}
      <header className="row">

        {/* Nombre mesero e inputs */}
        <div className="col-6 ps-4 pe-2">
          <label className="fw-bold mt-4">Waiter: {getNameOfUserInSession()}</label>

          <Input  inputId={'clientsName'}  inputText={'Client\'s name'} setState={handleClientName} value={clientName} />

          <Input  inputId={'tableNumber'} inputText={'Table nº'} inputType='number' setState={handleTable} value={table} />
          

        </div>

        {/* logo corporativo */}
        <div className="col-6 pe-2">
          <img src='/proyectImages/logoBurger.png' className='mt-3 mx-auto d-block' style={{height: '180px', width: 'auto'}}/>
        </div>

      </header>

      {/* Segunda fila, lista de órdenes y resumen de productos */}

      <section className='row mt-5'>
      {/* Lista de ordenes  */}
        <div className='col-6 ps-4'>
          <button type='button' className={ selectedTab == 0 ? 'btn btn-tab btn-tab-rl active mx-0 col-6' : 'btn btn-tab btn-tab-rl mx-0 col-6' } onClick={() => setSelectedTab(0)}>Breakfast</button>
          <button type='button' className={ selectedTab == 1 ? 'btn btn-tab btn-tab-rr active mx-0 col-6' : 'btn btn-tab btn-tab-rr mx-0 col-6' } onClick={() => setSelectedTab(1)}>Main</button>

          <FoodOptions selectedTab={selectedTab} /> {/* Render condicional */}
          
        </div>

        {/* Resumen de la orden */}
        <div className='col-6'>
          <div className='table-scroll'>
            <OrderResume orders={orders} onClickAdd={addToOrder} onClickDelete={deleteFromOrder} onCLickClear={handleClearOrder} />
          </div>
          
          <div className='col-12 mt-5'>
            <Action className="btn btn-letucce w-100" text="Send to the Kitchen" onClick={handleSendToKitchen} />
            <Action className= 'btn btn-coffee w-100 mt-4' text="Check Order Status" onClick={goToOrderStatus} />
          </div>
        </div>
      </section>      

      
    </>
  );
}

export default CreateOrders;