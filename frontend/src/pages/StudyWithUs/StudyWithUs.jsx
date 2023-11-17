
import {heroImg } from "../../assets";

export const StudyWithUs = () => {
  return (
    <div className="flex flex-col items-center bg-[#dcf3ca]">
      <div className="flex flex-col items-start gap-6">
        <div className="font-h4 text-black">
          Study With Us
        </div>
        <p className="max-w-[1400px] text-black">
          Embark on a transformative educational journey with EduConnect. Tailored for students in grades 8 to 12, this initiative is your gateway to a dynamic and enriching learning experience.
        </p>
      </div>
      <div className="flex items-center gap-12">
        <div className="flex flex-col items-start gap-6">
          <div className="font-h4 text-black">
            Discover Your Educational Path
          </div>
          <p className="max-w-[600px] text-black">
            Our programs are crafted to guide students through each crucial stage of their academic journey. From the foundational exploration in Grade 8 to the specialized studies in Grade 12, EduConnect offers a diverse range of programs tailored to individual interests and ambitions.
          </p>
        </div>
        <div className="w-[720px] h-[442px]">
          <img className="w-full h-full object-cover" alt="Rectangle" src={heroImg} />
        </div>
      </div>
      <div className="flex flex-col items-start gap-6">
        <div className="font-h4 text-black">
          Streamlined Admission Process
        </div>
        <p className="max-w-[1370px] text-black">
          At EduConnect, we understand the importance of a smooth transition into your educational path. Our user-friendly online application process ensures that joining our vibrant community is straightforward. Explore admission requirements, discover deadlines, and take the essential steps to become a part of EduConnect.
        </p>
      </div>
      <div className="flex flex-col items-start gap-6">
        <div className="font-h4 text-black">
          Empowering Digital Literacy Skills
        </div>
        <p className="max-w-[1412px] text-black">
          Beyond traditional academics, EduConnect places a strong emphasis on equipping students with essential digital literacy skills. In an ever-evolving digital landscape, our programs go beyond textbooks, preparing learners for the challenges and opportunities of the future.
        </p>
      </div>
      <div className="w-[1390px] h-[664px]">
        <img className="w-full h-full object-cover" alt="Rectangle" src={heroImg} />
      </div>
      <div className="flex flex-col items-start gap-6">
        <p className="font-h4 text-black">
          Comprehensive Brochures for Each Grade
        </p>
        <p className="max-w-[1390px] text-black">
          Dive deeper into the details of each grade with our comprehensive brochures. These guides provide in-depth information on admission requirements, program structures, and the unique offerings available for students in every grade. Click here to <span className="text-[#307bec] underline">download brochures</span>
        </p>
      </div>
      <div className="flex flex-col items-start gap-6">
        <p className="font-h4 text-black">
          Immerse Yourself in Our Community
        </p>
        <p className="max-w-[1390px] text-black">
          Education is not just about classes; it's about building connections and fostering growth. At EduConnect, you'll find a vibrant community of learners. Engage in extracurricular activities, connect with fellow students, and be part of an environment that encourages collaboration and success.
        </p>
      </div>
      <div className="flex flex-col items-start gap-6">
        <p className="max-w-[1390px] text-black">
          Join us at EduConnect, where education meets innovation. Your journey towards a brighter future starts here.
        </p>
        <p className="whitespace-nowrap">
          <span className="text-black">Click here to </span>
          <span className="text-[#307bec] underline">apply</span>
        </p>
        <p className="whitespace-nowrap">
          <span className="text-black">Click here to view </span>
          <span className="text-[#307bec] underline">application status</span>
        </p>
      </div>
    </div>
  );
};
export default StudyWithUs;