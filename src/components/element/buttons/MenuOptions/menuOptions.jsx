import './menuOptions.scss'

const MenuOption = ({ product, onClick }) => {
  return (
    <>
      <button type="button" className="menuOption p-0 mx-3 mt-2 mb-3 shadow-sm" onClick={onClick}>
        <div className="menuOptionName p-0 m-0">{product.name}</div>
        <img src={product.image} alt={product.name} />
        <div className="menuOptionPrice p-0 m-0">${product.price}</div>
      </button>
      
    </>
  );
}

export default MenuOption;

