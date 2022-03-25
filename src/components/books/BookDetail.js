import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import './BookDetail.css'
import {NavLink} from 'react-router-dom'
import Spinner from "../GlobalComponents/Spinner";

function BookDetail(){
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    let { id } = useParams();
    console.log(id);
    let [book, setBook] = useState([]);
    let [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
      fetch("https://morning-ravine-89031.herokuapp.com/dark-aeth")
        .then((res) => res.json())
        .then(
          (res) => {
            setIsLoaded(true);
            let all = res.books;
            let books = all.filter((item) => item.id == id);
            setBook(books[0]);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, []);
    console.log(book)

    if (isLoaded === false) {
      return <Spinner />;
    }
    return (
      <div className="container">
        <NavLink to="/books" className="back-arrow">
          ← back
        </NavLink>
        <div className="book-detail">
          <div className="book-det-left">
            <img src={book.coverURL} alt="" />
          </div>
          <div className="book-det-right">
            <p className="book-det-title">{book.title}</p>
            <hr className="divider" />
            <p>
              <span className="bolder">Written by </span>
              {book.author}
            </p>
            <p>
              <span className="bolder">Year: </span>
              {book.year}
            </p>
            <p>
              <span className="bolder">Summary</span> <br />
              {book.summary}
            </p>
          </div>
        </div>
      </div>
    );
}

export default BookDetail