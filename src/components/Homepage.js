import React from "react";
import PictureGrid from './HOME/PictureGrid'
import Banner from "./HOME/Banner";
import Article from './HOME/Article'
import Footer from './HOME/Footer'
import Header from "./HOME/Header";
import {Helmet} from 'react-helmet'

// TESTING
import UpBTN from "./GlobalComponents/UpBTN";

function HomePage(){
    return (
    <div className="home-page">
        <Helmet>
          <title>DARKER | HOME </title>
        </Helmet>
      
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
