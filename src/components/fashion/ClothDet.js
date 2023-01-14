import React, { useEffect } from "react";
import "./Cloth.css";
import { useParams, NavLink } from "react-router-dom";
import Zoom from 'react-medium-image-zoom'
import { Helmet } from "react-helmet";

function ClothingDetail(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let { id } = useParams();

  let clothes = props.clothes[id-1]


  return (
    <div className="container">
      <Helmet>
        <title>DARKER | {clothes.title}</title>
      </Helmet>
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
            <Zoom>
              <img src={clothes.imageB} alt="" />
            </Zoom>
            <Zoom>
              <img src={clothes.imageC} alt="" />
            </Zoom>
            <Zoom>
              <img src={clothes.imageD} alt="" />
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClothingDetail;
