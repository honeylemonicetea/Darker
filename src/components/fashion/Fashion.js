import React, {useState, useEffect} from "react";
import './Fashion.css'
import ClothingCard from "./ClothingCard";
import Spinner from "../GlobalComponents/Spinner";

function Fashion() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  let [clothes, setClothes] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
  useEffect(()=>{
    fetch("https://morning-ravine-89031.herokuapp.com/dark-aeth")
      .then((res) => res.json())
      .then(
        (res) => {
     
          setIsLoaded(true);
          setClothes(res.clothes)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

  },[])
  let tops = clothes.filter((item)=>{
    if (item.category == 'top'){
      return item
    }
  })
  let dresses = clothes.filter((item) => {
    if (item.category == "dress") {
      return item;
    }
  });
  let bottoms = clothes.filter((item) => {
    if (item.category == "bottom") {
      return item;
    }
  });


  if (error){
    return (
      <div className="fashion-container">
       <h1>ERROR LOADING API</h1>
      </div>
    );
  }
  else if (!isLoaded){
    return(
      <div className="fashion-container">
        <div className="container">
          <Spinner/>
        </div>  
      </div>
    )
  }
  else{
    return (
      <div className="fashion-container">
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
}

export default Fashion;
