import React, { useEffect, useState } from "react";
import "./Cloth.css";
import { useParams, NavLink } from "react-router-dom";
import Spinner from "../GlobalComponents/Spinner";

function ClothingDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let { id } = useParams();
  console.log(id);
  let [clothes, setClothes] = useState([]);
  let [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://morning-ravine-89031.herokuapp.com/dark-aeth")
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          let all = res.clothes;
          let cloth = all.filter((item) => item.id == id);
          setClothes(cloth[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (isLoaded === false) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div className="movie-det-container">
        <div className="movie-left">
          <NavLink to="/fashion" className="back-arrow">
            ← back
          </NavLink>
          <div
            className="poster"
            style={{
              backgroundImage: `url(${clothes.imageA})`,
            }}
          ></div>
        </div>
        <div className="movie-right">
          <h1 className="movie-title">{clothes.title}</h1>
          <p className="year-det">{clothes.price}</p>

          <p className="summary">{clothes.description}</p>
          <div className="still-gallery">
            <img src={clothes.imageB} alt="" />
            <img src={clothes.imageC} alt="" />
            <img src={clothes.imageD} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClothingDetail;
