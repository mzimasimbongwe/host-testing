import React from "react";
import { Hero, Navbar } from "./components";
import AboutUs from "./components/Landing.Page/About";
import StudyWithUs from "./components/Landing.Page/Study.Page";
import LatestUpdates from "./components/Landing.Page/Updates";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <StudyWithUs />
      <LatestUpdates />
    </div>
  );
};

export default App;
