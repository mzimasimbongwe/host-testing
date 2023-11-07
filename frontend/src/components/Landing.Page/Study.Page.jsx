import React from "react";
import { study, learn } from "../../assets";
const StudyWithUs = () => {
  return (
    <div className="w-full bg-[#F5F5F5] py-24 py-6 md:py-24 ">
      <div className="md:max-w-[1480px] max-w-[540px] mx-auto w-full h-full flex flex-col md:flex-row justify-center  md:justify-between items-center">
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Study With Us</h2>
          <p className="text-lg md:text-xl mb-8">
            Embark on a transformative educational journey with EduConnect.
            Tailored for students in grades 8 to 12, this initiative is your
            gateway to a dynamic and enriching learning experience. Discover the
            opportunities that await you at EduConnect.
          </p>
          <p className="text-3xl md:text-md font-bold mb-4">
            Ready to explore the world of EduConnect?
          </p>
          <div className="py-10">
            <button className="border border-[#47DEFF] flex items-center px-6 py-2 rounded-md bg-black text-white text-lg lg:text-xl font-semibold gap-2 transition transform hover:bg-[#47DEFF] animate-pulse hover:scale-105">
              Learn More!
              <img src={learn} alt="Apply Icon" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src={study} alt="EduConnect" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default StudyWithUs;
