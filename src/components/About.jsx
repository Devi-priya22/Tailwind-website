import React from "react";
import about1 from './images/about1.png';
import about2 from './images/about2.png'; 
import about3 from './images/about3.png';

const About = () => {
  return (
    <div id="about">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/4 mb-8 md:mb-0 text-left pl-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider text-pink-600">
              What We Serve
            </h2>
            <h3 className="text-5xl font-bold text-gray-900 mb-4">
              Top Values<br /> For You
            </h3>
            <p className="text-gray-600 text-m">
              Embrace life's vastness,<br /> venture forth
            </p>
          </div>
          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <img
                src={about1} // Use the correct imported image
                alt="Lot of Choices"
                className="mx-auto mb-2 w-12 h-12"
              />
              <h4 className="text-2xl font-semibold text-gray-800 mb-1">
                Lot of Choices
              </h4>
              <p className="text-gray-500 text-s">
                Embrace life's vastness,<br /> venture forth
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <img
                src={about2} // Use the correct imported image
                alt="Best Tour Guide"
                className="mx-auto mb-2 w-12 h-12"
              />
              <h4 className="text-2xl font-semibold text-gray-800 mb-1">
                Best Tour Guide
              </h4>
              <p className="text-gray-500 text-s">
                Embrace life's vastness,<br /> venture forth
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <img
                src={about3} // Use the correct imported image
                alt="Easy Booking"
                className="mx-auto mb-2 w-12 h-12"
              />
              <h4 className="text-2xl font-semibold text-gray-800 mb-1">
                Easy Booking
              </h4>
              <p className="text-gray-500 text-s">
                Embrace life's vastness,<br /> venture forth
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
