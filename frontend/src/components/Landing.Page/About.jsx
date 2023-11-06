import React from "react";
import { learn } from "../../assets";

const AboutUs = () => {
  return (
    <div className="w-full bg-[#DCF3CA] py-24 py-6 md:py-24 ">
      <div className="md:max-w-[1480px] max-w-[540px] mx-auto w-full h-full flex flex-col md:flex-row justify-center  md:justify-between items-center">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Overview</h2>
          <p className="text-lg lg:text-xl text-black ">
            EduConnect, founded in 2023, is more than an educational platform;
            it's a visionary movement shaping the future of learning. Discover
            who we are, our mission, and the global community we're building.
          </p>
          <div className="py-10">
            <button className="border border-[#47DEFF] flex items-center px-6 py-2 rounded-md bg-black text-white text-lg lg:text-xl font-semibold gap-2 transition transform hover:bg-[#47DEFF] animate-pulse hover:scale-105">
              Learn More!
              <img src={learn} alt="Apply Icon" />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 flex space-x-4">
          <div className="w-1/3 bg-blue-200 p-4 rounded-lg">
            <h3 className="text-xl lg:text-2xl font-semibold">Learners</h3>
            <p className="text-2xl lg:text-4xl font-bold">15,000+</p>
          </div>
          <div className="w-1/3 bg-green-200 p-4 rounded-lg">
            <h3 className="text-xl lg:text-2xl font-semibold">Teachers</h3>
            <p className="text-2xl lg:text-4xl font-bold">2,000+</p>
          </div>
          <div className="w-1/3 bg-yellow-200 p-4 rounded-lg">
            <h3 className="text-xl lg:text-2xl font-semibold">
              Community Members
            </h3>
            <p className="text-2xl lg:text-4xl font-bold">10,000+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
