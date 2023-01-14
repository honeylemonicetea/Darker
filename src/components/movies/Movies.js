import React, {useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import './Movies.css'
import { Helmet } from "react-helmet";

function Movies(props) {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
 

  return (
    <div className="movies-container">
      <Helmet>
        <title>DARKER | Movies</title>
      </Helmet>
      <div className="container">  
      <h1 className="heading">Movies</h1>
        <div className="movies-grid">
          {props.movies.map((e)=>(
              <MovieCard url={e.poster} title={e.title} year = {e.year} genre = {e.genre} id={e.id} />
          )
          )}
        </div>
      </div>
    </div>
  );
}

export default Movies;
