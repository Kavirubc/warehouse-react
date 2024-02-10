import React, { useState } from 'react';
import Navbar from '../components/navbar';
import '../App.css';

function StockPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        // Implement search functionality here
        console.log('Searching for:', searchQuery);
    };

    return (
        <>
            <Navbar />
            <main className='container mx-auto max-w-screen-xl mt-8'>
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold text-gray-800 mb-8'>Stock Inventory</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='group border border-gray-200 rounded-lg p-6 shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                        <h2 className='text-xl font-semibold mb-4'>Product 1</h2>
                        <p className='text-gray-600'>Quantity: 100</p>
                        <p className='text-gray-600'>Price: $10</p>
                    </div>
                    <div className='group border border-gray-200 rounded-lg p-6 shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                        <h2 className='text-xl font-semibold mb-4'>Product 2</h2>
                        <p className='text-gray-600'>Quantity: 75</p>
                        <p className='text-gray-600'>Price: $15</p>
                    </div>
                    <div className='group border border-gray-200 rounded-lg p-6 shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                        <h2 className='text-xl font-semibold mb-4'>Product 3</h2>
                        <p className='text-gray-600'>Quantity: 50</p>
                        <p className='text-gray-600'>Price: $20</p>
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            className="p-2 rounded-l border border-gray-300 focus:outline-none focus:border-indigo-500"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="mt-8">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Sample data */}
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">Product 1</td>
                                <td className="px-6 py-4 whitespace-nowrap">100</td>
                                <td className="px-6 py-4 whitespace-nowrap">$10</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">Product 2</td>
                                <td className="px-6 py-4 whitespace-nowrap">75</td>
                                <td className="px-6 py-4 whitespace-nowrap">$15</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">Product 3</td>
                                <td className="px-6 py-4 whitespace-nowrap">50</td>
                                <td className="px-6 py-4 whitespace-nowrap">$20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default StockPage;
