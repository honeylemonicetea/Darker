import React from "react";
import './BookCard.css'
import { NavLink } from "react-router-dom";

function BookCard(props){
    return (
      <div className="book-card-container">
         <NavLink to={`/book/${props.id}`}>
          <div className="book-card" style={{
          backgroundImage: `url(${props.url})`,
        }}
          > 
       
          <div className="book-info">
            <p className="book-card-title">
                {props.title}
            </p>
            <p className="author">
                {props.author}
            </p>
          </div>
       
        </div>
      </NavLink>
      </div>
     
    );
}

export default BookCard