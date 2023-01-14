import React, {useState, useEffect} from "react";
import './Fashion.css'
import ClothingCard from "./ClothingCard";
import { Helmet } from "react-helmet";

function Fashion(props) {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  let tops = props.clothes.filter((item)=>{
    if (item.category == 'top'){
      return item
    }
  })
  let dresses = props.clothes.filter((item) => {
    if (item.category == "dress") {
      return item;
    }
  });
  let bottoms = props.clothes.filter((item) => {
    if (item.category == "bottom") {
      return item;
    }
  });

  return (
    <div className="fashion-container">
      <Helmet>
        <title>DARKER | Clothes</title>
      </Helmet>
      <div className="fashion-menu">
        <a href="#tops">TOPS</a>
        <a href="#dresses">DRESSES</a>
        <a href="#bottoms">BOTTOMS</a>
      </div>
      <div className="container fashion-inner">
        <div id="tops" className="clothing-cat">
          <h1>TOPS</h1>
          <div className="clothes-display">
            {tops.map((item) => (
              <ClothingCard
                imageA={item.imageA}
                title={item.title}
                key={item.id}
                price={item.price}
                description={item.description}
                id={item.id}
              />
            ))}
          </div>
        </div>
        <div id="dresses" className="clothing-cat">
          <h1>Dresses</h1>
          <div className="clothes-display">
            {dresses.map((item) => (
              <ClothingCard
                imageA={item.imageA}
                title={item.title}
                key={item.id}
                price={item.price}
                description={item.description}
                id={item.id}
              />
            ))}
          </div>
        </div>
        <div id="bottoms" className="clothing-cat">
          <h1>Bottoms</h1>
          <div className="clothes-display">
            {bottoms.map((item) => (
              <ClothingCard
                imageA={item.imageA}
                title={item.title}
                key={item.id}
                price={item.price}
                description={item.description}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Fashion;
