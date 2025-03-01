import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const DashboardNav = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to={"/"} className="md:text-xl text-xs pl-10 md:pl-0 flex items-center h-[50px] font-semibold"> <IoMdArrowRoundBack />Back to Home</Link>
        <h1 className="md:text-2xl text-xl  font-bold">Dashboard</h1>
        <button className="flex items-center cursor-pointer font-semibold space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Log Out</span>
        </button>
      </div>
      <div className="bg-gradient-to-r from-gray-200 to-gray-200 h-1"></div>
    </div>
  );
};

export default DashboardNav;