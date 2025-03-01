import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const RegisterPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ffad33] via-[#ffd633] to-[#ffb84d] relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[90%] max-w-md bg-gradient-to-r from-[#ffcc80] to-[#ffcc80] p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold text-center mb-4">Create New Account</h2>

            <div className="grid grid-cols-2 gap-2">
              <input type="text" placeholder="Name" className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Surname" className="w-full p-2 border rounded-md" />
            </div>
            <input type="email" placeholder="Email" className="w-full p-2 border rounded-md mt-2" />
            <input type="text" placeholder="Referral Code (Optional)" className="w-full p-2 border rounded-md mt-2" />
            <input type="password" placeholder="Create Password" className="w-full p-2 border rounded-md mt-2" />

            <button className="w-full bg-black text-white py-2 mt-4 rounded-md font-semibold hover:opacity-80">Continue With Email</button>

            <div className="text-center text-sm mt-4">
              <Link to="/" className="text-black font-semibold">
                Back To Home
              </Link>
              <span className="mx-2">|</span>
              <Link to="/login" className="text-black font-semibold">
                Already Have an Account? Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;