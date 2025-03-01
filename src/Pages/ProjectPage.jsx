import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import assets from "../assets/assets";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const templates = [
  {
    title: "Modern UI UX Portfolio",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    price: 399,
    image: `${assets.portfolio}`,
    type: "premium",
  },
  {
    title: "Neon Personal Portfolio",
    tags: ["HTML", "CSS", "Javascript"],
    price: 0,
    image: `${assets.nion}`,
    type: "free",
  },
  {
    title: "Freelance Developer",
    tags: ["HTML", "CSS", "Javascript"],
    price: 399,
    image: `${assets.port}`,
    type: "premium",
  },
  {
    title: "Animated Personal Portfolio",
    tags: ["HTML", "CSS", "Javascript"],
    price: 0,
    image: `${assets.freelancer}`,
    type: "free",
  },
];

const Trending = [
  {
    title: "Modern UI UX Portfolio",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    price: 399,
    image: `${assets.port}`,
    type: "premium",
  },
  {
    title: "Neon Personal Portfolio",
    tags: ["HTML", "CSS", "Javascript"],
    price: 0,
    image: `${assets.nion}`,
    type: "free",
  },
  {
    title: "Freelance Developer",
    tags: ["HTML", "CSS", "Javascript"],
    price: 399,
    image: `${assets.portfolio}`,
    type: "premium",
  },
  {
    title: "Animated Personal Portfolio",
    tags: ["HTML", "CSS", "Javascript"],
    price: 0,
    image: `${assets.nion}`,
    type: "free",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Filter templates based on the active tab
  const filteredTemplates =
    activeTab === "all"
      ? templates
      : templates.filter((template) => template.type === activeTab);

  // Slider settings for trending templates
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="sticky top-0 z-10">
      <Navbar />
    </div>
    <div className=" bg-gradient-to-r from-[#ffad33] via-[#ffd633] to-[#ffb84d]  min-h-screen p-8 md:p-18 text-black">
      

      <h1 className="text-center text-4xl font-bold mt-1">Our All Projects</h1>

      {/* Template Filters */}
      <div className="flex justify-center gap-2 md:h-[30px] mt-6">
        <button
          className={`px-3 py-1 rounded-xl ${
            activeTab === "all" ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => handleTabClick("all")}
        >
          All Templates
        </button>
        <button
          className={`px-3 py-1 rounded-xl ${
            activeTab === "free" ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => handleTabClick("free")}
        >
          Free
        </button>
        <button
          className={`px-3 py-1 rounded-xl ${
            activeTab === "premium" ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => handleTabClick("premium")}
        >
          Premium
        </button>
      </div>

      {/* Portfolio Templates Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {filteredTemplates.map((template, index) => (
          <div key={index} className="bg-yellow-100 p-2 rounded-lg shadow-lg">
            <img
              src={template.image}
              alt={template.title}
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="font-medium text-sm mt-2">{template.title}</h3>
            <div className="flex flex-wrap mt-2">
              {template.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-green-500 text-white text-xs px-2 py-1 rounded mr-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <Link to={"/productpage"} className="bg-yellow-500 text-black px-3 py-1 rounded flex-1">
                {template.price === 0 ? "Download Free" : `Buy @₹${template.price}`}
              </Link>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-full">
                ▶
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center">
        <button className="text-xl px-4 mt-4 bg-yellow-100 text-black font-semibold rounded">
          See More
        </button>
      </div> */}

      {/* Trending Templates Section */}
      <h2 className="mt-10 text-xl font-bold">Trending Templates</h2>
      <div className="mt-4">
        <Slider {...sliderSettings}>
          {Trending.map((template, index) => (
            <div key={index} className="px-2 mb-6">
              <div className="bg-yellow-100 p-2 rounded-lg shadow-lg">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-24 object-cover rounded"
                />
                <h3 className="font-medium text-sm mt-2">{template.title}</h3>
                <div className="flex gap-2 mt-2">
                  <button className="bg-yellow-500 text-black px-3 py-1 rounded flex-1">
                    {template.price === 0 ? "Download Free" : `Buy @₹${template.price}`}
                  </button>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-full">
                    ▶
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Home;