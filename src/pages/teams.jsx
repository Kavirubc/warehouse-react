import React from 'react';
import Navbar from '../components/navbar';

function Teams() {
    const teamsData = {
        suppliers: [
            { id: 1, name: 'Supplier 1', contact: 'John Doe', email: 'john.doe@example.com', phone: '+1234567890' },
            { id: 2, name: 'Supplier 2', contact: 'Jane Smith', email: 'jane.smith@example.com', phone: '+1987654321' },
        ],
        sellers: [
            { id: 1, name: 'Seller 1', contact: 'Alice Johnson', email: 'alice.johnson@example.com', phone: '+1122334455' },
            { id: 2, name: 'Seller 2', contact: 'Bob Brown', email: 'bob.brown@example.com', phone: '+1554433221' },
        ],
        retailCustomers: [
            { id: 1, name: 'Customer 1', contact: 'Emma Davis', email: 'emma.davis@example.com', phone: '+1654789301' },
            { id: 2, name: 'Customer 2', contact: 'David Wilson', email: 'david.wilson@example.com', phone: '+1789456230' },
        ],
        warehouseAdmins: [
            { id: 1, name: 'Admin 1', contact: 'Michael Clark', email: 'michael.clark@example.com', phone: '+1888777666' },
            { id: 2, name: 'Admin 2', contact: 'Sarah Taylor', email: 'sarah.taylor@example.com', phone: '+1999888777' },
        ],
    };

    return (
        <>
            <Navbar />
            <main className='mx-auto max-w-screen-xl mt-8'>
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-8">Teams</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-4">Suppliers</h2>
                        <p className="text-gray-600 mb-2">Total: {teamsData.suppliers.length}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-4">Sellers</h2>
                        <p className="text-gray-600 mb-2">Total: {teamsData.sellers.length}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-4">Retail Customers</h2>
                        <p className="text-gray-600 mb-2">Total: {teamsData.retailCustomers.length}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-4">Warehouse Admins</h2>
                        <p className="text-gray-600 mb-2">Total: {teamsData.warehouseAdmins.length}</p>
                    </div>
                </div>
                <div className="mt-8">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {teamsData.suppliers.map((supplier) => (
                                <tr key={supplier.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{supplier.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{supplier.contact}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{supplier.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{supplier.phone}</td>
                                </tr>
                            ))}
                            {teamsData.sellers.map((seller) => (
                                <tr key={seller.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{seller.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{seller.contact}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{seller.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{seller.phone}</td>
                                </tr>
                            ))}
                            {teamsData.retailCustomers.map((customer) => (
                                <tr key={customer.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{customer.contact}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{customer.phone}</td>
                                </tr>
                            ))}
                            {teamsData.warehouseAdmins.map((admin) => (
                                <tr key={admin.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{admin.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{admin.contact}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{admin.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{admin.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default Teams;
