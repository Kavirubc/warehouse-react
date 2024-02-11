import React from 'react'
import '../';
import logo from './flowb.svg';

function Navbar() {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a
                        href="/home"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src={logo}
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Warehouse
                        </span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a
                            href="tel:0711231234"
                            className="text-sm  text-gray-500 dark:text-white hover:underline"
                        >
                            (071) 123-1234
                        </a>
                        <a
                            href="/login"
                            className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                        >
                            Login
                        </a>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a
                                    href="/home"
                                    className="text-gray-900 dark:text-white hover:underline"
                                    aria-current="page"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/brands"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    Brands
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/stocks"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    Stocks
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/orders"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    Orders
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/reports"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    Reports
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/products"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/teams"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    Teams
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar
