import React from "react";
import { Link } from "react-router-dom";

import bannerImg from "../../assets/header01.png";

const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase">EXCLUSIVE DEALS ON</h4>
        <h1>Women's Style</h1>
        <p>
          Step into the spotlight with our handpicked collection of women's
          fashion. From elegant outfits to trendy accessories, find everything
          you need to elevate your wardrobe and celebrate every moment in style.
        </p>
        <button className="btn">
          <Link to="/shop">EXPLORE NOW</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
