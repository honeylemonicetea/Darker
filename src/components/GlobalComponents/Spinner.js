import React from "react";

import './Spinner.css'
import SpinIcon from '../../img/bat.png'


function Spinner(){
    return(
        <div className="spinner-container">
            <img src={SpinIcon} alt="" className="spinner" />
            
            <p>Loading...</p>

        </div>
    )
}

export default Spinner