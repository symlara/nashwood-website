import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          <img src={images.nashwoodwatermark} alt="app logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {/* <li className="p__opensans">
          <a href="#home">Home</a>
        </li> */}
        <li className="p__raleway">
          <a href="#entertainment">Entertainment</a>
        </li>
        <li className="p__raleway">
          <a href="#hospitality">Hospitality </a>
        </li>
        <li className="p__raleway">
          <a href="#humble-baron">Humble Baron</a>
        </li>
        <li className="p__raleway">
          <a href="#tolley-house">The Tolley House</a>
        </li>
        <li className="p__raleway">
          <a id="real-estate">Real Estate</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        {/* <a href="#login" className="p__raleway">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__raleway">
          Book Table
        </a> */}
      </div>

      {/* smallscreen */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Entertainment</a>
              </li>
              <li className="p__opensans">
                <a href="#hospitality">Hospitality </a>
              </li>
              <li className="p__opensans">
                <a href="#humble-baron">Humble Baron</a>
              </li>
              <li className="p__opensans">
                <a href="#tolley-house">The Tolley House</a>
              </li>
              <li className="p__opensans">
                <a id="real-estate">Real Estate</a>{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
