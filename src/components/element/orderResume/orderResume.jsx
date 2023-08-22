const OrderResume = ({ orders, onClickAdd , onClickDelete }) => {
  const totalPrice = () => {
    return 1000;
  };

  return (
    <table border='1'>
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
                <td>{order.name}</td>
                <td><button type='button' onClick={()=> onClickDelete(order.id)}>-</button></td>
                <td>{order.amount}</td>
                <td><button type='button' onClick={()=> onClickAdd(order)}>+</button></td>
              </tr>
            );
          })}
      </tbody>

      <tfoot>
        <tr>
          <td>Total</td>
          <td colSpan='2'>${totalPrice()}</td>
          {/* Invoca la función aquí usando los paréntesis */}
          <td>X</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default OrderResume;


