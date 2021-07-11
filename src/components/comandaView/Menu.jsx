import React from "react";
import data from "../menu.json";
import BttnMenu from "./BttnMenu.jsx";
import DrinksList from "./DrinksList.jsx";
import FoodList from "./FoodList.jsx";
import Form from "./Form.jsx";

function Menu() {
  // Función para ver el elemento que se ha escogido del menu.
  const [itemsSelected, setItemsSelected] = React.useState([]);
  
  const choosingItem = (e) => {
    const allProducts = []
    data.bebestibles.map((item)=> allProducts.push(item));
    data.comida.map((item)=> allProducts.push(item));
    const exist = itemsSelected.some( item => item.name ===  e.currentTarget.id)

    const dataFiltered = allProducts.filter((item) => item.name === e.currentTarget.id);
    
    if (!exist) {
      itemsSelected.push(dataFiltered[0])
      setItemsSelected([...itemsSelected])
    }
    
  };

  const [itemBox, setItemBox] = React.useState(
    <DrinksList function={choosingItem} />
  );

  // Funcion para cambiar los items a comida.
  const food = () => {
    setItemBox(<FoodList function={choosingItem} />);
  };

  //Función para cambiar los items a bebestibles.
  const drinks = () => {
    setItemBox(<DrinksList function={choosingItem} />);
  };

  return (
    <div className="menuContainer">
      <div className="dishesList">
        <div className="buttonsDiv">
          <BttnMenu name="Bebestibles" class="menuBttn drinkBttn" function={drinks}
          />
          <BttnMenu name="Comida" class="menuBttn foodBttn" function={food} />
        </div>
        <div className="itemByItem">{itemBox}</div>
      </div>
      <div className="orderList">
        <div className="orderListTitleDiv">
          <h2 className="orderListTitle">Resumen de productos</h2>
        </div>
        <Form array = {itemsSelected}/>
      </div>
    </div>
  );
}

export default Menu;
