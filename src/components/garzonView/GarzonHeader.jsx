import React from "react";
import { Link } from "react-router-dom";
import Button from "../mainPage/Button";
import ReturnArrow from "./ReturnArrow";
import miniLogo from "../images/miniLogo.png";

function GarzonHeader() {
  return (
    <div className="containerHeader">
      <img src={miniLogo} alt="logo" className="miniLogo" />
      <Link to="/Comanda" className="ancla">
        <Button class="headerBttn" name="Crear nueva comanda" />
      </Link>
      <ReturnArrow class="returnArrow" history=""/>
    </div>
  );
}

export default GarzonHeader;
