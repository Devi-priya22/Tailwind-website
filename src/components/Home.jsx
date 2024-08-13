import React from "react";
import home1 from './images/home1.png'; 
import home2 from './images/home2.png'; // Import your additional image

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section id="hero" className="relative bg-white pt-8 lg:pt-16 pb-16 lg:pb-32">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
          <div className="lg:w-1/2 space-y-4 lg:space-y-6 lg:ml-10">
            <p className="text-pink-500 font-semibold">Explore the world</p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Travel <span className="text-pink-500">top</span> destination
              <br /> of the world
            </h1>
            <p className="mt-4 text-lg">
              Where adventure meets comfort, we create <br /> unforgettable travel experiences.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start space-x-4">
              <button className="bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-pink-500">
                Get Started
              </button>
              <button className="border border-purple-700 text-purple-700 px-6 py-3 rounded-lg hover:bg-purple-100">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img
              src={home1}
              alt="Travel Destination"
              className="w-full max-w-full lg:max-w-4xl h-auto mx-auto" // First Image
            />
          </div>
        </div>

        {/* Additional Image Section - slightly moved up */}
        <div className="flex justify-center" style={{ marginTop: '-206px' }}>  {/* Inline negative margin */}
          <img
            src={home2}
            alt="Additional Travel Destination"
            className="w-full max-w-5xl h-4"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
