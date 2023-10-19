import React from "react";
import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <h1 className="p__raleway text-3xl">{title}</h1>
    {/* <img src={images.spoon} alt="spoon" className="spoon__img" /> */}
  </div>
);

export default SubHeading;
