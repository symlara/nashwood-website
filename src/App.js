import React from "react";

import {
  AboutUs,
  Hospitality,
  FindUs,
  Footer,
  Gallery,
  Header,
  HumbleBaron,
  TolleyHouse,
  Entertainment,
  RealEstate,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Entertainment />
    <Hospitality />
    <HumbleBaron />
    <TolleyHouse />
    <RealEstate />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
