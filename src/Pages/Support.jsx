import React from 'react';
import DashboardNav from '../Components/DashboardNav';
import Sidebar from '../Components/Sidebar';

function Support() {
  return (
    <>
    <div className="sticky top-0 z-10">
        <DashboardNav />
      </div>
      <div className="flex md:h-screen bg-gray-100">
        <Sidebar />
      {/* <div className="flex-1 p-4 md:p-8 max-w-4xl mx-auto"></div> */}
    
      <div className="bg-gradient-to-r from-gray-100 via-yellow-200 to-gray-100 p-8 py-8 md:px-22 rounded-lg max-w-5xl mx-auto w-full">
        <div className="mb-8">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">Saved Items</h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">What is [Your Company Name]?</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">How Do I Place An Order?</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Do You Offer Free Shipping?</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">What Payment Methods Do You Accept?</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Can I Change Or Cancel My Order After It's Been Placed?</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">How Do I Contact Customer Support?</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">How Do I Create An Account?</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Do You Offer Gift Cards?</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">What Is Your Privacy Policy?</a></li>
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">Help & Support</h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">How Do I Contact Customer Support?</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">What Should I Do if I'm Having Trouble With My Order?</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">How Can I Reset My Account Password?</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">How Can I Track My Order Status?</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">What Should I Do if I Received A Faulty Or Incorrect Item?</a></li>
          </ol>
        </div>
      </div>
    </div>
    </>
  );
}

export default Support;