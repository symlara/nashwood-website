import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Nashwood, Inc." />
      {/* <h1 className="app__header-h1">The Key to Fine Dining</h1> */}
      <p className="p__raleway" style={{ margin: "2rem 0" }}>
        Nashwood, Inc. is a real estate, hospitality, and entertainment company
        headquartered in Bedford County Tennessee. Nashwood’s span of work
        includes ownership and operation of a diverse real estate portfolio,
        management of enterprises in the food and beverage sector, and a wide
        range of entertainment interests – ranging from content production,
        artist development, and physical production services.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img gap-2">
      {/* <img src={images.welcome} alt="header img" /> */}
      <img src={images.entertainment} alt="header img" />
      <img src={images.hospitality} alt="header img" />
    </div>
    <div className="app__wrapper_img mt-[296px]">
      <img src={images.production} alt="header img" className="mr-[700px]" />
    </div>
  </div>
);

export default Header;
