import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-white">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                        Travlog
                    </h1>
                    <div className="flex items-center lg:order-2">
                        <div className="hidden mt-2 mr-4 sm:inline-block">
                            <span></span>
                        </div>
                        <div className="flex space-x-4">
                            <button className="bg-[#eca6ee] text-white px-5 py-2 rounded-full hover:bg-[#803fd4]">
                                Log In
                            </button>
                            <button className="bg-[#eca6ee] text-white px-5 py-2 rounded-full hover:bg-[#803fd4]">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    {/* Navigation Links for Large Screens */}
                    <div className="hidden lg:flex lg:space-x-8 lg:order-1">
                        <a href="#home" className="text-gray-700 hover:text-purple-600">
                            Home
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-purple-600">
                            About
                        </a>
                        <a href="#destinations" className="text-gray-700 hover:text-purple-600">
                            Destinations
                        </a>
                        <a href="#packages" className="text-gray-700 hover:text-purple-600">
                            Packages
                        </a>
                        <a href="#blog" className="text-gray-700 hover:text-purple-600">
                            Blog
                        </a>
                        <a href="#contact" className="text-bold text-gray-700 hover:text-purple-600">
                            Contact
                        </a>
                    </div>
                    {/* Hamburger Menu for Small Screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-black focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-purple-600 text-white h-screen">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-10">Travlog</h2>
                        <ul className="space-y-6 text-lg">
                            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                            <li><a href="#about" className="hover:text-gray-400">About</a></li>
                            <li><a href="#destinations" className="hover:text-gray-400">Destinations</a></li>
                            <li><a href="#packages" className="hover:text-gray-400">Packages</a></li>
                            <li><a href="#blog" className="hover:text-gray-400">Blog</a></li>
                            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                        </ul>
                        <p className="mt-10 text-sm">© 2023 All rights reserved</p>
                    </div>
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-white focus:outline-none">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
