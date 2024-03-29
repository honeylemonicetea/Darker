import React, {useState} from "react";
import './Menu.css'

 
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";


function Menu(){
    let [closed, setClosed] = useState('closed')


    let toggleMenu = () =>{
      if (closed=='closed'){
        setClosed('opened')
      }
      else if (closed=='opened'){
        setClosed('closed')
      }
    }
    return (
      <div className="menu-wrapper">
        <div className="menu-container">
          <div className="menu">
            <Link to="/">
              <span className="logo">
                 darker
              </span>
             
            </Link>
          </div>
          <div className="links-container">
            <Link to="/">Home</Link>
            <Link to="/images">Images</Link>
            <Link to="/fashion">Fashion</Link>
            <Link to="/music">Music</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/books">Books</Link>
          </div>
        </div>
        <div className="burger-container">
          <div className={`burger-menu-button burger-${closed}`}>
            <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
            <span className="logo">darker</span>
          </div>
          <div className={`burger-inner ${closed}`}>
            <div className="burger-menu">
              <FontAwesomeIcon
                icon={faXmark}
                className="burger-close-btn"
                onClick={toggleMenu}
              />
              <Link to="/">
                
              </Link>
            </div>
            <div className="links-burger">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/images" onClick={toggleMenu}>
                Images
              </Link>
              <Link to="/fashion" onClick={toggleMenu}>
                Fashion
              </Link>
              <Link to="/music" onClick={toggleMenu}>
                Music
              </Link>
              <Link to="/movies" onClick={toggleMenu}>
                Movies
              </Link>
              <Link to="/books" onClick={toggleMenu}>
                Books
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Menu