import React, {useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import './Movies.css'
import MovieDetail from "./MovieDetail";
import {NavLink} from 'react-router-dom'

function Movies() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  let [movies, setMovies] = useState([])
   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://morning-ravine-89031.herokuapp.com/dark-aeth")
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setMovies(res.movies);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log(movies)
  return (
    <div className="movies-container">
      <div className="container">  
      <h1>Movies</h1>
        <div className="movies-grid">
        
          {movies.map((e)=>(
            
              <MovieCard url={e.poster} title={e.title} year = {e.year} genre = {e.genre} id={e.id} />
           
          )
          )}
        </div>
         
      </div>
       
    </div>
  );
}

export default Movies;
