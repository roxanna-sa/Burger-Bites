import { useLocation } from "react-router-dom";
import KitchenActions from "./kitchenActions";
import Utilities from "../../../utils/utilities";
import OrderDisplay from "../../../element/orderDisplay/orderDisplay";



function Kitchen(){

  const { orders } = KitchenActions();
  const { getNameOfUserInSession } = Utilities();
  const location = useLocation();
  const isCook = location.pathname.includes('cook');
  console.log(isCook);

  return (
    <section className='container'>
      <header className='row'>
          <div className="col-6 ps-2 pe-2"> 
            <label className="fw-bold mt-4">{isCook ? 'Cook' : 'Waiter'}: {getNameOfUserInSession()}</label>
          </div>

          <div className="col-6 pe-2">
            <img src='/proyectImages/logoBurger.png' className='mt-3 ms-auto me-0 d-block' style={{height: '85px', width: 'auto'}}/>
          </div>
      </header>

      <div className='row'>
        <p className="fw-bold">Order Status</p>
      </div>

      <div className='row'>
        { orders && orders.map((order, index) => {
          return (
            <div key={index} className='col-6'>
              <OrderDisplay order={order} isCook={isCook} />
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Kitchen;