import React from "react";
import less from "../images/less.png";
import plus from "../images/plus.png";

function Form(props) {

  
  const [quantity, setQuantity] = React.useState(1);
  const [arrayDishes, setArrayDishes] = React.useState(props.array);
  const [total, setTotal] = React.useState(0);

  

  const addItem = (e) => {
    setQuantity(quantity + 1);
  };
  const lessItem = () => {
    setQuantity(quantity - 1);
    if (quantity - 1 === 0) {
      const subtractingItem = arrayDishes.map((item) => console.log(item));
    }
  };

  const dishesList = arrayDishes.map((dish) => (
    <div key={dish.id} className="dishesDiv">
      <div className="plusAndLessDiv">
        <img 
          src={less} 
          alt="less" 
          className="lessImg" 
          onClick={lessItem} 
        />
        <img
          src={plus}
          alt="plus"
          className="lessImg"
          id={dish.id}
          onClick={addItem}
        />
      </div>
      <p className="quantity">{quantity}</p>
      <p className="dish">{dish.name}</p>
      <p className="price">${dish.price * quantity}</p>
    </div>
  ));

  return (
    <React.Fragment>
      <form>
        <div className="itemsSelected">{dishesList}</div>
        <div className="totalDiv">
          <p className="totalTitle">TOTAL</p>
          <p className="totalTitle">{total}</p>
        </div>
        <input type="text" placeholder="Observaciones" className="remark" />
        <input
          type="text"
          placeholder="Nombre del Garzon"
          className="waiterName"
        />
        <input type="text" placeholder="N° de mesa" className="tableNumber" />
        <button>Enviar a cocina</button>
      </form>
    </React.Fragment>
  );
}

export default Form;
