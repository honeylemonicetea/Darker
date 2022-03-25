import React from "react";
import './ImageCard.css'

function ImageCard(props){
    return(
  
            <div className="image-card" style={{backgroundImage:`url(${props.url})`}}>
                <div className="image-inner">
                </div>    
            </div>
  
    )
}

export default ImageCard
