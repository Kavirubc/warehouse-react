import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

import logo from './flowb.svg';

function Footer() {
    return (
        <>
            {/* Navbar section */}
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                {/* Navbar content */}
            </nav>

            {/* Footer section */}
            <footer className="bg-gray-900 text-white py-4">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Logo and copyright */}
                        <div className="flex items-center">
                            <img
                                src={logo}
                                className="h-8"
                                alt="Flowbite Logo"
                            />
                            <span className="ml-2 text-sm">
                                &copy; kode2024. All rights reserved.
                            </span>
                        </div>

                        {/* Navigation links */}
                        <ul className="flex space-x-4">
                            <li>
                                <Link
                                    to="/about"
                                    className="text-sm hover:underline"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-sm hover:underline"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            {/* Add more navigation links as needed */}
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
