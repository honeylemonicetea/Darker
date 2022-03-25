import React from "react";
import './Menu.css'

import Logo from '../../img/logo.jpg'
import {Link} from 'react-router-dom'

function Menu(){
    return (
      <div className="menu-container">
        <div className="menu">
          <Link to="/">
            <img src={Logo} alt="" className="logo" />
          </Link>
          <div className="links-container">
            <Link to="/">Home</Link>
            <Link to="/images">Images</Link>
            <Link to="/fashion">Fashion</Link>
            <Link to="/music">Music</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/books">Books</Link>
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
    );
}

export default Menu