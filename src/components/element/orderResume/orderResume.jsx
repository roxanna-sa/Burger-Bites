import './orderResume.scss';

const OrderResume = ({ orders, onClickAdd , onClickDelete }) => {
  const totalPrice = () => {
    let total = 0;

    orders.forEach(order => {
      total += order.price * order.amount;
    });

    return total;
  };

  return (
    <table className='main-table'>
      <thead>
        <tr>
          <th colSpan='4'>Order</th>
        </tr>
      </thead>

      <tbody>
        {orders &&
          orders.map((order, index) => {
            return (
              <tr key={index}>
                <td className='col50'>{order.name}</td>
                <td className='col16'><button className='btn-order' type='button' onClick={()=> onClickDelete(order.id)}> -</button></td>
                <td className='col16'>{order.amount}</td>
                <td className='col16'><button className='btn-order' type='button' onClick={()=> onClickAdd(order)}>+</button></td>
              </tr>
            );
          })}
      </tbody>

      <tfoot>
        <tr>
          <td className='py-1'>Total</td>
          <td className='py-1' colSpan='2'>${totalPrice()}</td>
          {/* Invoca la función aquí usando los paréntesis */}
          <td className='py-0'>
            <button type='button' className='p-0 btn btn-bin' style={{width: '20px' }}>
              <img src='/proyectImages/bin.png' style={{width: '100%', height: 'auto' }}></img>
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default OrderResume;


