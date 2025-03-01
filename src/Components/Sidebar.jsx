import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiUserCircle,
  HiClipboardList,
  HiCurrencyDollar,
  HiBookmark,
  HiQuestionMarkCircle,
  HiMenu,
} from "react-icons/hi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-white rounded-lg shadow-md"
        >
          <HiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`w-64 bg-white shadow-md py-8 px-6 fixed lg:static h-full lg:h-auto transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-200 ease-in-out z-0`}
      >
        <nav>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer ${
                    isActive
                      ? "bg-yellow-200 text-gray-800 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <HiUserCircle className="w-6 h-6" />
                <span>My Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myorders"
                className={({ isActive }) =>
                  `flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer ${
                    isActive
                      ? "bg-yellow-200 text-gray-800 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <HiClipboardList className="w-6 h-6" />
                <span>My Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/subscriptions"
                className={({ isActive }) =>
                  `flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer ${
                    isActive
                      ? "bg-yellow-200 text-gray-800 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <HiCurrencyDollar className="w-6 h-6" />
                <span>My Plans</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/savedprojects"
                className={({ isActive }) =>
                  `flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer ${
                    isActive
                      ? "bg-yellow-200 text-gray-800 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <HiBookmark className="w-6 h-6" />
                <span>Saved Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  `flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer ${
                    isActive
                      ? "bg-yellow-200 text-gray-800 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <HiQuestionMarkCircle className="w-6 h-6" />
                <span>Help & Support</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;