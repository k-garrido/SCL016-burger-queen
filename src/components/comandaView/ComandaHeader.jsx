import React from 'react'

import ReturnArrow from "../garzonView/ReturnArrow.jsx";
import miniLogo from "../images/miniLogo.png";
 

function ComandaHeader() {
    return (
        <div className="containerHeader">
      <img src={miniLogo} alt="logo" className="miniLogo" />
      
      <ReturnArrow class="returnArrow" />
    </div>
    )
}

export default ComandaHeader
