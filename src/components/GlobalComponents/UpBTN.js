import React, {useEffect, useState} from "react";
import './UpBTN.css'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleUp} from '@fortawesome/free-solid-svg-icons'
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

function UpBTN(){
    let [visible, setVisible] = useState()
    
    let goUp = () =>{
        window.scrollTo(0, 0)
    }

     useScrollPosition(({ prevPos, currPos }) => {
       if (currPos.y < -200) {
         setVisible("block");
       } else {
         setVisible("none");
       }
     });


    return (
      <div className="up-btn-container" style={{ display: `${visible}` }}>
        <div className="up-btn">
          <FontAwesomeIcon icon={faCircleUp} onClick={goUp} />
        </div>
      </div>
    );
}


export default UpBTN

