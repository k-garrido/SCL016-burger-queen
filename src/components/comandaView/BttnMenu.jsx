import React from "react";

function BttnMenu(props) {
  return (
    <React.Fragment>
      <div className = {props.class} onClick={props.function}>
        {props.name}
      </div>
    </React.Fragment>
  );
}

export default BttnMenu;
