import React from "react";
import data from "../menu.json";
import line from "../images/line.png";

function FoodList(props) {
  const foodArray = data.comida;

  // Filtrando el objeto segun el grupo de items que se necesita renderizar.
  const starter = foodArray.filter((item) => item.category === "starter");
  const main = foodArray.filter((item) => item.category === "main");
  const sideDish = foodArray.filter((item) => item.category === "sideDish");

  // Recorriendo el array de cada grupo y generando el div de cada item.
  const starterList = starter.map((item) => (
    <div key={item.id} onClick={props.function} className="item" id={item.name}>
      <p className="itemTitle">{item.name}</p>
      <p className="itemTitle"> ${item.price}</p>
    </div>
  ));
  const mainList = main.map((item) => (
    <div key={item.id} onClick={props.function} className="item" id={item.name}>
      <p className="itemTitle">{item.name}</p>
      <p className="itemTitle"> ${item.price}</p>
    </div>
  ));
  const sideDishList = sideDish.map((item) => (
    <div key={item.id} onClick={props.function} className="item" id={item.name}>
      <p className="itemTitle">{item.name}</p>
      <p className="itemTitle"> ${item.price}</p>
    </div>
  ));

  return (
    <React.Fragment>
      <p className="groupTitle">Entradas</p>
      <img src={line} alt="line" className="line" />
      {starterList}
      <p className="groupTitle">Fondos</p>
      <img src={line} alt="line" className="line" />
      {mainList}
      <p className="groupTitle">Agregados</p>
      <img src={line} alt="line" className="line" />
      {sideDishList}
    </React.Fragment>
  );
}

export default FoodList;
