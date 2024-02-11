import React from 'react';
import Navbar from '../components/navbar';
import { Bar } from 'react-chartjs-2';

function Reports() {
    // Sample data for demonstration
    const productsCount = 6;
    const ordersCount = 1500;
    const totalRevenue = 50000;

    // Sample data for the bar chart
    const chartData = {
        labels: ['Suppliers', 'Sellers', 'Retail Customers', 'Warehouse Admins'],
        datasets: [
            {
                label: 'Total Count',
                backgroundColor: ['#4CAF50', '#FFC107', '#2196F3', '#FF5722'],
                borderColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                data: [2, 2, 2, 2], // Sample counts
            },
        ],
    };

    return (
        <>
            <Navbar />
            <main className='mx-auto max-w-screen-xl mt-8'>
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-8">Reports</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-4">Product Summary</h2>
                        <p className="text-gray-600 mb-2">Total Products: {productsCount}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <p className="text-gray-600 mb-2">Total Orders: {ordersCount}</p>
                        <p className="text-gray-600 mb-2">Total Revenue: ${totalRevenue}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-4">Teams Summary</h2>
                        <div className="mt-4">
                            <Bar
                                data={chartData}
                                width={100}
                                height={200}
                                options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                            },
                                        }],
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Reports;
