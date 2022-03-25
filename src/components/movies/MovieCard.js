import React from "react";
import './MovieCard.css'
import { NavLink } from "react-router-dom";


function MovieCard(props){
    return (
      <div className="movie-card-container">
        <NavLink to={`/movie/${props.id}`}>
       

          <div
            className="movie-poster"
            style={{
              backgroundImage:
                `url(${props.url})`,
            }}
          >
            <div className="movie-info">
              <a className="title">
                {props.title}
              </a>
              <p className="year">
                {props.year}
              </p>
              <p className="genre">
                {props.genre}
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    );
}
export default MovieCard