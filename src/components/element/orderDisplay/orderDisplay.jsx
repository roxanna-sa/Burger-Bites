import './orderDisplay.scss';

const OrderDisplay = ({order}) => {

  const totalPrice = () => {
    let total = 0;

    order.products.forEach(order => {
      total += order.price * order.amount;
    });

    return total;
  };

  return (
      <div className="orderDisplayContainer mt-4">
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
          {order.products && order.products.map((product, index) => {
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
          <h5>Total: ${totalPrice()}</h5>
        </div>
      </div>
  )
}

export default OrderDisplay;