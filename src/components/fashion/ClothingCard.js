import React from "react";
import './ClothingCard.css'
import {NavLink} from 'react-router-dom'

function ClothingCard(props){
    return(
        <div className="cloth-card-wrapper">
            <NavLink to={`/fashion/${props.id}`}>
                <div className="cloth-card"  style={{backgroundImage:`url(${props.imageA})`}}>
                    <div className="cloth-details">
                        <p className="cloth-c-title">{props.title}</p>
                        <p className="cloth-c-price">{props.price}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default ClothingCard