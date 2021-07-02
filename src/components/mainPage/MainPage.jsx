import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../images/Logo.jpg";
import "../componentsCSS/MainPage.css";

const MainPage = () => {
  return (
    <section className="mainContainer">
      <img src={logo} alt="logo" className="mainLogo" />
      <h1 className="mainTitle">¿Cuál es tu rol?</h1>
      <div className="buttonsDiv">
        <Link to="/garzon" className="ancla">
          <Button name="Garzon" class="principalBttn" />
        </Link>
        <Link to="/cocina" className="ancla">
          <Button name="Cocinero" class="principalBttn"/>
        </Link>
      </div>
    </section>
  );
};

export default MainPage;
