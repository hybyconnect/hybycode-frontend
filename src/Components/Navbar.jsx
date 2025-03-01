import React, { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Simulate user login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate user logout
  };

  return (
    <div className="w-full">
      <nav className="bg-[#ffcc80] bg-opacity-30 w-full backdrop-blur-lg flex items-center justify-between text-black relative md:h-[75px] sm:h-24 w-full mx-auto shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center flex-wrap w-full">
          {/* Logo */}
          <div className=" md:pl-10 flex items-center">
            <Link to="/">
              <img src={assets.logo} alt="Logo" className="h-16 sm:h-[70px]" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-sm sm:text-base lg:text-lg">
            <li className="relative group font-semibold">
              <Link to="/" onClick={handleLinkClick}>
                Dashboard
                <span className="absolute rounded-full left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li className="relative group font-semibold">
              <Link to="/projects" onClick={handleLinkClick}>
                Projects
                <span className="absolute rounded-full left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li className="relative group font-semibold">
              <Link to="/contactus" onClick={handleLinkClick}>
                Contact Us
                <span className="absolute rounded-full left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li className="relative group font-semibold">
              <Link to="/aboutus" onClick={handleLinkClick}>
                About Us
                <span className="absolute rounded-full left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
          </ul>
          <div className="relative">
            <input
              type="search"
              placeholder="Search Here"
              className=" py-2 placeholder:text-gray-400 placeholder:text-sm placeholder:pl-4 bg-[#ffe0b3] border border-yellow-200 rounded-xl" // Added pr-10 to make space for the search icon
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Conditional Rendering for Login Button or Profile Picture */}
          {isLoggedIn ? (
            <div className="hidden md:block relative">
              {/* <img
                src={assets.profilePic} // Replace with your profile picture asset
                alt="Profile"
                className="h-10 w-10 rounded-full cursor-pointer"
                onClick={handleLogout}
              /> */}
              <Link to={"/profile"} className="bg-yellow-400 px-4 py-2 font-bold rounded-full">User Dashboard</Link>

            </div>
          ) : (
            <button
              className="hidden md:block bg-black text-white px-6 py-3 rounded-full font-semibold tracking-wide hover:bg-[#ffdb4d] hover:text-black transition-all"
              onClick={handleLogin}
            >
              Log In
            </button>
          )}

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden text-black focus:outline-none relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8 transition-transform duration-300"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  className="rotate-45 transition-all duration-300 transform"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                  className="transition-all duration-300"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="absolute top-[100%] left-0 w-full bg-[#fff0b3] text-black flex flex-col items-center space-y-6 py-6 z-20 animate-slideIn">
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={handleLinkClick}
                  className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  onClick={handleLinkClick}
                  className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  onClick={handleLinkClick}
                  className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                >
                  About Us
                </Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <Link
                    to="/"
                    onClick={handleLogout}
                    className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                  >
                    Log Out
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    onClick={handleLinkClick}
                    className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                  >
                    Log In
                  </Link>
                )}
              </li>
              


            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;