import React from "react";
import { bgvideo, heroImg, apply } from "../../assets";
import AboutUs from "./About";
import StudyWithUs from "./Study.Page";
import LatestUpdates from "./Updates";
import Footer from "./Footer";

const Hero = () => {
  const isMobileScreen = window.innerWidth < 768;

  return (
    <div className="relative w-full h-screen bg-main py-6 md:py-24">
      <div className="md:max-w-[1480px] max-w-[540px] mx-auto w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="w-full md:w-1/2">
          <div className="absolute inset-0 overflow-hidden">
            <video
              src={bgvideo}
              autoPlay
              loop
              muted
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div
          className={`absolute w-full inset-0 text-white md:py-24 ${
            isMobileScreen ? "md:hidden" : ""
          }`}
        >
          <div className="md:max-w-[1480px]  mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-start gap-4">
              <h1 className="text-4xl text-main font-bold">
                Bridging Futures, Creating Opportunities
              </h1>
              <p className="md:leading-[44px] md:text-lg text-1xl font-medium mt-8 ">
                <span className="text-[#9FF3C1]">Welcome to EduConnect,</span>{" "}
                where we are more than just an educational platform; we are
                architects of futures and creators of opportunities. Our
                commitment is to bridge the gap between students and their
                dreams, educators and their goals, and institutions and the
                innovative future of learning. <br /> <br />
                At EduConnect, we believe in the transformative power of
                education. We are dedicated to breaking down barriers and
                ensuring that quality education is accessible to all. Join us in
                shaping a brighter future for learners worldwide
              </p>
            </div>
            {!isMobileScreen && (
              <img src={heroImg} className="w-full rounded-lg h-auto" />
            )}
          </div>
        </div>
      </div>

      <AboutUs />
      <StudyWithUs />
      <LatestUpdates />
      <Footer />
    </div>
  );
};

export default Hero;
