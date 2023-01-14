import React, {useEffect, useState} from "react";
import './MovieDetail.css'
import { useParams, NavLink } from "react-router-dom";
import Zoom from 'react-medium-image-zoom'
import { Helmet } from "react-helmet";
function MovieDetail(props){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let { id } = useParams();
  let movie = props.movies[id-1]
  
    return (
      <div className="container">
      <Helmet>
        <title>DARKER | {movie.title}</title>
      </Helmet>
        <div className="movie-det-container">
          <div className="movie-left">
            <NavLink to="/movies" className="back-arrow">
              ← back
            </NavLink>
            <div
              className="poster"
              style={{
                backgroundImage: `url(${movie.poster})`,
              }}
            ></div>
             <div className="still-gallery">
              <Zoom>
                <img src={movie.still1} alt="" />
              </Zoom>
              <Zoom>
                <img src={movie.still2} alt="" />
              </Zoom>
              <Zoom>
                <img src={movie.still3} alt="" />
              </Zoom>
            </div>
          </div>
          <div className="movie-right">
            <h1 className="movie-title">{movie.title}</h1>
            <p className="year-det">{movie.year}</p>
            <p>
              <span className="bolder">Genres:</span> {movie.genre}
            </p>
            <p>
              <span className="bolder">Directed by</span> {movie.director}
            </p>
            <p>
              <span className="bolder">Cast:</span> {movie.cast}
            </p>
            <p className="summary">
              <span className="bolder">Plot Summary: </span>
              {movie.summary}
            </p>
            {/* <div className="still-gallery">
              <img src={movie.still1} alt="" />
              <img src={movie.still2} alt="" />
              <img src={movie.still3} alt="" />
            </div> */}
            <iframe
              width="100%"
              height="315"
              src={movie.trailerURL}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
}

export default MovieDetail