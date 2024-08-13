import React from "react";
import blogg1 from './images/blogg1.png';
import blogg2 from './images/blogg2.png';
import expertise from './images/expertise.png';
import passion from './images/passion.png';
import dedication from './images/dedication.png';

const Blog = () => {
  return (
    <section id="blog" className="bg-white py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between">
        
        {/* Right Section with Image, shown first on small screens */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 mb-10 lg:mb-0"> 
          <img 
            src={blogg1} 
            alt="Travel Adventure" 
            className="w-[300px] lg:w-[400px] xl:w-[600px] h-auto max-w-full"
          />
        </div>

        {/* Left Section with Text, shown second on small screens */}
        <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <p className="text-pink-500 text-lg font-semibold mb-4">Our Experience</p>
          <h2 className="text-5xl font-bold leading-snug">
            Crafting <br />
            Unforgettable <br />
            Adventures
          </h2>
          <p className="text-gray-600 mt-6">
            We excel in curating memorable journeys, specializing in customer destinations around the globe. With a wealth of experience, we bring adventure to life and invite you to embark on your own. The call of nature awaits—begin your adventure today!
          </p>

          {/* Stats Section Below the Text */}
          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-gray-100 transition duration-300">
              <p className="text-3xl font-bold text-pink-500 hover:text-pink-700">1,000+</p>
              <p className="text-gray-600 mt-2">Outdoor destinations</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-gray-100 transition duration-300">
              <p className="text-3xl font-bold text-pink-500 hover:text-pink-700">98%</p>
              <p className="text-gray-600 mt-2">Customer satisfaction</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-gray-100 transition duration-300">
              <p className="text-3xl font-bold text-pink-500 hover:text-pink-700">15+</p>
              <p className="text-gray-600 mt-2">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section Below Stats */}
      <div className="container mx-auto mt-16">
        {/* Meet Our Expert Tour Guides Section */}
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Side with Text */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Expert Tour Guides</h2>
            <p className="text-gray-600 mb-6">
              Our journeys are enriched by our team of seasoned tour guides. Our guides bring your adventures to life with their expertise, passion, and dedication.
            </p>

            {/* Image placed directly below the text */}
            <img src={blogg2} alt="Gramado, Brazil" className="mt-5" />
          </div>

          {/* Right Side with Icons and Content */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
            <div className="space-y-10"> {/* Increased space between the sections */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <img src={expertise} alt="Expertise Icon" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Expertise</h3>
                  <p className="text-gray-600">Our guides are experts in their fields, ensuring in-depth knowledge and insights into every destination.</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <img src={passion} alt="Passion Icon" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Passion</h3>
                  <p className="text-gray-600">They are passionate about travel, culture, and history, making your journey engaging and captivating.</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <img src={dedication} alt="Dedication Icon" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Dedication</h3>
                  <p className="text-gray-600">Our guides are dedicated to providing exceptional service and ensuring your travel memories are truly unforgettable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
