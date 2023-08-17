import './menuOptions.scss'

const MenuOption = ({ product }) => {
  return (
    <>
      <button type="button" className="menuOption p-0 mx-0 mt-2 mb-3">
        <div className="menuOptionName p-0 m-0">{product.name}</div>
        <img src="../../public/proyectImages/burger.png"></img>
        <div className="menuOptionPrice p-0 m-0">{product.price}</div>
      </button>
      
    </>
  );
}

export default MenuOption;