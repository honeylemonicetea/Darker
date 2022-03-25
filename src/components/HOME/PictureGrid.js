import React from "react";

import './PictureGrid.css'

function Banner(){
    return (
      <div className="grid-container">
        <div className="container">
          <h1>Pictures</h1>
          <div className="banner-cards">
            <div className="card card-one"></div>
            <div className="card card-two"></div>
            <div className="card card-three"></div>
            <div className="card card-four"></div>
            <div className="card card-five"></div>
            <div className="card card-six"></div>
            <div className="card card-seven"></div>
            <div className="card card-eight"></div>
          </div>
        </div>
      </div>
    );
}

export default Banner