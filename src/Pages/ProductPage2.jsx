import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Components/Footer";

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


const Product = () => {

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className="bg-gradient-to-r from-[#ffad33] via-[#ffd633] to-[#ffb84d] min-h-screen p-8 md:p-16 text-black">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-600">
        Home &gt; Projects &gt; <span className="text-green-600 font-semibold">Mordern Ui Ux Portfolio</span>
      </nav>
      
      {/* Product Details */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Preview */}
        <div className="bg-yellow-200 p-4 rounded-lg">
          <img src={assets.portfolio} alt="Neon Portfolio" className="w-full rounded" />
          
        </div>
        

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold">Neon Personal Portfolio | HTML, CSS, JS</h1>
          <div className="flex gap-2 mt-2">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">HTML</span>
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">CSS</span>
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">Javascript</span>
            <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded">Tailwind Css</span>
          </div>
          
          <p className="mt-4 text-gray-700 text-sm">
            Unlock your creative potential with this professional portfolio website template.
            Perfect for showcasing your work, it comes with an easy-to-edit structure and modern design.
          </p>

          <h3 className="mt-4 font-semibold">Features:</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>Responsive Layout</li>
            <li>Easy Customization</li>
            <li>SEO-Friendly Design</li>
          </ul>

          <h3 className="mt-4 font-semibold">Payment Details:</h3>
          <p className="text-sm text-gray-700">Upon payment, you will receive a download link and zip file to access your source code.</p>
          
          <h3 className="mt-4 font-semibold">Contact:</h3>
          <p className="text-sm text-gray-700">Instagram: <a href="https://www.instagram.com/" className="text-blue-600">@hyby</a></p>
          <p className="text-sm text-gray-700">Gmail: <a href="mailto:alsicocde@gmail.com" className="text-blue-600">hybycodes@gmail.com</a></p>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 "> 
      <div className="mt-6 p-6 bg-gradient-to-b text-center from-yellow-400 via-yellow-100 to-yellow-200 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold">₹429.26</h2>
        <p className="text-sm text-gray-500">10 People Bought This</p>
        <input type="number" className="border mt-2 p-2 w-full rounded" placeholder="Enter a fair price" defaultValue="429.26" />
        <button className="bg-green-500 text-white w-full py-2 mt-4 cursor-pointer rounded">Add To Cart</button>
        <button className="bg-blue-500 text-white w-full py-2 mt-2 cursor-pointer rounded">Buy Now</button>
      </div>
      <div className="mt-4">
      <h2 className="md:mt-10 mb-4 text-xl font-bold">Related Templates</h2>
        <Slider {...sliderSettings}>
          {Trending.map((template, index) => (
            <div key={index} className="px-2 mb-6">
              <div className="bg-yellow-100 p-2 rounded-lg shadow-lg">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-24  object-cover rounded"
                />
                <h3 className="font-medium text-sm md:text-xs mt-2">{template.title}</h3>
                <div className="flex gap-2 mt-2">
                  <button
                    className="bg-yellow-500 md:text-sm text-black px-3 py-1 rounded flex-1"
                    // onClick={handleProjectAccess} // Add click handler for project access
                  >
                    {template.price === 0 ? " Free" : `Buy @₹${template.price}`}
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

    </div>
    <Footer />
    </>
  );
};

export default Product;