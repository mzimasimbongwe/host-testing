import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Hero, Navbar } from "./components";
import AboutUs from "./components/Landing.Page/About";
import StudyWithUs from "./components/Landing.Page/Study.Page";
import LatestUpdates from "./components/Landing.Page/Updates";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/SignUp";
import Status from "./pages/User_Profile/Status";
import Apply from "./pages/authentication/Apply";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/study" element={<StudyWithUs />} />
        <Route path="/updates" element={<LatestUpdates />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/status" element={<Status />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </div>
  );
}

export default App;
