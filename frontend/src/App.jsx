import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hero, Navbar } from "./components";
import AboutUs from "./components/Landing.Page/About";
import StudyWithUs from "./components/Landing.Page/Study.Page";
import LatestUpdates from "./components/Landing.Page/Updates";
import Login from "./pages/authentication/Login"; // Import the Login component
import Signup from "./pages/authentication/Signup"; // Import the Signup component

function LandingApp() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/study" element={<StudyWithUs />} />
        <Route path="/updates" element={<LatestUpdates />} />
        <Route path="/login" element={<Login />} /> {/* Add the Login route */}
        <Route path="/signup" element={<Signup />} /> {/* Add the Sign Up route */}
        {/* Add more routes for the landing page as needed */}
      </Routes>
    </div>
  );
}

export default LandingApp;
