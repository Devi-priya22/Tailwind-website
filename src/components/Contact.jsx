import React from "react";
import social from './images/social.png'; // Adjust the path according to your project structure
import Group20 from './images/Group20.png';
import Group21 from './images/Group21.png';

const Contact = () => {
  return (
    <footer id="contact" className="bg-gray-50 py-12">
      {/* Newsletter Signup Section */}
      <div className="container mx-auto text-center mb-12">
        <div className="bg-yellow-400 p-10 rounded-lg relative overflow-hidden">
          {/* Images */}
          <img
            src={Group20}
            alt="Decoration"
            className="absolute w-40 h-40"
            style={{ top: '-20px', left: '-20px', zIndex: 1 }}  // Adjusted positioning with top and left
          />
          <img
            src={Group21}
            alt="Decoration"
            className="absolute w-40 h-40"
            style={{ bottom: '-20px', right: '-20px', zIndex: 1 }}  // Adjusted positioning with bottom and right
          />

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sign up to our newsletter
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur. Egestas et <br /> feugiat purus
            enim facilisi nunc blandit nullam.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-2/3 p-3 rounded-l-full border-2 border-white bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="p-3 rounded-r-full bg-purple-600 text-white hover:bg-purple-800 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Travlog Logo and Description */}
        <div>
          <h3 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>Travlog</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.
          </p>
          <div className="flex space-x-4">
            <img src={social} alt="Social Media Icons" className="w-48 h-auto" />
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Product</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-gray-800">Features</li>
            <li className="text-gray-600 hover:text-gray-800">Pricing</li>
            <li className="text-gray-600 hover:text-gray-800">Case studies</li>
            <li className="text-gray-600 hover:text-gray-800">Reviews</li>
            <li className="text-gray-600 hover:text-gray-800">Updates</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Company</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-gray-800">About</li>
            <li className="text-gray-600 hover:text-gray-800">Careers</li>
            <li className="text-gray-600 hover:text-gray-800">Culture</li>
            <li className="text-gray-600 hover:text-gray-800">Blog</li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-gray-800">Getting started</li>
            <li className="text-gray-600 hover:text-gray-800">Help center</li>
            <li className="text-gray-600 hover:text-gray-800">Server status</li>
            <li className="text-gray-600 hover:text-gray-800">Report a bug</li>
            <li className="text-gray-600 hover:text-gray-800">Chat support</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Contact us</h3>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:contact@company.com"
                className="text-gray-600 hover:text-gray-800"
              >
                contact@company.com
              </a>
            </li>
            <li>Phone: (xx) xxxx-xxxx</li>
            <li>Address: 794 Mcallister St, San Francisco, 94102</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-200 pt-4 text-center flex justify-between items-center">
        <p className="text-sm text-gray-600">
          &copy; 2023 Travlog
        </p>
        <div className="text-sm text-gray-600">
          <span>All Rights Reserved | </span>
          <a href="/terms" className="hover:underline">Terms and Conditions</a>
          <span> | </span>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
