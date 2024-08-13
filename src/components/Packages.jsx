import React from "react";
import rect1 from './images/rect1.png';
import rect2 from './images/rect2.png';
import rect3 from './images/rect3.png';
import rect4 from './images/rect4.png';
import rect5 from './images/rect5.png';
import rect6 from './images/rect6.png';

const Packages = () => {
  return (
    <div id="packages" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-pink-500 text-sm font-semibold uppercase tracking-wide">Top Destination</p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Explore top destinations</h2>
        </div>

        {/* Filter Options */}
        <div className="flex justify-end space-x-6 text-gray-500 mb-8">
          <button className="text-gray-600 hover:text-black font-semibold">City</button>
          <button className="text-gray-600 hover:text-black font-semibold">Mountains</button>
          <button className="text-gray-600 hover:text-black font-semibold">Forest</button>
          <button className="text-gray-600 hover:text-black font-semibold">Island</button>
          <button className="hover:text-black text-pink-500 border-b-2 border-pink-500">See all</button>
        </div>

        {/* Grid Layout for Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Destination Card 1: Tokyo */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src={rect1} alt="Tokyo" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Tokyo</h3>
              <p className="text-gray-600 text-sm mb-4">Lorem Ipsum is simply dummy text of the printing and...see more</p>
              <p className="text-gray-700 text-sm mb-2">Tokyo, Japan</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">$360 <span className="text-sm text-gray-400">12x interest free</span></p>
                <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-400">See More</button>
              </div>
            </div>
          </div>

          {/* Destination Card 2: Rome */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src={rect2} alt="Rome" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Rome</h3>
              <p className="text-gray-600 text-sm mb-4">Lorem Ipsum is simply dummy text of the printing and...see more</p>
              <p className="text-gray-700 text-sm mb-2">Rome, Italy</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">$370 <span className="text-sm text-gray-400">12x interest free</span></p>
                <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-400">See More</button>
              </div>
            </div>
          </div>

          {/* Destination Card 3: Barcelona */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src={rect3} alt="Barcelona" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Barcelona</h3>
              <p className="text-gray-600 text-sm mb-4">Lorem Ipsum is simply dummy text of the printing and...see more</p>
              <p className="text-gray-700 text-sm mb-2">Barcelona, Spain</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">$400 <span className="text-sm text-gray-400">12x interest free</span></p>
                <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-400">See More</button>
              </div>
            </div>
          </div>

          {/* Destination Card 4: Bangkok */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src={rect4} alt="Bangkok" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Bangkok</h3>
              <p className="text-gray-600 text-sm mb-4">Lorem Ipsum is simply dummy text of the printing and...see more</p>
              <p className="text-gray-700 text-sm mb-2">Bangkok, Thailand</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">$350 <span className="text-sm text-gray-400">12x interest free</span></p>
                <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-400">See More</button>
              </div>
            </div>
          </div>

          {/* Destination Card 5: Sydney */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src={rect5} alt="Sydney" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Sydney</h3>
              <p className="text-gray-600 text-sm mb-4">Lorem Ipsum is simply dummy text of the printing and...see more</p>
              <p className="text-gray-700 text-sm mb-2">Sydney, Australia</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">$300 <span className="text-sm text-gray-400">12x interest free</span></p>
                <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-400">See More</button>
              </div>
            </div>
          </div>

          {/* Destination Card 6: Toronto */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src={rect6} alt="Toronto" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Toronto</h3>
              <p className="text-gray-600 text-sm mb-4">Lorem Ipsum is simply dummy text of the printing and...see more</p>
              <p className="text-gray-700 text-sm mb-2">Toronto, Canada</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">$370 <span className="text-sm text-gray-400">12x interest free</span></p>
                <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-400">See More</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Packages;
