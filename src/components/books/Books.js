import React, {useEffect} from "react";
import "./Book.css";

import BookCard from "./BookCard";

import { Helmet } from "react-helmet";


function Books(props) {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="books-container">
      <Helmet>
        <title>DARKER | Books</title>
      </Helmet>
      <div className="container">
        <h1 className="heading">BOOKS</h1>
        <div className="books-content">
          {props.books.map((e) => (
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
