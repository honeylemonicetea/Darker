import React from "react";
import Zoom from 'react-medium-image-zoom'
import './PictureGrid.css'

function Banner(){
    return (
      <div className="grid-container">
        <div className="container">
          <h1>Pictures</h1>
          <div className="banner-cards">
            
            <Zoom>
              <img className="card" src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
            </Zoom>
            <Zoom>
              <img  className="card" src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
            </Zoom>
            <Zoom className="card">
            <img className="card" src="https://images.unsplash.com/photo-1489846986031-7cea03ab8fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" alt="" />
            </Zoom>
            <Zoom className="card">
            <img className="card" src="https://images.unsplash.com/photo-1483982258113-b72862e6cff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </Zoom>
            <Zoom className="card">
              <img className="card" src="https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
            </Zoom>
            <Zoom className="card">
              <img className="card" src="https://images.unsplash.com/photo-1509978778156-518eea30166b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80" alt="" />
            </Zoom> 
            <Zoom className="card card-seven">
              <img className="card" src="https://images.unsplash.com/photo-1494376877685-d3d2559d4f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""  />
            </Zoom>
            <Zoom className="card">
              <img className="card" src="https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=943&q=80" alt="" />
            </Zoom>
          </div>
        </div>
      </div>
    );
}

export default Banner