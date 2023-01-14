import React from "react";
import './ImageCard.css'
import Zoom from 'react-medium-image-zoom' 
function ImageCard(props){
    return(
  
            <Zoom className="image-card">
                <img src={props.url} className="image-card"/>
                    
            </Zoom>
  
    )
}

export default ImageCard
