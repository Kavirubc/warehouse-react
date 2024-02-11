import React from 'react';
import Navbar from '../components/navbar';

function Reports() {
    // Sample data for demonstration
    const productSummary = [
        { name: 'Total Products', count: 100 },
        { name: 'Active Products', count: 80 },
        { name: 'Inactive Products', count: 20 },
    ];

    const brandSummary = [
        { name: 'Total Brands', count: 5 },
        { name: 'Popular Brands', count: 3 },
        { name: 'Unpopular Brands', count: 2 },
    ];

    const teamSummary = [
        { name: 'Total Teams', count: 3 },
        { name: 'Warehouse Admins', count: 1 },
        { name: 'Retail Customers', count: 2 },
    ];

    const stockSummary = [
        { name: 'Total Stock', count: 500 },
        { name: 'Available Stock', count: 350 },
        { name: 'Out of Stock', count: 150 },
    ];

    const orderSummary = [
        { name: 'Total Orders', count: 200 },
        { name: 'Pending Orders', count: 50 },
        { name: 'Completed Orders', count: 150 },
    ];

    return (
        <>
            <Navbar />
            <main className='mx-auto max-w-screen-xl mt-8'>
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-8">Reports</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100 transition duration-300">
                        <h2 className="text-xl font-semibold mb-4">Product Summary</h2>
                        {productSummary.map((item, index) => (
                            <p key={index} className="text-gray-600 mb-2">{item.name}: {item.count}</p>
                        ))}
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100 transition duration-300">
                        <h2 className="text-xl font-semibold mb-4">Brand Summary</h2>
                        {brandSummary.map((item, index) => (
                            <p key={index} className="text-gray-600 mb-2">{item.name}: {item.count}</p>
                        ))}
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100 transition duration-300">
                        <h2 className="text-xl font-semibold mb-4">Team Summary</h2>
                        {teamSummary.map((item, index) => (
                            <p key={index} className="text-gray-600 mb-2">{item.name}: {item.count}</p>
                        ))}
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100 transition duration-300">
                        <h2 className="text-xl font-semibold mb-4">Stock Summary</h2>
                        {stockSummary.map((item, index) => (
                            <p key={index} className="text-gray-600 mb-2">{item.name}: {item.count}</p>
                        ))}
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100 transition duration-300">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        {orderSummary.map((item, index) => (
                            <p key={index} className="text-gray-600 mb-2">{item.name}: {item.count}</p>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Reports;
