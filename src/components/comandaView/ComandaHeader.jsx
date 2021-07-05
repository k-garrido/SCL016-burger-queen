import React from "react";
import "../componentsCSS/comandaPage.css";
import ReturnArrow from "../garzonView/ReturnArrow.jsx";
import miniLogo from "../images/miniLogo.png";

function ComandaHeader(props) {
  return (
    <div className="comandaHeader">
      <img src={miniLogo} alt="logo" className="comandaMiniLogo" />
      <p className="mainTitleComanda">{props.titleName}</p>
      <ReturnArrow class="comandaReturnArrow" />
    </div>
  );
}

export default ComandaHeader;
