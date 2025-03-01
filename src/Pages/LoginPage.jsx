import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const LoginPage = () => {
  return (
    <>
    <div className="sticky top-0 z-10">
      <Navbar />
    </div>
      <div className="min-h-screen p-2 flex items-center justify-center bg-gradient-to-r from-[#ffad33] via-[#ffd633] to-[#ffb84d] relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[90%] max-w-md bg-gradient-to-r from-[#ffcc80] to-[#ffcc80] p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold text-center mb-4">Sign In to Your Account</h2>

            <input
              type="email"
              placeholder="Email"

              className="w-full p-2 border rounded-md mt-2"
            />
            <input
              type="password"
              placeholder="Password"
              
              className="w-full p-2 border rounded-md mt-2"
            />

            <button className="w-full bg-black text-white py-2 mt-4 rounded-md font-semibold hover:opacity-80">
              Continue
            </button>

            <div className="text-center text-sm mt-4">
              <Link to="/" className="text-black">
                Back To Home
              </Link>
              <span className="mx-2">|</span>
              <Link to="/register" className="text-black">
                Don't Have an Account? Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;