import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "../Chef/Chef.css";

const HumbleBaron = () => (
  <div className="app__bg app__wrapper section__padding" id="humble-baron">
    <div className="app__aboutus-content_history">
      <img
        src={images.chefggarvin}
        alt="chef"
        className="w-[50%] h-[50%] rounded-xl"
      />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">Humble Baron</h1>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
          <p className="p__raleway flex-wrap" style={{ margin: "2rem 0" }}>
            Humble Baron is Middle Tennessee’s newest restaurant, bar and
            entertainment venue, located on the property of the iconic Nearest
            Green Distillery in Shelbyville, Tennessee. Home to the World’s
            Longest Bar at 518-feet-long, Humble Baron is brought to life by
            co-founder of Uncle Nearest Premium Whiskey, Keith Weaver. A
            destination for locals and visitors alike, the venue offers elevated
            Southern fare alongside craft whiskey cocktails and will showcase
            live music several nights a week. Humble Baron is a gathering place
            where everyone has a seat at the table, bringing people together
            over premium spirits, exceptional food and lively music.
          </p>
          {/* <button type="button" className="custom__button">
          Know More
        </button> */}
        </div>

        <div className="app__aboutus-content_history">
          {/* <h1 className="headtext__cormorant">Our History</h1> */}
          {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
          {/* humble baron logo HERE
          <img
            src={images.keithweaver}
            className="w-[50%] h-[50%] rounded-xl xl:ml-[150px]"
          /> */}
          {/* <p className="p__raleway">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p> */}
          {/* <button type="button" className="custom__button">
          Know More
        </button> */}
          <img
            src={images.oldfashioned}
            className="w-[70%] h-[70%] rounded-xl xl:ml-[10px]"
          />{" "}
        </div>
      </div>
      {/* <h1 className="headtext__cormorant">What we believe in</h1> */}

      {/* <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="p__opensans">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div> */}

      {/* <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div> */}
    </div>
  </div>
);

export default HumbleBaron;
