import React from 'react';
import Navbar from '../components/navbar';

function Orders() {
    const totalOrdersOfMonth = 1500;
    const daySummary = {
        totalOrders: 50,
        totalRevenue: 2500,
        averageOrderValue: 50
    };

    const ordersData = [
        { orderId: 'ORD001', customerName: 'John Doe', orderDate: '2024-02-10', totalAmount: 100 },
        { orderId: 'ORD002', customerName: 'Jane Smith', orderDate: '2024-02-10', totalAmount: 150 },
        { orderId: 'ORD003', customerName: 'Alice Johnson', orderDate: '2024-02-09', totalAmount: 120 },
        { orderId: 'ORD004', customerName: 'Bob Brown', orderDate: '2024-02-09', totalAmount: 80 },
        { orderId: 'ORD005', customerName: 'Emma Davis', orderDate: '2024-02-08', totalAmount: 200 },
    ];

    return (
        <>
            <Navbar />
            <main className='mx-auto max-w-screen-xl mt-8'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
                        <h2 className="text-xl font-semibold mb-4">Total Orders of the Month</h2>
                        <p className="text-gray-600">{totalOrdersOfMonth} orders</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
                        <h2 className="text-xl font-semibold mb-4">Day Summary</h2>
                        <p className="text-gray-600">Total Orders: {daySummary.totalOrders}</p>
                        <p className="text-gray-600">Total Revenue: ${daySummary.totalRevenue}</p>
                        <p className="text-gray-600">Average Order Value: ${daySummary.averageOrderValue}</p>
                    </div>
                </div>
                <div className="mt-8">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {ordersData.map((order, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">{order.orderId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{order.customerName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{order.orderDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">${order.totalAmount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default Orders;
