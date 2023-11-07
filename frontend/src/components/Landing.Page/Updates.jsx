import React from "react";
import { updates, learn } from "../../assets";
import MediaScreen from "./media";

const LatestUpdates = () => {
  return (
    <div className="w-full bg-[#DCF3CA] py-24 py-6 md:py-24">
      <div className="md:max-w-[1480px] max-w-[540px] mx-auto w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="md:w-full md:pr-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Latest Updates
          </h2>
          <p className="text-lg md:text-xl mb-4">
            Stay informed about EduConnect's latest activities, workshops, and
            media coverage. We're constantly on the move, spreading the word
            about the transformative power of education.
          </p>
          <div className="md:flex md:items-start">
            <div className="md:w-1/2 md:mr-20">
              <img
                src={updates}
                alt="Event Images"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-1/2 ">
              <div className="bg-blue-200 rounded-lg p-4 mb-4">
                <p className="text-lg font-bold mb-2 ">
                  Visit to Ngobozana School at Flagstaff (20/02/2023):
                </p>
                <p>
                  EduConnect engaged with students and educators at Ngobozana
                  School in Flagstaff, hosting a workshop and presenting our
                  platform, and discussing the benefits of digital learning.
                </p>
              </div>
              <div className="bg-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-lg font-bold mb-2">
                  Meeting with Local Authorities in Lusikisiki (30/09/2023):
                </p>
                <p>
                  We're collaborating with local authorities in Lusikisiki to
                  ensure that every learner in the area can access quality
                  education.
                </p>
              </div>
              <div className="bg-green-200 rounded-lg p-4">
                <p className="text-lg font-bold mb-2">
                  Community Hall Session at Flagstaff Community Hall
                  (28/09/2023):
                </p>
                <p>
                  Join us at Flagstaff Community Hall, where we'll connect with
                  the local community, answer questions, and showcase the
                  advantages of EduConnect.
                </p>
              </div>
              <div className="py-10">
                <button className="border border-[#47DEFF] flex items-center px-6 py-2 rounded-md bg-black text-white text-lg lg:text-xl font-semibold gap-2 transition transform hover:bg-[#47DEFF] animate-pulse hover:scale-105">
                  Learn More!
                  <img src={learn} alt="Apply Icon" />
                </button>
              </div>
            </div>
          </div>
          <MediaScreen />
        </div>
      </div>
    </div>
  );
};
export default LatestUpdates;
