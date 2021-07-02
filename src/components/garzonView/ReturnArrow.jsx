import React from "react";
import { useHistory } from "react-router-dom";
import returnArrow from "../images/returnArrow.png";

function ReturnArrow(props) {
  const history = useHistory();
  return (
    <React.Fragment>
      <img
        src={returnArrow}
        alt="return"
        className={props.class}
        onClick={() => history.goBack()}
      />
    </React.Fragment>
  );
}

export default ReturnArrow;
