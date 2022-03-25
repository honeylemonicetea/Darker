import React, {useEffect, useState} from "react";
import './MovieDetail.css'
import { useParams, NavLink } from "react-router-dom";
import Spinner from "../GlobalComponents/Spinner";

function MovieDetail(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   let { id } = useParams();
   console.log(id)
  let [movie, setMovie] = useState([])
  let [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null);
   useEffect(()=>{
     fetch("https://morning-ravine-89031.herokuapp.com/dark-aeth")
       .then((res) => res.json())
       .then(
         (res) => {
           setIsLoaded(true);
           let all = res.movies
           let movie = all.filter(item => item.id == id)
           setMovie(movie[0])
         },
         (error) => {
           setIsLoaded(true);
           setError(error);
         }
       );
   }, [])

    if (isLoaded===false){
      return(
        <Spinner/>
      )
    }
    
    return (
      <div className="container">
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
            <div className="still-gallery">
              <img src={movie.still1} alt="" />
              <img src={movie.still2} alt="" />
              <img src={movie.still3} alt="" />
            </div>
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