import React from 'react';
import Sidebar from '../Components/Sidebar';
import DashboardNav from '../Components/DashboardNav';
import assets from '../assets/assets';

const Myorders = () => {
  const scripts = [
    {
      title: 'Freelance Developer',
      image: `${assets.port}`, // Replace with actual image path
      price: '$199',
    },
    {
      title: 'Neon Personal Portfolio',
      image: `${assets.port}`, // Replace with actual image path
      price: '$249',
    },
    {
      title: 'Freelance Developer',
      image: `${assets.port}`, // Replace with actual image path
      price: '$199',
    },
    
  ];

  const projects = [
    {
      title: 'Freelance Developer',
      image: `${assets.port}`, // Replace with actual image path
    },
    {
      title: 'Neon Personal Portfolio',
      image: `${assets.port}`, // Replace with actual image path
    },
    {
      title: 'Freelance Developer',
      image: `${assets.port}`, // Replace with actual image path
    },
    
  ];

  return (
    <>
      <div className="sticky top-0 z-10">
        <DashboardNav />
      </div>
      <div className="flex md:h-screen bg-gradient-to-r from-gray-100 via-yellow-200 to-gray-100">
        <Sidebar />
        <div className="flex-1"> {/* added flex-1 to allow div to take up remaining space */}
          {/* Recent Purchased Scripts */}
          <div className="p-8 max-w-7xl mx-auto mb-2">
            <h2 className="text-xl font-semibold mb-4 border-l-4 border-gray-800 pl-2">
              Recent Purchased Scripts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {scripts.map((script, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                  <img
                    src={script.image}
                    alt={script.title}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-lg font-medium mb-1">{script.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{script.price}</p>
                  <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Purchased Projects */}
          <div className="p-8 max-w-7xl mx-auto mb-8"> {/* added max-w-5xl and mx-auto */}
            <h2 className="text-xl font-semibold mb-4 border-l-4 border-gray-800 pl-2">
              Recent Purchased Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-lg font-medium mb-1">{project.title}</h3>
                  <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full">
                    View
                  </button>
                  
                  

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myorders;