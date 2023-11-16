import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, admin, student, hamburgerMenu, closeMenu } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  const handleAdminClick = () => {
    window.open("/loginadmin", "_blank");
  };

  const handleStudentClick = () => {
    window.open("/login", "_blank");
  };

  return (
    <div className="w-full h-[100px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[540px] m-auto w-full h-full flex justify-between items-center">
        <Link to="/">
          <img src={logo} className="h-[50px]" />
        </Link>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <Link to="/">
              <li>Home</li>{" "}
            </Link>
            <Link to="/studyw">
              <li>Study With Us</li>
            </Link>
            <Link to="/aboutus">
              <li>About Us</li>
            </Link>
            <Link to="/community">
              <li>Community</li>
            </Link>
            <Link to="/media">
              <li>Media</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex gap-5 h-[50px]">
          <button
            onClick={handleAdminClick}
            className="flex justify-between items-center w-full px-3 py-4 rounded-md bg-black text-white gap-2 font-bold"
          >
            <img src={admin} />
            Admin
          </button>

          <button
            onClick={handleStudentClick}
            className="flex justify-between items-center w-full px-4 py-4 rounded-md bg-black text-white gap-2 font-bold"
          >
            <img src={student} />
            Student
          </button>
        </div>
        <div className="md:hidden " onClick={handleClick}>
          <img src={toggle ? closeMenu : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-7 bg-white w-full px-8 md:hidden flex justify-center items-center"
            : "hidden"
        }
      >
        <ul>
          <Link to="/">
            <li>Home</li>{" "}
          </Link>
          <Link to="/studyw">
            <li>Study With Us</li>
          </Link>
          <Link to="/aboutus">
            <li>About Us</li>
          </Link>
          <Link to="/community">
            <li>Community</li>
          </Link>
          <Link to="/media">
            <li>Media</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <div className="flex flex-col my-4 gap-4 ">
            <button className="border border-[#47DEFF] flex jusify-between items-center px-2 py-2 rounded-md bg-black text-white gap-2 font-bold">
              <img src={admin} />
              Admin
            </button>
            <button className="border border-[#47DEFF] flex jusify-between items-center px-2 py-2 rounded-md bg-black text-white gap-2 font-bold">
              <img src={student} />
              Student
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
