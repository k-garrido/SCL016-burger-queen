import React from "react";
import data from "../menu.json";
import line from "../images/line.png";

function DrinksList(props) {
  const drinksArray = data.bebestibles;

  // Filtrando el objeto segun el grupo de items que se necesita renderizar.
  const cocktails = drinksArray.filter((item) => item.category === "cocktail");
  const otherDrinks = drinksArray.filter((item) => item.category === "otherDrinks");

  // Recorriendo el array de cada grupo y generando el div de cada item.
  const cocktailsList = cocktails.map((item) => (
    <div key={item.id} onClick={props.function} className="item">
      <p className="itemTitle">{item.name}</p>
      <p className="itemTitle"> ${item.price}</p>
    </div>
  ));
  const otherDrinksList = otherDrinks.map((item) => (
    <div key={item.id} onClick={props.function} className="item">
      <p className="itemTitle">{item.name}</p>
      <p className="itemTitle"> ${item.price}</p>
    </div>
  ));

  return (
    <React.Fragment>
      <p className="groupTitle">Cocktails</p>
      <img src={line} alt="line" className="line" />
      {cocktailsList}
      <p className="groupTitle">Otros Bebestibles</p>
      <img src={line} alt="line" className="line" />
      {otherDrinksList}
    </React.Fragment>
  );
}

export default DrinksList;
