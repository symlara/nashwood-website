import React from "react";
import { images } from "../../constants";

import "../AboutUs/AboutUs.css";

const RealEstate = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="real-estate"
    >
      {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.entertainment} alt="entertainment logo" />
    </div> */}
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about real-estate">
          <h1 className=" text-white flex__center headtext__cormorant">
            <span className="">Real Estate</span>
          </h1>
          <p className="p__raleway flex-wrap" style={{ margin: "2rem 0" }}>
            Nashwood owns a range of commercial and residential property
            interests to include: The Shelbyville-Times Gazette Building, U.S.
            Bank Building, The Tolley House, Cedar Ridge Farm, as well as luxury
            residential real estate interests throughout the country.
          </p>
          {/* <button type="button" className="custom__button">
          Know More
        </button> */}
        </div>
        <div className="app__aboutus-content_knife flex__center">
          {/* <img src={images.knife} alt="about_knife" /> */}
        </div>
        <div className="app__aboutus-content_history">
          {/* <h1 className="headtext__cormorant">Our History</h1> */}
          {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
          {/* <img
          src={images.entertainment}
          className="w-[50%] h-[50%] rounded-xl xl:ml-[150px]"
        /> */}
          <img
            src={images.realestate}
            alt="real-estate-logo"
            className="w-[70%] h-[70%]"
          />

          {/* <p className="p__raleway">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p> */}
          {/* <button type="button" className="custom__button">
          Know More
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
