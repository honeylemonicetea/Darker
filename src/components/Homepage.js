import React from "react";
import Menu from './HOME/Menu'
import PictureGrid from './HOME/PictureGrid'
import Banner from "./HOME/Banner";
import Article from './HOME/Article'
import Footer from './HOME/Footer'

import Header from "./HOME/Header";

function HomePage(){
    return (
    <div className="home-page">
      
        <article>
          <Header/>
          <PictureGrid />
          <Banner />
          <Article />
          <Footer />
        </article>
    </div>
    );
}

export default HomePage
