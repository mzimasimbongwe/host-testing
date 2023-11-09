import React from "react";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa"; // Import icons from React Icons
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const HandleContact = () => {
    navigate("/contact");
  };

  return (
    <footer className="bg-[#F5F5F5] text-black py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            <FaPhone /> +27 (78) 456-7890
          </p>
          <p>
            <FaEnvelope /> info@educonnect.com
          </p>
          <button
            onClick={HandleContact}
            className="bg-blue-600 text-black px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Contact
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Important Links</h2>
          <ul>
            <Link to="/apply">
              <li className="text-blue-400">Apply Now</li>
            </Link>
            <Link to="/status">
              <li className="text-blue-400">Check Status</li>
            </Link>
            <Link to="/prospectus">
              <li className="text-blue-400">Download Prospectus</li>
            </Link>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Connect With Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-3xl text-blue-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-3xl text-blue-400">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Location</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
