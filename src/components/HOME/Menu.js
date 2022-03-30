import React, {useState} from "react";
import './Menu.css'

import Logo from '../../img/logo.jpg'
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
              <img src={Logo} alt="" className="logo" />
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
          </div>
          <div className={`burger-inner ${closed}`}>
            <div className="burger-menu">
              <FontAwesomeIcon icon={faXmark} className='burger-close-btn' onClick={toggleMenu} />
              <Link to="/">
                <img src={Logo} alt="" className="logo" />
              </Link>
            </div>
            <div className="links-burger">
              <Link to="/">Home</Link>
              <Link to="/images">Images</Link>
              <Link to="/fashion">Fashion</Link>
              <Link to="/music">Music</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/books">Books</Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Menu