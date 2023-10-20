import React from "react";

import {
  AboutUs,
  Hospitality,
  FindUs,
  Footer,
  Gallery,
  Header,
  HumbleBaron,
  Laurels,
  Entertainment,
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
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
