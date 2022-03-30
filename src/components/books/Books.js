import React, { useState, useEffect } from "react";
import "./Book.css";

import { NavLink } from "react-router-dom";
import BookCard from "./BookCard";
import BookDetail from "./BookDetail";


function Books() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  let [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://morning-ravine-89031.herokuapp.com/dark-aeth")
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setBooks(res.books);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className="books-container">
      <div className="container">
        <h1>BOOKS</h1>
        <div className="books-content">
          {books.map((e) => (
            <BookCard
              url={e.coverURL}
              title={e.title}
              year={e.year}
              genre={e.genre}
              author={e.author}
              summary={e.summary}
              id={e.id}
            />
          ))}
        </div>
      </div>
 
    </div>
  );
}

export default Books;
