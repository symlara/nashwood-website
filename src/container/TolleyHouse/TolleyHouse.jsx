import React from "react";
import { images } from "../../constants";

import "../AboutUs/AboutUs.css";

const TolleyHouse = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="tolley-house"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.entertainment} alt="entertainment logo" />
    </div> */}
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className=" text-white flex__center headtext__cormorant tolley-house">
          <span className="">Tolley House</span>
        </h1>
        <p className="p__raleway flex-wrap" style={{ margin: "2rem 0" }}>
          The Tolley House is the most storied Bed & Breakfast in Lynchburg,
          Tennessee. One of historic Lynchburg’s oldest antebellum homes, Tolley
          House, a boutique inn, was once owned by Lem Motlow and Lem Tolley,
          the former master distiller for Jack Daniel’s Distillery. The Tolley
          House is just a mile from Lynchburg’s town square, where you can visit
          shops and take in the beauty of the historic town.
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
          src={images.hospitality}
          alt="tolley-house-logo"
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

export default TolleyHouse;
