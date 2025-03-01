import React, { useState } from 'react';
import assets from '../assets/assets';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Checkout = () => {
  const [activeTab, setActiveTab] = useState('Credit Card');

  const renderPaymentForm = () => {
    switch (activeTab) {
      case 'Credit Card':
        return (
          <div className="mt-6">
            <h4 className="font-semibold">Pay Using Credit Card</h4>
            <input type="text" placeholder="Credit Card Number" defaultValue="3456 5566 6726 9987" className="mt-2 w-full p-2 border rounded" />
            <input type="text" placeholder="Name" defaultValue="Akash Solanki" className="mt-2 w-full p-2 border rounded" />
            <div className="flex space-x-4 mt-2">
              <input type="text" placeholder="Expiration Date" defaultValue="09/28" className="w-1/2 p-2 border rounded" />
              <input type="text" placeholder="CVV" defaultValue="256" className="w-1/2 p-2 border rounded" />
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" id="save-card" className="mr-2" />
              <label htmlFor="save-card">Save Card</label>
            </div>
            <button className="mt-4 w-full bg-black text-white p-2 rounded">Pay</button>
          </div>
        );
      case 'Net Banking':
        return (
          <div className="mt-6">
            <h4 className="font-semibold">Pay Using Net Banking</h4>
            <select className="mt-2 w-full p-2 border rounded">
              <option value="">Select Bank</option>
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
              <option value="bank3">Bank 3</option>
            </select>
            <button className="mt-4 w-full bg-black text-white p-2 rounded">Pay</button>
          </div>
        );
      case 'UPI':
        return (
          <div className="mt-6">
            <h4 className="font-semibold">Pay Using UPI</h4>
            <input type="text" placeholder="UPI ID" className="mt-2 w-full p-2 border rounded" />
            <button className="mt-4 w-full bg-black text-white p-2 rounded">Pay</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="min-h-screen bg-gradient-to-r from-[#ffad33] via-[#ffd633] to-[#ffb84d] p-4 sm:p-8">
        <div className="max-w-4xl mx-auto bg-yellow-100 p-4 sm:p-6 rounded-lg shadow-md">
          <header className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
            <h2 className="text-lg font-semibold">Checking Out</h2>
            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
              <div className="bg-gray-300 p-2 rounded-full" />
              <span>User 12212</span>
            </div>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold">Select A Payment Method</h3>
              <div className="flex flex-wrap space-x-4 my-4">
                <span
                  className={`font-bold cursor-pointer ${activeTab === 'Credit Card' ? 'text-black border-b-2 border-black' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('Credit Card')}
                >
                  Credit Card
                </span>
                <span
                  className={`cursor-pointer ${activeTab === 'Net Banking' ? 'text-black border-b-2 border-black' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('Net Banking')}
                >
                  Net Banking
                </span>
                <span
                  className={`cursor-pointer ${activeTab === 'UPI' ? 'text-black border-b-2 border-black' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('UPI')}
                >
                  UPI
                </span>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-300 p-4 rounded-md">**** **** **** 7689 | 09/27</div>
                <div className="bg-red-300 p-4 rounded-md">**** **** **** 7689 | 09/27</div>
                <div className="bg-gray-100 p-4 text-center rounded-md">Add New</div>
              </div>
              {renderPaymentForm()}
            </div>
            <div className="p-4 sm:p-6 border rounded-md bg-yellow-100">
              <h3 className="text-lg font-semibold border-b pb-2">Order Summary</h3>
              <div className="flex justify-center mt-4">
                <img
                  src={assets.portfolio}
                  alt="Neon Personal Portfolio"
                  className="rounded-lg w-full sm:w-auto"
                />
              </div>
              <p className="text-center font-semibold mt-2">Neon Personal Portfolio (HTML, CSS, JS)</p>
              <p className="text-center text-xl font-bold">₹429.26</p>
              <div className="mt-4 space-y-2">
                <p className="flex justify-between"><span>Delivery Time</span><span>Immediate</span></p>
                <p className="flex justify-between"><span>Commission</span><span>₹429.2</span></p>
                <p className="flex justify-between"><span>Order No.</span><span>6342892472</span></p>
                <p className="flex justify-between"><span>Discount</span><span>12%</span></p>
                <p className="flex justify-between"><span>Subtotal</span><span>₹629.2</span></p>
                <p className="flex justify-between font-bold"><span>Total</span><span>₹429.2</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;