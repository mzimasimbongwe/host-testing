import React from "react";
import { bgvideo, heroImg, student } from "../../assets";

const Hero = () => {
  return (
    <div className="video relative h-screen ">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={bgvideo}
          autoPlay
          loop
          muted
          className="object-cover w-full h-full "
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="absolute w-full inset-0 py-20 text-white ">
        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-10 max-w-[540px]">
          <div className="flex flex-col justify-start gap-4">
            <h1 className="py-2 text-4xl text-[#9FF3C1] font-bold">
              Bridging Futures, Creating Opportunities
            </h1>
            <p className="md:leading-[44px] py-10 md:text-2xl text-1xl font-medium">
              <span className="text-[#9FF3C1]">Welcome to EduConnect,</span>{" "}
              where we are more than just an educational platform; <br></br>
              We are architects of futures and creators of opportunities. Our
              commitment is to bridge the gap between students and their dreams,
              educators and their goals, and institutions and the innovative
              future of learning.
            </p>
          </div>
          <img src={heroImg} className="rounded-lg h-[auto] " />
        </div>
        <div>
          <button className="border border-[#47DEFF] flex jusify-between items-center px-2 py-2 rounded-md bg-black text-white gap-2 font-bold">
            <img src={student} />
            Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
