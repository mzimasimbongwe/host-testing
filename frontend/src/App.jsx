import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Hero, Navbar } from "./components";
import AboutUs from "./components/Landing.Page/About";
import StudyWithUs from "./components/Landing.Page/Study.Page";
import LatestUpdates from "./components/Landing.Page/Updates";
import Media from "./pages/Media/Media";
import School from "./pages/StudyWithUs/StudyWithUs";
import Contact from "./pages/Contact/Contact";
import Prospector from "./pages/Prospector/Prospector";
import Admin from "./pages/Admin/Admin";
import ForgotPassword from "./pages/Password/Reset";
import ResetPassword from "./pages/Password/updatePassword";
import LoginAdmin from "./pages/Admin/LoginInAdmin";
import ApplicationForm from "./pages/Application/ApplicationStudent";
import Submit from "./pages/Application/Submit";
import Mission from "./pages/About/About";
import Comm from "./pages/Community/Community";
import StatusStudent from "./pages/User_Profile/Status";
import LoginS from "./pages/Application/Login";
import SignupS from "./pages/Application/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/study" element={<StudyWithUs />} />
        <Route path="/updates" element={<LatestUpdates />} />
        <Route path="/login" element={<LoginS />} />
        <Route path="/signup" element={<SignupS />} />
        <Route path="/status" element={<StatusStudent />} />
        <Route path="/prospectus" element={<Prospector />} />
        <Route path="/aboutus" element={<Mission />} />
        <Route path="/community" element={<Comm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/media" element={<Media />} />
        <Route path="/studyw" element={<School />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reset" element={<ForgotPassword />} />
        <Route path="/password" element={<ResetPassword />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/applystudent" element={<ApplicationForm />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </div>
  );
}

export default App;
