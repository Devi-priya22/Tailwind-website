import React from "react";
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.png'; 
import pic3 from './images/pic3.png'; 
import dest1 from './images/dest1.png'; 

const Destination = () => {
  return (
    <div id="destinations" className="p-8 bg-gray-100">
      <div className="ml-8">
        <p className="text-pink-600 font-semibold text-lg">CHOOSE YOUR NEXT DESTINATION</p>
        <p className="text-3xl font-bold text-gray-800 mb-8">Explore top destinations</p>
      </div>

      {/* Arrow Buttons */}
      <div className="flex justify-end items-center mb-4 space-x-4">
        {/* Backward Arrow Button */}
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-purple-200 transition">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        {/* Forward Arrow Button */}
        <button className="bg-purple-600 p-2 rounded-full shadow-md hover:bg-purple-200 transition">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Destination Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img src={pic1} alt="Cappadocia" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Cappadocia</h3>
            <p className="text-gray-600 text-sm mb-4">Lorem Ipsum is simply dummy text of the printing and...see more</p>
            <p className="text-gray-700 text-sm mb-2">Machu Picchu, Peru</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">$380 <span className="text-sm text-gray-400">12x interest free</span></p>
              <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-400">See More</button>
            </div>
          </div>
        </div>

        {/* Destination Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img src={pic2} alt="Nice and Cannes" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Nice and Cannes</h3>
            <p className="text-gray-600 text-sm mb-4">Lorem Ipsum is simply dummy text of the printing and...see more</p>
            <p className="text-gray-700 text-sm mb-2">French Riviera, France</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">$300 <span className="text-sm text-gray-400">12x interest free</span></p>
              <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-400">See More</button>
            </div>
          </div>
        </div>

        {/* Destination Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img src={pic3} alt="Seville" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Seville</h3>
            <p className="text-gray-600 text-sm mb-4">Lorem Ipsum is simply dummy text of the printing and...see more</p>
            <p className="text-gray-700 text-sm mb-2">Seville, Spain</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">$200 <span className="text-sm text-gray-400">12x interest free</span></p>
              <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-400">See More</button>
            </div>
          </div>
        </div>
      </div>

      {/* New Design Section Below the Destination Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 mb-12">
        {/* Image Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <img src={dest1} alt="Unlock Your Dream Destination" className="w-full max-w-xl h-auto object-cover mx-auto"     style={{ marginLeft: '60px' }} // Adjust this value as needed
          />
        </div>

        {/* Text Section */}
        <div className="mt-6 md:mt-0 w-full md:w-1/2 p-6">
          <p className="text-pink-600 font-semibold text-lg">WE ARE THE BEST FOR YOU</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Unlock Your Dream Destination</h2>
          <p className="text-gray-600 mb-6">We are dedicated to making your journey of discovery truly unforgettable. Our team of passionate travel experts is here to assist you in finding the destination of your dreams.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4 text-center transform transition-transform duration-300 hover:scale-105">
              <p className="text-3xl font-bold text-pink-600">4k+</p>
              <p className="text-gray-600">Satisfied Customers</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center transform transition-transform duration-300 hover:scale-105">
              <p className="text-3xl font-bold text-pink-600">1000+</p>
              <p className="text-gray-600">Global Destinations</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center transform transition-transform duration-300 hover:scale-105">
              <p className="text-3xl font-bold text-pink-600">24/7</p>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center transform transition-transform duration-300 hover:scale-105">
              <p className="text-3xl font-bold text-pink-600">100%</p>
              <p className="text-gray-600">Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
