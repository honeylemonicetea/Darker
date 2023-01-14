import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import './BookDetail.css'
import {NavLink} from 'react-router-dom'
import { Helmet } from "react-helmet";

function BookDetail(props){
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    let { id } = useParams();
   
    let book = props.books[id-1]
    
    return (
      <div className="container">
      <Helmet>
        <title>DARKER | {book.title}</title>
      </Helmet>
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