import React, { useState } from 'react';
import { FaUserCircle, FaCreditCard } from 'react-icons/fa';
import DashboardNav from '../Components/DashboardNav';
import Sidebar from '../Components/Sidebar';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    username: 'johndoe',
    email: 'example@yourmail.com',
    phone: '+1234567890'
  });
  const [password, setPassword] = useState({
    current: '',
    new: ''
  });

  const [profileImage, setProfileImage] = useState(null);

  const handlePasswordChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <>
      <div className="sticky top-0 z-10">
        <DashboardNav />
      </div>
      <div className="flex md:h-full bg-gray-100">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-8 bg-gradient-to-r from-gray-100 via-[#ffd633] to-gray-100">
          {activeTab === 'profile' && (
            <div className="max-w-3xl mx-auto">
              {/* Card Component Replaced with a Div */}
              <div className="bg-white shadow-lg rounded-lg">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">Basic Details</h2>
                </div>
                <div className="p-4 space-y-6">
                  {/* Profile Image Upload */}
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      {profileImage ? (
                        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <FaUserCircle size={54} className="text-gray-400" />
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="profileImageUpload"
                    />
                    <label htmlFor="profileImageUpload" className="ml-4 text-sm text-blue-500 cursor-pointer">
                      Change Photo
                    </label>
                  </div>

                  {/* Username Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Username</label>
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Enter your username"
                      required
                      maxLength={50}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Enter your email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Enter your phone number"
                      required
                      pattern="[0-9]{10,15}"
                    />
                  </div>

                  {/* Change Password Section */}
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2">Change Password</h3>
                    <div className="space-y-4">
                      {/* Current Password Input */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Current Password</label>
                        <input
                          type="password"
                          name="current"
                          value={password.current}
                          onChange={handlePasswordChange}
                          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          placeholder="Enter your current password"
                          required
                          minLength={8}
                        />
                      </div>
                      {/* New Password Input */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">New Password</label>
                        <input
                          type="password"
                          name="new"
                          value={password.new}
                          onChange={handlePasswordChange}
                          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          placeholder="Enter your new password"
                          required
                          minLength={8}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method Section */}
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                    <div className="border rounded-lg p-4 bg-white">
                      <div className="flex items-center space-x-4">
                        <FaCreditCard size={32} className="text-blue-500" />
                        <div>
                          <div className="font-medium">VISA ending in 1617</div>
                          <div className="text-sm text-gray-500">Expires 06/25</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Save Changes Button */}
                  <button className="w-full bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;