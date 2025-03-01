import React, { useState } from "react";
import DashboardNav from "../Components/DashboardNav";
import Sidebar from "../Components/Sidebar";

const SubscriptionPage = () => {
  // State to manage the current subscription
  const [currentSubscription, setCurrentSubscription] = useState({
    price: "99",
    period: "Per Month",
    benefits: [
      "Basic Plan",
      "Access to Standard Features",
      "Up to 5 Projects",
      "Limited Support",
      "Regular Updates",
    ],
    renewalDate: "15 Days", // Renewal date in days
  });

  // Array of upgrade plans
  const upgradePlans = [
    {
      price: "199",
      period: "Per Month",
      color: "bg-green-500",
      benefits: [
        "Standard Plan",
        "All Basic Features",
        "Up to 20 Projects",
        "Priority Support",
        "Advanced Analytics",
      ],
    },
    {
      price: "299",
      period: "Per Month",
      color: "bg-red-500",
      benefits: [
        "Premium Plan",
        "All Standard Features",
        "Unlimited Projects",
        "24/7 Support",
        "Dedicated Account Manager",
      ],
    },
    {
      price: "599",
      period: "Yearly",
      color: "bg-green-500",
      benefits: [
        "Standard Yearly",
        "All Basic Features",
        "Up to 20 Projects",
        "Priority Support",
        "Advanced Analytics",
        "Discounted Yearly Rate",
      ],
    },
    {
      price: "999",
      period: "Yearly",
      color: "bg-black",
      benefits: [
        "Premium Yearly",
        "All Premium Features",
        "Unlimited Projects",
        "24/7 Support",
        "Dedicated Account Manager",
        "Exclusive Features",
        "Significant Yearly Discount",
      ],
    },
  ];

  return (
    <>
      <div className="sticky top-0 z-10">
        <DashboardNav />
      </div>
      <div className="flex md:h-full bg-gradient-to-r from-gray-100 via-yellow-200 to-gray-100">
        <Sidebar />
        <div className="flex-1 p-4 md:p-8 max-w-4xl mx-auto">
          {/* Current Subscription */}
          <h2 className="font-bold text-2xl mb-4">Current Subscription</h2>
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row">
            <div className="bg-orange-500 text-white p-6 rounded-lg text-center w-full md:w-1/3">
              <p className="text-3xl font-bold">
                {currentSubscription.price}
                <sup>Rs</sup>
              </p>
              <p className="text-sm">{currentSubscription.period}</p>
            </div>
            <div className="p-4 w-full md:w-2/3">
              <h3 className="font-semibold">Benefits</h3>
              <ul className="text-sm list-disc list-inside">
                {currentSubscription.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mt-2">
            Renews In {currentSubscription.renewalDate}
          </p>

          {/* Upgrade Subscription */}
          <h2 className="font-bold text-2xl p-4 mt-6 mb-2">
            Upgrade Your Subscription
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {upgradePlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row"
              >
                <div
                  className={`${plan.color} text-white p-6 rounded-lg text-center w-full md:w-1/3`}
                >
                  <p className="text-3xl mt-8 font-bold">
                    {plan.price}
                    <sup>Rs</sup>
                  </p>
                  <p className="text-sm">{plan.period}</p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-2 md:px-1 md:py-1 rounded mt-4">
                    Upgrade
                  </button>
                </div>
                <div className="p-4 w-full md:w-2/3">
                  <h3 className="font-semibold">Benefits</h3>
                  <ul className="text-sm list-disc list-inside">
                    {plan.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;