import React from "react";
import BttnMenu from "./BttnMenu.jsx";
import DrinksList from "./DrinksList.jsx"
import FoodList from "./FoodList.jsx"
import Form from "./Form.jsx";

function Menu() {

  // Función para ver el elemento que se ha escogido del menu.
  const choosingItem = (e) => {
    e.stopPropagation()
    console.log(e.target.innerText); 
  };
  
  const [itemBox, setItemBox] = React.useState(<DrinksList function ={choosingItem}/>);

  // Funcion para cambiar los items a comida.
  const food = () => {
    setItemBox(<FoodList function ={choosingItem}/>);
  };

  //Función para cambiar los items a bebestibles.
  const drinks = () => {
    setItemBox(<DrinksList function ={choosingItem}/>);
  };

  return (
    <div className="menuContainer">
      <div className="dishesList">
        <div className="buttonsDiv">
          <BttnMenu name="Bebestibles" class="menuBttn drinkBttn" function={drinks} />
          <BttnMenu name="Comida" class="menuBttn foodBttn" function={food} />
        </div>
        <div className="itemByItem">
          {itemBox}
        </div>
      </div>
      <div className="orderList">
        <div className="orderListTitleDiv">
          <h2 className="orderListTitle">Resumen de productos</h2>
        </div>
        <Form />  
      </div>
    </div>
  );
}

export default Menu;
