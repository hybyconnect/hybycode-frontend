import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r bg-gradient-to-r from-[#ffa31a] via-[#ffd633] to-[#ffa31a] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:h-[190px] grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Info</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms & Policy</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Portfolio</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Photographer</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Video Editor</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Designer</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Creator</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Templates</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">E-Commerce</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Food Delivery</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Agency</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Real Estate</a></li>
          </ul>
        </div>

        <div className="space-y-4 ">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="text-sm text-gray-600">Subscribe To Our For A Weekly Dose Of News, Updates, Helpful Tips And Exclusive Offers.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
            <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-md px-4 py-2 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto" />
            <button className="bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-700">Subscribe</button>
          </div>
          <div className="flex space-x-6  justify-center md:justify-start">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;