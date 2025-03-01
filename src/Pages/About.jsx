import React from "react";
import assets from "../assets/assets";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <>
    <div className="sticky top-0 z-10">
      <Navbar />
    </div>
    <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 bg-gradient-to-r from-[#ffad33] via-[#ffd633] to-[#ffb84d]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Intro Section */}
        <div className="w-full rounded-lg bg-gradient-to-r from-[#ffd633] via-white to-[#F7FF80] shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-black mb-4 sm:mb-6">
            About Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 font-semibold leading-relaxed max-w-3xl mx-auto">
            We are a passionate team of professionals committed to delivering
            top-notch web development, app development, and design services. Our
            mission is to transform your ideas into powerful and innovative
            solutions that meet your needs.
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mt-8 sm:mt-12">
          {/* Left: Founder Image */}
          {/* Left: Founder Image */}
          <div className="flex justify-center">
            <div className="animated-border w-full max-w-xs">
              {" "}
              {/* Reduced from max-w-sm to max-w-xs */}
              <img
                src={assets.founder}
                alt="Our Founder"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Right: Founder Story */}
          <div className="relative bg-emerald-600 h-full flex flex-col items-center justify-center text-white rounded-lg shadow-lg overflow-hidden p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-4 sm:mb-6">
              Our Founder's Journey
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Our founder's journey is a story of
              <span className="font-bold text-yellow-400"> resilience</span>,
              <span className="font-bold text-yellow-400"> passion</span>, and
              <span className="font-bold text-yellow-400"> innovation</span>.
              From humble beginnings, he envisioned a future driven by impactful
              digital solutions. Through challenges and triumphs, he turned his
              dreams into a thriving reality.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4">
              With a background in software engineering, he identified gaps in
              the industry and dedicated himself to bridging them through
              <span className="font-bold text-yellow-400"> creativity</span> and
              <span className="font-bold text-yellow-400"> dedication</span>.
              His leadership has fostered a culture of
              <span className="font-bold text-yellow-400"> innovation</span>,
              empowering the organization to consistently deliver excellence.
            </p>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="py-12 bg-gradient-to-r from-[#ffd633] via-white to-[#ffd633] mt-20">
          <h2 className="text-2xl  sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our talented team is the driving force behind our success. Get to
            know the passionate individuals dedicated to making your vision a
            reality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            
            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center group">
              <img
                src={assets.teamMember2}
                alt="Team Member 2"
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-500">
                Sagar
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800">
                Backend Developer
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center group">
              <img
                src={assets.teamMember3}
                alt="Team Member 3"
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-500">
                Bobby
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800">
                Frontend Developer
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <img
                src={assets.teamMember4}
                alt="Team Member 3"
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-500">
                Dolly Rani
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800">
                Content Writer
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <img
                src={assets.teamMember5}
                alt="Team Member 3"
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-500">
                Shayana Rout
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800">
                Graphic Designer
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <img
                src={assets.teamMember6}
                alt="Team Member 3"
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-500">
                Aditya Shinde
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800">
                Video Editor
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <img
                src={assets.teamMember7}
                alt="Team Member 3"
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-500">
                Shiva
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800">
                Meta & Google Ads
              </p>
            </div>
          </div>
        </div>

        {/* Company Section */}
        <div className="py-8 sm:py-12 px-4 sm:px-6 md:px-8 bg-gradient-to-r from-[#ffd633] via-white to-[#ffd633] mt-8 sm:mt-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center">
              About Our Company
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 text-center max-w-2xl mx-auto">
              Discover who we are, what we do, and how we can help transform
              your business with innovative solutions and strategic
              partnerships.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="relative bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80] shadow-lg rounded-lg p-6 border-t-4 border-yellow-400 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Who We Are
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We are a team of dedicated professionals passionate about
                  providing cutting-edge solutions for businesses of all sizes.
                </p>
              </div>
              {/* Card 2 */}
              <div className="relative bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80] shadow-lg rounded-lg p-6 border-t-4 border-green-400 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Our mission is to empower businesses by offering services that
                  drive innovation, efficiency, and growth.
                </p>
              </div>
              {/* Card 3 */}
              <div className="relative bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80] shadow-lg rounded-lg p-6 border-t-4 border-blue-400 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Our Expertise
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We specialize in web development, app design, and business
                  automation to help you stay ahead in the competitive market.
                </p>
              </div>
              {/* Card 4 */}
              <div className="relative bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80] shadow-lg rounded-lg p-6 border-t-4 border-purple-400 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Our Values
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Integrity, innovation, and client satisfaction are at the
                  heart of everything we do.
                </p>
              </div>
              {/* Card 5 */}
              <div className="relative bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80] shadow-lg rounded-lg p-6 border-t-4 border-red-400 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Why Choose Us
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  With a proven track record of success, we help businesses
                  unlock their full potential with tailored solutions.
                </p>
              </div>
              {/* Card 6 */}
              <div className="relative bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80] shadow-lg rounded-lg p-6 border-t-4 border-teal-400 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Get in Touch
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Reach out to us today and let’s start a conversation about how
                  we can help your business achieve its goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default About;