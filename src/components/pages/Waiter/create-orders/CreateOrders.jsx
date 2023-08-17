import './createOrders.scss';
import Input from '../../../element/Input/Input.jsx';
import CreateOrdersActions from './createOrdersActions.jsx';
import MenuOption from '../../../element/buttons/MenuOptions/menuOptions';

function CreateOrders(){

  const {
    getWaiterName,
    selectedTab,
    setSelectedTab,
    products
  } = CreateOrdersActions();

  function FoodOptions({ selectedTab }) {
    if (selectedTab == 0) {
      return (
        <div className='col-12 divMenu'>
          {products && products.filter(x => x.type == 'Breakfast').map((product, index) => {
            return <MenuOption key={index} product={product}/>
          })}
        </div>
      );
    }else{
      return (
        <div className='col-12 divMenu'>
        {products && products.filter(x => x.type == 'Main').map((product, index) => {
          return <MenuOption key={index} product={product}/>
        })}
      </div>
      );
    }
  }

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
        <p>Selected tab: {selectedTab}</p>
      {/* Lista de ordenes  */}
        <div className='col-6 ps-4'>
          <button type='button' className={ selectedTab == 0 ? 'btn btn-tab btn-tab-rl active mx-0 col-6' : 'btn btn-tab btn-tab-rl mx-0 col-6' } onClick={() => setSelectedTab(0)}>Breakfast</button>
          <button type='button' className={ selectedTab == 1 ? 'btn btn-tab btn-tab-rr active mx-0 col-6' : 'btn btn-tab btn-tab-rr mx-0 col-6' } onClick={() => setSelectedTab(1)}>Main</button>

          <FoodOptions selectedTab={selectedTab} />
          
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