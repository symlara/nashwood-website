import React from "react";
import { images } from "../../constants";

import "../AboutUs/AboutUs.css";

const Hospitality = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="hospitality"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.entertainment} alt="entertainment logo" />
    </div> */}
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Hospitality</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p
          className="p__raleway flex-wrap"
          style={{ margin: "2rem 0", marginLeft: "-30px" }}
        >
          Esse incididunt exercitation fugiat ullamco sunt aute ut tempor enim
          aliquip enim id. Reprehenderit voluptate cillum consequat ex ut ex
          quis consectetur excepteur tempor deserunt labore. Ut quis dolor
          occaecat deserunt pariatur cupidatat sunt exercitation pariatur
          commodo. Ut excepteur excepteur Lorem enim anim aliqua ex nostrud et
          ipsum consequat minim adipisicing. Esse ullamco aute velit aliquip in
          in voluptate minim in mollit.
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
          alt="entertainment logo"
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

export default Hospitality;
