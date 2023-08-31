import KitchenActions from "./kitchenActions";
import Utilities from "../../../utils/utilities";
import OrderDisplay from "../../../element/orderDisplay/orderDisplay";



function KitchenWaiter(){

  const { orders } = KitchenActions();

  const { getNameOfUserInSession } = Utilities();

  return (
    <div className='container'>
      <div className='row'>
          <div className="col-6 ps-4 pe-2"> 
            <label className="fw-bold mt-4">Waiter: {getNameOfUserInSession()}</label>
          </div>

          <div className="col-6 pe-2">
            <img src='/proyectImages/logoBurger.png' className='mt-3 mx-auto d-block' style={{height: '180px', width: 'auto'}}/>
          </div>
      </div>

      <div className='row'>
        <p>Order Status</p>
      </div>

      <div className='row'>
        { orders && orders.map((order, index) => {
          return (
            <div key={index} className='col-6'>
              <OrderDisplay order={order} />
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default KitchenWaiter;