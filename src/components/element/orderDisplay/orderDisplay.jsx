import Action from '../buttons/actionButton/actionButton';
import './orderDisplay.scss';

const OrderDisplay = ({order, isCook}) => {

  const totalPrice = () => {
    let total = 0;

    order.products.forEach(order => {
      total += order.price * order.amount;
    });

    return total;
  };

  return (
      <section className="orderDisplayContainer mt-4">
        <div className="row">
            <h4>Table n°: {order.table}</h4>
        </div>
        <div className="row">
          <h5>Status: {order.status}</h5>
        </div>

        <div className="row">
          <h6>Client: {order.client}</h6>
        </div>

        <div className='w-100 orderContainer'>
          {order.products && order.products.map((product, index) => { {/* && verifica order.products existe y solo así realiza el mapeo*/}
              return (
                <div key={index} className="row mx-0 px-0">
                  <div className="col-8">{product.name}</div>
                  <div className="col-4">x {product.amount}</div>
                </div>
                
              );
            })
          }
        </div>
      

        <div className="row">
          <div className='col-8'>
            <h5>Total: ${totalPrice()}</h5>
          </div>

          {isCook && <div className='col-4'>
            <Action className='btn btn-letucce w-100' text='Ready' />
          </div>}
        </div>
        
      </section>
  )
}

export default OrderDisplay;