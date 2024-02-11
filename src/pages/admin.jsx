import React from 'react';
import { Link } from 'react-router-dom';

function Admin() {
    return (
        <div className="max-w-screen-xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-semibold text-center my-8">Admin Dashboard</h1>
            <nav className="bg-gray-800 text-white py-4 mb-8">
                <div className="flex justify-center items-center space-x-4">
                    <Link to="#products" className="hover:underline">Products</Link>
                    <Link to="#brands" className="hover:underline">Brands</Link>
                    <Link to="#teams" className="hover:underline">Teams</Link>
                    <Link to="#stocks" className="hover:underline">Stocks</Link>
                    <Link to="#orders" className="hover:underline">Orders</Link>
                    <Link to="/home" className="hover:underline">Back to Dashboard</Link>

                </div>
            </nav>

            <div id="products" className="section mb-8">
                <h2 className="text-xl font-semibold mb-4">Products</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1">Name:</label>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none" />
                    </div>
                    <div>
                        <label className="block mb-1">Description:</label>
                        <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Add Product</button>
                </form>
            </div>

            <div id="brands" className="section mb-8">
                <h2 className="text-xl font-semibold mb-4">Brands</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1">Name:</label>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none" />
                    </div>
                    <div>
                        <label className="block mb-1">Description:</label>
                        <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Add Brand</button>
                </form>
            </div>

            <div id="teams" className="section mb-8">
                <h2 className="text-xl font-semibold mb-4">Teams</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1">Name:</label>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none" />
                    </div>
                    <div>
                        <label className="block mb-1">Description:</label>
                        <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Add Team</button>
                </form>
            </div>

            <div id="stocks" className="section mb-8">
                <h2 className="text-xl font-semibold mb-4">Stocks</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1">Product:</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none">
                            <option>Product 1</option>
                            <option>Product 2</option>
                            <option>Product 3</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1">Quantity:</label>
                        <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Update Stock</button>
                </form>
            </div>

            <div id="orders" className="section mb-8">
                <h2 className="text-xl font-semibold mb-4">Orders</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1">Product:</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none">
                            <option>Product 1</option>
                            <option>Product 2</option>
                            <option>Product 3</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1">Quantity:</label>
                        <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Place Order</button>
                </form>
            </div>
        </div>
    );
}

export default Admin;
